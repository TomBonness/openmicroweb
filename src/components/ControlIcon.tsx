type ControlIconProps = {
  id: string
}

export function ControlIcon({ id }: ControlIconProps) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 1.8,
  }

  let artwork

  switch (id) {
    case 'encoder':
      artwork = <><path {...common} d="M5 7h14M5 12h9M5 17h6" /><circle cx="17" cy="17" r="2" fill="currentColor" /></>
      break
    case 'agent-1':
      artwork = <><circle {...common} cx="7" cy="5" r="2" /><circle {...common} cx="7" cy="19" r="2" /><circle {...common} cx="17" cy="12" r="2" /><path {...common} d="M7 7v3c0 1.1.9 2 2 2h6M7 17v-3c0-1.1.9-2 2-2" /></>
      break
    case 'agent-2':
      artwork = <><path {...common} d="M7 4v16M7 9h4a5 5 0 0 1 5 5v6" /><circle cx="7" cy="4" r="2" fill="currentColor" /><circle cx="7" cy="20" r="2" fill="currentColor" /><circle cx="16" cy="20" r="2" fill="currentColor" /></>
      break
    case 'joystick':
      artwork = <><path {...common} d="m12 3-2.5 2.5M12 3l2.5 2.5M12 21l-2.5-2.5M12 21l2.5-2.5M3 12l2.5-2.5M3 12l2.5 2.5M21 12l-2.5-2.5M21 12l-2.5 2.5" /><circle {...common} cx="12" cy="12" r="3" /></>
      break
    case 'agent-3':
      artwork = <path d="m8 5 11 7-11 7Z" fill="currentColor" />
      break
    case 'agent-4':
      artwork = <rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" />
      break
    case 'agent-5':
      artwork = <><circle {...common} cx="12" cy="12" r="8" /><path {...common} d="m8.2 12.2 2.4 2.4 5.3-5.5" /></>
      break
    case 'agent-6':
      artwork = <><path {...common} d="M3.8 12s3-5 8.2-5 8.2 5 8.2 5-3 5-8.2 5-8.2-5-8.2-5Z" /><circle cx="12" cy="12" r="2.4" fill="currentColor" /></>
      break
    case 'command-1':
      artwork = <><path {...common} d="m14.5 5.5 4 4M13 7l4 4M5 19l7.5-7.5 3 3L8 22H5Z" /><path {...common} d="m13.5 6.5 2-2 4 4-2 2" /></>
      break
    case 'command-2':
      artwork = <><path {...common} d="M9 3h6M10 3v5l-5 9a2.5 2.5 0 0 0 2.2 4h9.6a2.5 2.5 0 0 0 2.2-4l-5-9V3" /><path {...common} d="M7.5 15h9" /></>
      break
    case 'command-3':
      artwork = <><path {...common} d="M3 12h18" /><circle cx="8" cy="12" r="3" fill="var(--surface, white)" stroke="currentColor" strokeWidth="1.8" /><circle cx="18" cy="12" r="1.8" fill="currentColor" /></>
      break
    case 'command-4':
      artwork = <><path {...common} d="M12 21V8M7.5 12.5 12 8l4.5 4.5" /><path {...common} d="M5 5h14" /></>
      break
    case 'touch':
      artwork = <><circle {...common} cx="12" cy="12" r="3" /><circle {...common} cx="12" cy="12" r="7" strokeDasharray="2 3" /></>
      break
    case 'microphone':
      artwork = <><rect {...common} x="9" y="3" width="6" height="11" rx="3" /><path {...common} d="M6.5 11.5a5.5 5.5 0 0 0 11 0M12 17v4M9 21h6" /></>
      break
    default:
      artwork = <><path {...common} d="M9 7H5v4M5.4 10.5A7 7 0 1 0 8 5.8" /></>
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {artwork}
    </svg>
  )
}
