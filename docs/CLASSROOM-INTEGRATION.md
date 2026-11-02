# Shared classroom integration — update 2

The Student UI follows [STUDENT-UI-PROMPT-2.md](https://github.com/Naaz629/studio-bridge/blob/main/supabase/STUDENT-UI-PROMPT-2.md) and the updated [DATA-CONTRACT.md](https://github.com/Naaz629/studio-bridge/blob/main/supabase/DATA-CONTRACT.md). The Tutor UI and backend simulator have not been changed.

## Opening the app

The app automatically connects anonymously to `DEMO`. There is no class-code field and no blocking startup dialog. **Your name** opens the existing glass dialog to set a name or remain anonymous. The client ID and chosen name persist across refreshes. **Leave class** keeps the built-in local sample mode available; **Join a class** reconnects to the shared class. Connection failures keep the existing sample UI usable.

The class code has one definition in `src/class-display.ts`. Production defaults to `DEMO`. `VITE_DEMO_CLASS_CODE` is an optional build/development override for isolated testing only; it is not set in production.

## Changes

- All class questions, tutor answers, translations and votes update live. Other students display first name plus last initial; the current student's name is retained as entered.
- `qa_reply` rows display under the matching question via `payload.questionId`. Replies work without an open activity, using the backend's documented `activity_id: 'none'` convention when there is no current activity.
- Upvotes use `upvote_question(qid)`, with a class-scoped parent check and a follow-up read. No read-then-write increment is used.
- Class reaction counts are actual row counts. Increased counts animate lightly; clicking still uses the existing rising reaction animation. Reduced-motion preferences disable the new animations.
- Recent distinct student names across questions, reactions and responses, plus the current student, provide the `N in class` indicator. This is recent participation, not authenticated presence.
- After concept submission, the same question area shows class MC percentages/counts, a scale average, or a few other students' open answers. Numeric results use only the correct activity ID, question index, response kind and valid answer range.
- Reflections show classmates' answers after submission. English translations are shown first, with View original when supplied by the backend. The student does not fabricate translations.
- Activity `peer_reply` rows appear under Replies between students, including rows without a question index. Replies retain the existing draft reducer and submission path.
- Artefact entry retains the existing photo/camera, group, caption and submission controls. Class artefacts opens a separate view inside the same activity card, newest first. Returning preserves the photo form. The gallery does not include the current student's uploads.
- Discussion cards only count the current client's card plays. Classmates' counts are not shown to students. This follows the specific Student Prompt 2 requirement, rather than the broader discussion-count note in the contract.
- The lesson timeline lives in `src/lesson-navigation.ts`. Database question/activity slide references retain original slide numbers, while the navigation counter includes practice positions. Practice submissions stay local and are labelled Practice; real tutor activities keep the existing cloud submission flow. Practice records are visible in My Learning. Keyboard navigation ignores inputs, editors and dialogs.
- At narrow laptop widths, activity cards use the available stage height instead of forcing a wide aspect ratio. Submit controls remain in normal flow. Original image slides retain their aspect ratio, and the existing sidebar, title, captions and style remain.

## Data and reliability

The client uses `postgres_changes` filtered by class, initial snapshots and the existing **15-second** refresh. Short debouncing coalesces event bursts; it is not faster polling. Paginated snapshots avoid silently capping class results at 1,000 rows. Subscriptions and pending refresh timers are cleaned up on leaving. Stable response/question UUIDs support retry; failed drafts remain local. A separate event-log failure does not repeat a successful primary write.

The Student UI never generates simulated classmates or inserts fake response/question/reaction rows. Simulated activity comes from the already-installed backend job while a Tutor UI is open. Test scripts only seed a separately created integration class, never the shared `DEMO` class.

No authentication or service-role key is used. No database migration was needed. Both the RPC and Q&A response convention were verified against the real backend in an isolated class.

## Configuration and commands

```sh
pnpm install
pnpm exec tsc --noEmit
pnpm build
pnpm dev
```

The installed runtime dependency is `@supabase/supabase-js` (`pnpm add @supabase/supabase-js`). Local `.env.local` and Vercel Production/Preview/Development use:

```dotenv
VITE_SUPABASE_URL=https://nqalksankethoskforml.supabase.co
VITE_SUPABASE_ANON_KEY=<public anon key supplied in the shared contract>
```

These variables are already configured in the existing Vercel project. They are build-time variables. Local credentials, `.env.local`, dependencies, generated builds and work files are excluded from Git/deployment.

## How to test the shared demo

1. Open the [Tutor UI](https://studio-bridge-theta.vercel.app/) in one tab and the [Student UI](https://studiobridge-dddd-345f.vercel.app/) in another. Both connect to `DEMO`.
2. Watch incoming questions, votes and reactions. The backend simulator runs while the tutor is present; it does not guarantee all 22 people act within every five-minute window.
3. Browse the full lesson freely with Previous/Next or the arrow keys. The fixed practice activities occupy positions 3, 5, 7 and 9 (after original slides 2–5). There are 23 positions: all 19 original slides plus four practice activities. Ask/reply/upvote from the student side. A **new** tutor slide/activity command switches the student back to the live position; the initial saved tutor snapshot does not interrupt browsing. Manual browsing pauses following until the next tutor command or Back to live.
4. Start a concept activity. Submit each question and watch the distribution, average and other answers update. Check View original on a translated answer.
5. Try discussion, reflection and artefact activities. Only your own discussion card counters move on the student side. Use Class artefacts to see classmates' uploads.
6. Toggle the questions sidebar and test at **1024×768** and **1440×900**. Submit and thinking fields must not overlap.
7. Leave class to use the original local demo; reload to reconnect automatically.

## Repeatable isolated browser test

```sh
pnpm exec playwright install chromium
pnpm test:classroom:setup
# Copy the new test code printed by setup; do not use DEMO:
VITE_DEMO_CLASS_CODE=<test-code> pnpm dev --host 127.0.0.1 --port 8443
# In another terminal:
pnpm test:classroom
node tests/lesson-navigation.mjs
```

`STUDIO_BRIDGE_CHROME` can select an installed Chrome executable. `STUDENT_TEST_URL` can select another deployment, provided it was built for the same isolated test class. The test asserts the class code before interacting. Test records are left for inspection because the demo contract does not grant row deletion.

`tests/shared-classroom.mjs` covers automatic connection, name shortening, translated questions, Q&A replies with no live activity, simultaneous RPC votes, incoming questions/reactions, live MC bars, scale averages, open answers/translations, peer replies without `q`, reflections, own-only card counts, live artefact gallery, both target window sizes and local demo fallback. Earlier `tests/classroom.integration.mjs` and `tests/demo-entry.mjs` document the previous class-code/manual-entry flows and are not the current test command.

Full contents of changed application/configuration/test files are in `STUDENT-INTEGRATION-FULL-CODE.md`. AI Advice, badges and the example helpful-answer goal retain their existing scope; this update does not introduce an AI service or authenticated attendance tracking. The slide library remains the existing 19-slide Week 6 deck.

`tests/lesson-navigation.mjs` verifies all original slide images and practice positions, initial free browsing despite an existing tutor activity, navigation boundaries, new tutor commands, snapshot/heartbeat stability, Back to live, navigation out of live activities, local-only practice submissions, My Learning review and typing without accidental page changes.
