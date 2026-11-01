import type { ActivityKind } from "./activity-state"

export type PeerResponse = {
  id: string
  name: string
  initials: string
  answer: number
  thought: string
  helpful: number
  tone: "sage" | "lavender" | "sand"
}

export const samplePeerResponses: Record<Extract<ActivityKind, "choice" | "rating">, PeerResponse[]> = {
  choice: [
    {
      id: "choice-maya",
      name: "Maya Chen",
      initials: "MC",
      answer: 0,
      thought:
        "I chose research patterns because our persona needs to represent repeated needs and behaviours, not just one memorable interview.",
      helpful: 5,
      tone: "sage",
    },
    {
      id: "choice-yuki",
      name: "Yuki Tanaka",
      initials: "YT",
      answer: 1,
      thought:
        "I picked the ideal customer at first. Now I’m wondering: does describing who we hope to design for make the persona less grounded in evidence?",
      helpful: 3,
      tone: "lavender",
    },
    {
      id: "choice-sophie",
      name: "Sophie Tran",
      initials: "ST",
      answer: 0,
      thought:
        "For our group, the useful part was connecting each persona trait back to a finding. It made the design decisions much easier to explain.",
      helpful: 4,
      tone: "sand",
    },
  ],
  rating: [
    {
      id: "rating-yuki",
      name: "Yuki Tanaka",
      initials: "YT",
      answer: 3,
      thought:
        "I can identify a need, but I’m still figuring out how broad a How Might We question should be. One more worked example would help.",
      helpful: 4,
      tone: "lavender",
    },
    {
      id: "rating-sophie",
      name: "Sophie Tran",
      initials: "ST",
      answer: 4,
      thought:
        "I try writing three versions: narrow, broad, and somewhere between. Comparing them helps me find a frame that leaves room for different solutions.",
      helpful: 6,
      tone: "sand",
    },
    {
      id: "rating-amara",
      name: "Amara Singh",
      initials: "AS",
      answer: 2,
      thought:
        "Our first frame already implied an app as the solution. I’d love to hear how others keep the problem statement focused on the human need.",
      helpful: 2,
      tone: "sage",
    },
  ],
}

export type PeerMessage = {
  id: string
  parentId: string | null
  name: string
  initials: string
  text: string
  own: boolean
}

export type PeerDiscussion = {
  draft: string
  replyTo: string | null
  helpfulIds: string[]
  messages: PeerMessage[]
}

export const initialPeerDiscussions: Record<number, PeerDiscussion> = {
  1: {
    draft: "",
    replyTo: null,
    helpfulIds: [],
    messages: [
      {
        id: "choice-sample-reply",
        parentId: "choice-maya",
        name: "Sophie Tran",
        initials: "ST",
        text: "That’s a helpful distinction. We also looked for a pattern across interviews before adding it to our persona.",
        own: false,
      },
    ],
  },
  2: { draft: "", replyTo: null, helpfulIds: [], messages: [] },
}

export type PeerDiscussionAction = {
  type: "draft"
  activityId: number
  text: string
} | { type: "reply"; activityId: number; peerId: string | null } | {
  type: "helpful"
  activityId: number
  peerId: string
} | { type: "post"; activityId: number; id: string }

export function peerDiscussionReducer(
  state: Record<number, PeerDiscussion>,
  action: PeerDiscussionAction,
): Record<number, PeerDiscussion> {
  const discussion = state[action.activityId]
  if (!discussion) return state
  let next = discussion
  if (action.type === "draft") next = { ...discussion, draft: action.text }
  if (action.type === "reply") next = { ...discussion, replyTo: action.peerId }
  if (action.type === "helpful") {
    next = {
      ...discussion,
      helpfulIds: discussion.helpfulIds.includes(action.peerId)
        ? discussion.helpfulIds.filter((id) => id !== action.peerId)
        : [...discussion.helpfulIds, action.peerId],
    }
  }
  if (action.type === "post") {
    const text = discussion.draft.trim()
    if (!text) return state
    next = {
      ...discussion,
      draft: "",
      replyTo: null,
      messages: [
        ...discussion.messages,
        {
          id: action.id,
          parentId: discussion.replyTo,
          name: "Elena Liu",
          initials: "EL",
          text,
          own: true,
        },
      ],
    }
  }
  return { ...state, [action.activityId]: next }
}
