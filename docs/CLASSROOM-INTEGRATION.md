# Student ↔ Tutor integration

The Student UI uses the existing Supabase project and follows [the Tutor UI data contract](https://github.com/Naaz629/studio-bridge/blob/main/supabase/DATA-CONTRACT.md). The Tutor UI has not been changed.

## Run locally

```sh
pnpm install
pnpm dev
```

Supabase was added with `pnpm add @supabase/supabase-js`. Create `.env.local` with these **public client** variables (copy their values from the shared contract):

```dotenv
VITE_SUPABASE_URL=https://nqalksankethoskforml.supabase.co
VITE_SUPABASE_ANON_KEY=<public anon key from the contract>
```

No `service_role` key or account authentication is used. `.env.local`, local deployment credentials, backups, and dependencies are ignored by Git.

## Vercel

The same `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` variables are required in the `studiobridge` project, for Production / Preview / Development. These are build-time variables, so redeploy after changing them. The variables have been configured during this integration.

```sh
pnpm exec tsc --noEmit
pnpm build
```

## Use

1. Open the existing Tutor UI and get its current class code.
2. Open the Student UI, enter a name (or Anonymous), and join with that code. Codes are case insensitive and stored uppercase. The identity stays in localStorage across refreshes; Leave class clears it.
3. The original 19 slide files are used directly in a live class. The 21-step built-in demonstration remains available via Explore the demo. Original slide numbers must not be confused with the demo's inserted activity positions.
4. A tutor slide or activity change returns students to live. Students can review earlier slides or completed activities in My Learning; closed activities cannot submit to a different active activity.
5. Questions and teacher answers subscribe live, alongside activity specs, reactions, and response rows. Reconnect reloads a snapshot. A 15-second refresh also recovers missed changes.
6. Concept activities render the tutor's question types (`mc`, `scale`, `open`), including `payload.q` for every answer. Questions are not submitted while the tutor is still preparing an empty spec. Discussion cards and artefact uploads retain the existing interface and reducer. Reflection activities show the tutor's question/hint.
7. Photos upload to the public `artefacts` bucket. Response rows use the public URL, team, original filename and caption. A stable response UUID makes retry safe if an acknowledgement is lost. Camera capture and file upload both use this path.
8. Every shared action appends an `events` row. A separate log failure does not falsely retry a successfully saved question/response. There is no transaction across the primary write and its event row.
9. A clientId in each response payload isolates the current student's completion history, including multiple anonymous students. The current identity and response drafts are local; class data is in Supabase. Local draft persistence can be unavailable if browser storage is full/blocked; the current in-memory draft remains usable.
10. The connection note reports failed writes and realtime connectivity. Failed questions can retry; activity answer drafts and photos remain available for retry. Local demo actions never send fabricated activity IDs to Supabase.

## Scope and remaining mappings

- Chinese text is stored unchanged with `lang: 'zh'`; `text_en` is empty unless an actual translation is available. No translation service or invented English translation was added. Existing translated questions still show English first and View original.
- A peer reply uses `responses.kind='peer_reply'` and the exact current tutor activity ID. When no activity is live, the question reply remains local with a note; the contract provides no separate question-replies table or nullable response activity ID. To persist standalone Q&A replies, the tutor can open a `qa` activity, or both apps can agree a separate replies contract.
- Concept free-text answers use `kind='open'`, `payload: {q, text, lang}` as permitted by the student instructions. **The current tutor `sync.js` only renders concept response updates for `choice` and `rating`; it does not have a live display handler for `open` or `peer_reply`.** These rows are saved correctly and visible to student classmates / Table Editor, but that part of the tutor display requires its maintainer to add a handler. No SQL change is needed for these existing text/jsonb columns.
- My Learning's private Your take remains on this device unless a live reflection activity is open, when Save & share sends it to that activity. AI Advice is existing static guidance, not a new AI service. The shared helpful-answer goal is labelled as an example because the contract does not supply helpful-answer records.
- The existing slide library is Week 6 only. A class code does not supply PDF/image URLs in this contract, so this change cannot dynamically load other course decks.
- Read-then-write upvotes follow the demo contract and can lose a simultaneous increment. No RPC was introduced.
- No missing table/column or storage policy was found in the live preflight. The six tables were readable, inserts succeeded, a public artefact image returned HTTP 200, and realtime updates were received. No migration SQL was required.

## Verification

Browser integration tests create an isolated class labelled `Studio Bridge integration test`, never a live tutor class. They append demo rows/files; they do not change/delete anyone's existing class. They leave the test class and records for inspection (the public contract does not grant row deletion).

```sh
pnpm exec playwright install chromium
pnpm test:classroom:setup
pnpm test:classroom
```

Keep `pnpm dev` running at `http://127.0.0.1:8443/` first. Set `STUDENT_TEST_URL` to test a deployed student URL, or `STUDIO_BRIDGE_CHROME` to use a locally installed Chrome executable. `work/test-class.json` is generated by setup and ignored by Git.

Tests cover joining, slide numbering, questions, upvotes, tutor answer text/answered colour, reactions, realtime slide changes, all five concept question indexes, peer replies, discussion cards, photo upload/public URL, reflection, refresh recovery, activity closure, sidebar toggle, offline question retry, My Learning's historical activity review, event rows, Leave class and original demo mode. Screenshots are saved under `work/qa/`.

The actual Tutor UI was also opened with an isolated test code; both submitted test questions appeared in its Questions panel. Full live rendering of the unsupported tutor kinds noted above is not claimed.

## Source files

- `src/supabase.ts`: optional configured client, no auth persistence.
- `src/class-types.ts`: shared row/spec types.
- `src/class-session.ts`: initial queries, realtime subscriptions, recovery and cleanup.
- `src/class-api.ts`: class-scoped inserts, event logging, safe response ID checks, uploads.
- `src/ClassRoom.tsx`: join screen, persisted identity, shared context, connection/leave controls.
- `src/TutorActivity.tsx`: tutor-driven concept/reflection/Q&A, existing discussion/artefact UI.
- `src/LivePeers.tsx`: replies backed by live response rows and the existing peer reducer.
- `src/classroom.css`: join and live activity styling.
- `src/App.tsx`, `src/MyLearning.tsx`, `src/ExtraActivity.tsx`, `src/main.tsx`: integration with the current screens/reducers.
- `tests/create-test-class.mjs`, `tests/classroom.integration.mjs`: real backend/browser verification.

Full contents of every new/changed source and configuration file are supplied in the companion `STUDENT-INTEGRATION-FULL-CODE.md` deliverable. Only local credentials and generated build/test artifacts are omitted.
