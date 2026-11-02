import assert from 'node:assert/strict'
import {readFileSync,mkdirSync} from 'node:fs'
import {createClient} from '@supabase/supabase-js'
import {loadEnv} from 'vite'
import {chromium} from '@playwright/test'
const {code}=JSON.parse(readFileSync('work/test-class.json'))
const env=loadEnv('development',process.cwd(),'VITE_');const db=createClient(env.VITE_SUPABASE_URL,env.VITE_SUPABASE_ANON_KEY,{auth:{persistSession:false}})
// Fixtures are restricted to a separately created test class. The Student UI never seeds rows.
assert.notEqual(code,'DEMO')
async function insert(table,value){const r=await db.from(table).insert(value).select();if(r.error)throw r.error;return r.data}
async function wait(test,label){for(let i=0;i<80;i++){const value=await test();if(value)return value;await new Promise(r=>setTimeout(r,200))}throw Error('Timed out: '+label)}
async function response(kind,payload,activity_id,student='Maya Chen'){return insert('responses',{session:code,activity_id,student,kind,payload:{...payload,sim:true}})}
async function rows(){const r=await db.from('responses').select('*').eq('session',code);if(r.error)throw r.error;return r.data}
const [question]=await insert('questions',{session:code,student:'Maya Chen',text:'我们应该先做亲和图吗？',text_en:'Should we start with an affinity map?',lang:'zh',slide:3})
await insert('reactions',[{session:code,kind:'got',student:'Maya Chen'},{session:code,kind:'got',student:'Alex Morgan'}])
const concept=code+'-shared-concept'
const spec={questions:[{type:'mc',text:'Which evidence is useful?',options:[{t:'Research patterns'},{t:'Assumptions'},{t:'An ideal customer'},{t:'A fictional character'}]},{type:'scale',text:'How confident are you?'},{type:'open',text:'What did you notice?'}]}
await insert('activities',{id:concept,session:code,kind:'concept',slide:3,spec})
for(const a of [0,0,1])await response('choice',{q:0,answer:a},concept)
for(const a of [2,4])await response('rating',{q:1,answer:a},concept)
await response('open',{q:2,text:'我们用访谈证据。',text_en:'We used interview evidence.',lang:'zh'},concept)
await response('peer_reply',{text:'Can you add a quote?'},concept,'Alex Morgan')
const browser=await chromium.launch({...(process.env.STUDIO_BRIDGE_CHROME?{executablePath:process.env.STUDIO_BRIDGE_CHROME}:{}),headless:true})
mkdirSync('work/qa',{recursive:true})
try{
 const page=await browser.newPage({viewport:{width:1440,height:900}});const errors=[];page.on('pageerror',e=>errors.push(e.message))
 await page.goto(process.env.STUDENT_TEST_URL||'http://127.0.0.1:8443/')
 await page.getByText('Live class',{exact:true}).first().waitFor();assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('studio-bridge-class')).code),code,'Run dev server with the isolated test class code');assert.equal(await page.getByRole('dialog').count(),0)
 await page.getByText('Should we start with an affinity map?',{exact:true}).waitFor()
 await page.getByText('Maya C.',{exact:true}).first().waitFor();assert.equal(await page.getByText('Maya Chen',{exact:true}).count(),0)
 const questionCard=page.locator('.question-card').filter({hasText:'Should we start with an affinity map?'})
 await questionCard.getByRole('button',{name:'Reply',exact:true}).click();await questionCard.locator('textarea').fill('Yes, start with the evidence.')
 await questionCard.getByRole('button',{name:'Send reply',exact:true}).click()
 await wait(async()=>(await rows()).some(r=>r.kind==='qa_reply'&&r.payload.questionId===question.id),'Q&A reply without activity')
 const rx=await db.from('questions').select('upvotes').eq('id',question.id).single();const before=rx.data.upvotes
 await Promise.all([db.rpc('upvote_question',{qid:question.id}),db.rpc('upvote_question',{qid:question.id})])
 await wait(async()=>{const r=await db.from('questions').select('upvotes').eq('id',question.id).single();return r.data.upvotes===before+2},'atomic votes')
 await questionCard.locator('.question-actions > button').first().click()
 await wait(async()=>{const r=await db.from('questions').select('upvotes').eq('id',question.id).single();return r.data.upvotes===before+3},'UI RPC vote')
 await response('qa_reply',{questionId:question.id,text:'We started with observations.'},'none','Alex Morgan')
 await page.getByText('We started with observations.',{exact:true}).waitFor()
 await insert('questions',{session:code,student:'Yuki Tanaka',text:'A new live question',slide:3})
 await page.getByText('A new live question',{exact:true}).waitFor();await page.getByText('Yuki T.',{exact:true}).waitFor()
 await page.getByRole('button',{name:/Got it, 2 reactions/}).waitFor();await insert('reactions',{session:code,kind:'got',student:'Yuki Tanaka'})
 await page.getByRole('button',{name:/Got it, 3 reactions/}).waitFor()
 console.log('PASS automatic join / abbreviated names / translation / Q&A without active activity / atomic votes / incoming questions and reactions')
 async function activate(id,kind,spec={}){if(id!==concept)await insert('activities',{id,session:code,kind,slide:3,spec});const r=await db.from('sessions').update({state:{slide:3,activityId:id,activityKind:kind}}).eq('code',code);if(r.error)throw r.error;await page.getByLabel('Live class activity').waitFor()}
 await activate(concept,'concept')
 for(const [width,height]of [[1440,900],[1024,768]]) { await page.setViewportSize({width,height}); const submit=page.getByRole('button',{name:'Submit response →',exact:true});await submit.waitFor();const b=await submit.boundingBox();const card=await page.locator('.slide-surface').boundingBox();assert.ok(b.y+b.height<=card.y+card.height,'Concept submit outside card');await page.screenshot({path:`work/qa/shared-concept-${width}.png`}) }
 await page.setViewportSize({width:1440,height:900})
 await page.getByRole('button',{name:'A Research patterns',exact:true}).click();await page.getByRole('button',{name:'Submit response →',exact:true}).click()
 await page.getByLabel('Class results').getByText('75%',{exact:true}).waitFor()
 await response('choice',{q:0,answer:1},concept,'Yuki Tanaka')
 await page.getByLabel('Class results').getByText('60%',{exact:true}).waitFor()
 await page.getByText('Can you add a quote?',{exact:true}).waitFor()
 await page.getByRole('button',{name:'Question 2',exact:true}).click();await page.locator('.tutor-scale').getByRole('button',{name:'5',exact:true}).click();await page.getByRole('button',{name:'Submit response →',exact:true}).click()
 await page.getByLabel('Class average').getByText('3.7',{exact:false}).waitFor()
 await page.getByRole('button',{name:'Question 3',exact:true}).click();await page.getByRole('textbox',{name:'Your response',exact:true}).fill('We found a repeating need.');await page.getByRole('button',{name:'Submit response →',exact:true}).click()
 await page.getByText('We used interview evidence.',{exact:true}).waitFor();await page.getByLabel('Classmates’ answers').getByRole('button',{name:'View original',exact:true}).click();await page.getByText('我们用访谈证据。',{exact:true}).waitFor()
 console.log('PASS live MC bars / scale average / other open answers / original text / activity replies without q')
 const reflect=code+'-shared-reflection';await activate(reflect,'reflection',{question:'What changed?',hint:'Use evidence.'});await response('reflection',{text:'I now check patterns.'},reflect)
 await page.getByRole('textbox',{name:'Your response',exact:true}).fill('I understand it differently.');await page.getByRole('button',{name:'Submit response →',exact:true}).click();await page.getByText('I now check patterns.',{exact:true}).waitFor()
 const discuss=code+'-shared-discussion';await activate(discuss,'discussion');await response('discussion',{card:0},discuss);await page.getByRole('button',{name:/Play Agree card.*0 played/}).waitFor();await page.getByRole('button',{name:/Play Agree card/}).click();await page.getByRole('button',{name:/Play Agree card.*1 played/}).waitFor()
 console.log('PASS classmates reflections / discussion only counts own cards')
 const art=code+'-shared-artefact';await activate(art,'artefact')
 const url=db.storage.from('artefacts').getPublicUrl(code+'/integration-test.png').data.publicUrl
 await response('artefact',{url,name:'Persona',caption:'Our evidence map'},art)
 for(const [width,height]of [[1440,900],[1024,768]]){
  await page.setViewportSize({width,height});await page.getByRole('button',{name:/Submit artefact/}).waitFor()
  const button=await page.getByRole('button',{name:/Submit artefact/}).boundingBox();const slide=await page.locator('.slide-surface').boundingBox();assert.ok(button.y+button.height<=slide.y+slide.height,JSON.stringify({button,slide}))
  const field=await page.getByLabel('The thinking behind it').boundingBox();assert.ok(field.y+field.height<=button.y+1,'Thinking field overlaps submit')
  await page.screenshot({path:`work/qa/shared-artefact-${width}.png`})
 }
 await page.getByRole('button',{name:/Class artefacts/}).click();await page.getByText('Our evidence map',{exact:true}).waitFor();await response('artefact',{url,name:'Sketch',caption:'New sketch arrived'},art,'Yuki Tanaka');await page.getByText('New sketch arrived',{exact:true}).waitFor()
 await page.screenshot({path:'work/qa/shared-gallery.png'})
 await page.getByRole('button',{name:'Leave class',exact:true}).click();await page.getByRole('button',{name:'Join a class',exact:true}).waitFor();await page.locator('.slide-image').waitFor()
 assert.equal(errors.length,0,errors.join('\n'));console.log('PASS artefact gallery live updates / normal-flow submit 1024 & 1440 / offline sample mode / no browser errors')
}finally{await browser.close()}
