import assert from 'node:assert/strict'
import{readFileSync,mkdirSync}from'node:fs'
import{createClient}from'@supabase/supabase-js'
import{loadEnv}from'vite'
import{chromium}from'@playwright/test'
const {code}=JSON.parse(readFileSync('work/test-class.json'));assert.notEqual(code,'DEMO')
const e=loadEnv('development',process.cwd(),'VITE_');const db=createClient(e.VITE_SUPABASE_URL,e.VITE_SUPABASE_ANON_KEY,{auth:{persistSession:false}})
const aid=code+'-navigation'
const a=await db.from('activities').insert({id:aid,session:code,kind:'concept',slide:18,spec:{questions:[{type:'mc',text:'Teacher controlled activity',options:[{t:'Evidence'},{t:'Assumptions'}]}]}});if(a.error)throw a.error
async function command(slide,activityId=null){const r=await db.from('sessions').update({state:{slide,activityId,activityKind:activityId?'concept':null,updatedAt:new Date().toISOString()}}).eq('code',code);if(r.error)throw r.error}
await command(18,aid)
const browser=await chromium.launch({...(process.env.STUDIO_BRIDGE_CHROME?{executablePath:process.env.STUDIO_BRIDGE_CHROME}:{}),headless:true});mkdirSync('work/qa',{recursive:true})
try{
 const p=await browser.newPage({viewport:{width:1440,height:900}});const errors=[];p.on('pageerror',err=>errors.push(err.message))
 await p.goto(process.env.STUDENT_TEST_URL||'http://127.0.0.1:8443/');await p.getByText('● Connected',{exact:true}).first().waitFor()
 assert.equal(await p.evaluate(()=>JSON.parse(localStorage.getItem('studio-bridge-class')).code),code)
 const nav=p.getByRole('navigation',{name:'Slides and activities'});const next=nav.getByRole('button',{name:'Next page',exact:true})
 await p.locator('.slide-image[src$="page-01.jpg"]').waitFor();await p.getByText('Browse freely',{exact:true}).waitFor()
 const activityPages={3:'What makes a useful persona?',5:'How confident are you with reframing?',7:'Discuss with your peers.',9:'Show what your group made.'}
 let source=0
 for(let page=1;page<=23;page++){
  await nav.locator('.presentation-page').filter({hasText:new RegExp('^'+page+'\\s*/\\s*23$')}).waitFor()
  if(activityPages[page]) await p.getByRole('heading',{name:activityPages[page],exact:true}).waitFor()
  else{source++;await p.locator(`.slide-image[src$="page-${String(source).padStart(2,'0')}.jpg"]`).waitFor()}
  if(page<23)await next.click()
 }
 assert.equal(source,19);assert.ok(await next.isDisabled());console.log('PASS 19 original slides / fixed practice at 3,5,7,9 / no tutor-page limit')
 // Keyboard navigation can leave the final page and preserves the first/last boundaries.
 await p.keyboard.press('ArrowLeft');await nav.locator('.presentation-page').filter({hasText:/^22\s*\/\s*23$/}).waitFor()
 await command(10)
 await p.locator('.slide-image[src$="page-10.jpg"]').waitFor();await p.getByText('Following tutor',{exact:true}).waitFor()
 await next.click();await p.locator('.slide-image[src$="page-11.jpg"]').waitFor()
 await db.from('reactions').insert({session:code,kind:'got',student:'Navigation tester'})
 await p.getByRole('button',{name:/Got it, 1 reactions/}).waitFor()
 await p.locator('.slide-image[src$="page-11.jpg"]').waitFor()
 // A repeated snapshot/heartbeat must not reset manual browsing.
 await db.from('sessions').update({unit:'Navigation test class'}).eq('code',code)
 await p.getByText('Navigation test class · Week 6',{exact:true}).waitFor()
 await p.locator('.slide-image[src$="page-11.jpg"]').waitFor()
 await p.getByRole('button',{name:'Back to live',exact:true}).click();await p.locator('.slide-image[src$="page-10.jpg"]').waitFor()
 await command(12,aid)
 await p.getByRole('heading',{name:'Teacher controlled activity',exact:true}).waitFor()
 await next.click();await p.locator('.slide-image[src$="page-13.jpg"]').waitFor()
 await p.getByRole('button',{name:'Back to live',exact:true}).click();await p.getByRole('heading',{name:'Teacher controlled activity',exact:true}).waitFor()
 await command(2)
 await p.locator('.slide-image[src$="page-02.jpg"]').waitFor();await next.click();await p.getByRole('heading',{name:'What makes a useful persona?',exact:true}).waitFor()
 const before=await db.from('responses').select('id',{count:'exact',head:true}).eq('session',code)
 await p.getByLabel('Patterns grounded in research with real users',{exact:false}).check()
 await p.getByRole('button',{name:'Submit response',exact:false}).click();await p.getByText('You’re all set.',{exact:true}).waitFor()
 const after=await db.from('responses').select('id',{count:'exact',head:true}).eq('session',code);assert.equal(after.count,before.count)
 await p.getByRole('button',{name:'My Learning',exact:true}).click()
 const entry=p.locator('.learning-entry').filter({has:p.getByRole('heading',{name:'What makes a useful persona?',exact:true})})
 await entry.getByRole('button',{name:/View response/}).click();await p.getByText('You’re all set.',{exact:true}).waitFor()
 const form=p.locator('.ask-composer textarea');await form.focus();await p.keyboard.press('ArrowRight');await p.getByText('You’re all set.',{exact:true}).waitFor()
 await p.screenshot({path:'work/qa/free-browsing.png'})
 console.log('PASS teacher commands take over / manual browsing survives snapshots / return to live / live activity navigation / practice remains local / My Learning / typing does not flip pages')
 assert.equal(errors.length,0,errors.join('\n'))
}finally{await browser.close()}
