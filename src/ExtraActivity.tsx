import { useEffect, useRef, useState, type ChangeEvent } from "react"
import { activityTemplates, type ActivityRun, type ActivityAction } from "./activity-state"
import "./extra-activity.css"

const cards = [
  { image: "agree", label: "Agree", prompt: "I agree with this idea because…" },
  { image: "disagree", label: "Disagree", prompt: "I see it differently because…" },
  { image: "turn", label: "Take a turn", prompt: "I’d like to add that…" },
  { image: "clarify", label: "Clarify", prompt: "I’m not sure I understand…" },
  { image: "idea", label: "Share an idea", prompt: "What if we tried…" },
]

function CameraIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m8 5 1-2h6l1 2h4a2 2 0 0 1 2 2v12H2V7a2 2 0 0 1 2-2Z"/><circle cx="12" cy="12" r="4"/></svg>
}

export default function ExtraActivity({ activity, dispatch, active, pending = false }: { pending?: boolean; active: boolean; activity: ActivityRun; dispatch: (action: ActivityAction) => void }) {
  const [announcement, setAnnouncement] = useState("")
  const [error, setError] = useState("")
  const [group, setGroup] = useState(activity.photo?.group || "")
  const [caption, setCaption] = useState(activity.photo?.caption || "")
  const [cameraOpen, setCameraOpen] = useState(false)
  const [cameraLoading, setCameraLoading] = useState(false)
  const video = useRef<HTMLVideoElement>(null)
  const camera = useRef<MediaStream | null>(null)
  const cameraRequest = useRef(0)
  const fileInput = useRef<HTMLInputElement>(null)
  const mounted = useRef(true)
  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
      cameraRequest.current++
      camera.current?.getTracks().forEach(track => track.stop())
    }
  }, [])
  useEffect(() => {
    if (cameraOpen && video.current && camera.current) {
      video.current.srcObject = camera.current
      video.current.play().catch(() => setError("Couldn’t start the camera preview. Please choose a photo instead."))
    }
  }, [cameraOpen])
  function stopCamera() {
    cameraRequest.current++
    camera.current?.getTracks().forEach(track => track.stop())
    camera.current = null
    setCameraOpen(false)
    setCameraLoading(false)
  }
  useEffect(() => { if (!active) stopCamera() }, [active])
  async function startCamera() {
    setError("")
    if (!navigator.mediaDevices?.getUserMedia) { setError("Camera access isn’t available here. You can still choose a photo."); return }
    const request = ++cameraRequest.current
    setCameraLoading(true)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio: false })
      if (!mounted.current || request !== cameraRequest.current) { stream.getTracks().forEach(track => track.stop()); return }
      camera.current = stream
      setCameraOpen(true)
    } catch {
      if (mounted.current && request === cameraRequest.current) setError("Camera access wasn’t granted. Allow it in your browser, or choose a photo.")
    } finally {
      if (mounted.current && request === cameraRequest.current) setCameraLoading(false)
    }
  }
  function setPhoto(url: string, name: string) {
    dispatch({ type: "photo", id: activity.id, photo: { url, name, group, caption } })
    setAnnouncement("Photo ready to preview.")
  }
  function capture() {
    if (!video.current?.videoWidth) { setError("The camera is still getting ready. Please try again."); return }
    const canvas = document.createElement("canvas")
    canvas.width = video.current.videoWidth
    canvas.height = video.current.videoHeight
    const context = canvas.getContext("2d")
    if (!context) return
    context.drawImage(video.current, 0, 0)
    setPhoto(canvas.toDataURL("image/jpeg", .9), "Group artefact.jpg")
    stopCamera()
  }
  function choosePhoto(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    event.target.value = ""
    if (!file) return
    setError("")
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) { setError("Please choose a JPG, PNG or WebP photo."); return }
    if (file.size > 15 * 1024 * 1024) { setError("Please choose a photo smaller than 15 MB."); return }
    const reader = new FileReader()
    reader.onerror = () => setError("This photo couldn’t be read. Please try another file.")
    reader.onload = () => {
      if (!mounted.current || typeof reader.result !== "string") return
      const image = new Image()
      image.onload = () => { if (mounted.current) { stopCamera(); setPhoto(reader.result as string, file.name) } }
      image.onerror = () => { if (mounted.current) setError("This image couldn’t be opened. Please try another photo.") }
      image.src = reader.result
    }
    reader.readAsDataURL(file)
  }
  const template = activityTemplates[activity.kind]
  const counts = activity.cardCounts || [0, 0, 0, 0, 0]
  return <div className={`embedded-activity-body extra-activity extra-activity--${activity.kind}`}>
    <div className="extra-activity-title">
      <div><span className="eyebrow">{template.label}</span><h3>{template.title}</h3><p>{template.description}</p></div>
      <span className="extra-status">{activity.kind === "discussion" ? <><span className="live-dot" />{counts.reduce((a,b) => a+b, 0)} cards played</> : activity.submitted ? "✓ Submitted" : "Group upload"}</span>
    </div>
    {activity.kind === "discussion" ? <>
      <div className="discussion-card-grid">
        {cards.map((card, index) => <button
          type="button" disabled={pending} key={card.image}
          aria-label={`Play ${card.label} card. ${card.prompt}. ${counts[index]} played.`}
          className={activity.answer === index ? "discussion-card active" : "discussion-card"}
          onClick={() => { dispatch({ type: "play", id: activity.id, card: index }); setAnnouncement(`${card.label} card played. ${card.prompt}`) }}
        >
          <img src={`/assets/discussion/${card.image}.png`} alt={`${card.label}: ${card.prompt}`} />
          <span className="discussion-card-count">{counts[index]} played</span>
        </button>)}
      </div>
      <p className="discussion-instruction sr-only" role="status">{announcement}</p>
    </> : <>
      <input ref={fileInput} className="sr-only" type="file" accept="image/jpeg,image/png,image/webp" onChange={choosePhoto} aria-label="Choose artefact photo" />
      <div className="artefact-layout">
        <div className="artefact-photo-area">
          {cameraOpen ? <div className="artefact-camera"><video ref={video} muted playsInline aria-label="Camera preview" /><div><button type="button" className="extra-primary" onClick={capture}>Capture photo</button><button type="button" onClick={stopCamera}>Cancel</button></div></div>
            : activity.photo ? <figure className="artefact-preview"><img src={activity.photo.url} alt={activity.photo.caption || "Your group’s artefact"} /><figcaption>{activity.photo.name}</figcaption></figure>
            : <div className="artefact-empty"><CameraIcon /><strong>Bring your group’s work into the discussion.</strong><p>A persona, sketch, affinity map or reframed brief.</p><div className="artefact-choose-actions"><button className="extra-primary" type="button" disabled={pending} onClick={() => fileInput.current?.click()}>Choose photo</button><button type="button" onClick={startCamera} disabled={cameraLoading || pending}>{cameraLoading ? "Opening camera…" : "Take a photo"}</button></div><small>JPG, PNG or WebP · Up to 15 MB</small></div>}
          {activity.photo && !activity.submitted && !cameraOpen && <div className="artefact-photo-actions"><button type="button" disabled={pending} onClick={() => fileInput.current?.click()}>Replace photo</button><button type="button" disabled={cameraLoading || pending} onClick={startCamera}>Retake with camera</button></div>}
        </div>
        <div className="artefact-details">
          <label>Group name <span>(optional)</span><input disabled={activity.submitted || pending} value={group} placeholder="e.g. Studio Team 4" onChange={event => { setGroup(event.target.value); if (activity.photo) dispatch({ type: "photo", id: activity.id, photo: { ...activity.photo, group: event.target.value } }) }}/></label>
          <label><span className="artefact-field-title">The thinking behind it <span>(optional)</span></span><textarea disabled={activity.submitted || pending} value={caption} placeholder="What did you make? Which research insight shaped it?" onChange={event => { setCaption(event.target.value); if (activity.photo) dispatch({ type: "photo", id: activity.id, photo: { ...activity.photo, caption: event.target.value } }) }} /></label>
          {!activity.submitted ? <button type="button" className="extra-primary" disabled={!activity.photo || cameraOpen || pending} onClick={() => { dispatch({ type: "submit", id: activity.id }); setAnnouncement("Your group artefact is submitted for this session.") }}>{pending ? "Sending…" : "Submit artefact"} <span aria-hidden="true">↑</span></button> : <div className="artefact-submitted">✓ Your group’s artefact is submitted.</div>}
          <small>Saved for this session.</small>
        </div>
      </div>
      {error && <p className="artefact-error" role="alert">{error}</p>}
      <span className="sr-only" role="status">{announcement}</span>
    </>}
  </div>
}
