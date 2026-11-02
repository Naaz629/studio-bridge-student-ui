import type { ClassIdentity, ResponseRow } from "./class-types"
export const DEMO_CLASS_CODE = import.meta.env.VITE_DEMO_CLASS_CODE || "DEMO"
export function displayStudent(name: string | null, identity: ClassIdentity | null, clientId?: unknown) {
  if (!name || name === "Anonymous") return "Anonymous"
  if (clientId === identity?.clientId || name === identity?.name) return name
  const parts = name.trim().split(/\s+/)
  return parts.length > 1 ? `${parts[0]} ${parts.at(-1)![0]}.` : parts[0]
}
export function ownResponse(row: ResponseRow, identity: ClassIdentity | null) {
  return !!identity && row.payload.clientId === identity.clientId
}
