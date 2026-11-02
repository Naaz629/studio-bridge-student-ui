/* The green, filled light bulb used for Questions in both the Tutor UI and the Student UI. */
export default function BulbIcon({ size = 24 }: { size?: number }) {
  return (
    <svg className="bulb" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <g stroke="#3e6748" strokeWidth="3.4" strokeLinecap="round">
        <path d="M32 4v6" />
        <path d="M12.5 12l4.2 4.2" />
        <path d="M51.5 12l-4.2 4.2" />
        <path d="M4 31h6" />
        <path d="M54 31h6" />
        <path d="M12.5 50l4.2-4.2" />
        <path d="M51.5 50l-4.2-4.2" />
      </g>
      <path
        d="M32 14c-8.3 0-14.5 6-14.5 14 0 5 2.6 8.6 5.2 11.4 1.2 1.3 1.8 2.8 1.8 4.6h15c0-1.8.6-3.3 1.8-4.6 2.6-2.8 5.2-6.4 5.2-11.4 0-8-6.2-14-14.5-14z"
        fill="#3e6748"
      />
      <path
        d="M44 24c1.6 6-1 10.6-4.4 14.4-1.2 1.3-1.8 2.8-1.8 4.6h4.4c0-1.8.6-3.3 1.8-4.6 2.6-2.8 5.2-6.4 5.2-11.4 0-1.2-.2-2.4-.6-3.5z"
        fill="#2f5140"
      />
      <path d="M24 22c1.2-2.6 3.4-4.2 6-4.6" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" fill="none" opacity=".85" />
      <g fill="#2f5140">
        <rect x="24.5" y="48" width="15" height="3.4" rx="1.7" />
        <rect x="25.5" y="52.5" width="13" height="3.4" rx="1.7" />
        <rect x="27.5" y="57" width="9" height="3.4" rx="1.7" />
      </g>
    </svg>
  )
}
