export type LifecycleEffect = 'solid' | 'breathe' | 'pulse' | 'blink'

export const navigation = [
  { label: 'Overview', href: '#overview' },
  { label: 'Controls', href: '#controls' },
  { label: 'Design', href: '#design' },
  { label: 'Specs', href: '#specs' },
] as const

export const headings = {
  hero: 'Open Micro',
  lifecycle: 'Your workflow, in light.',
  controls: 'Twelve keys. More than shortcuts.',
  connectivity: 'Connected on your terms.',
  design: 'Built in layers.',
  specifications: 'The design, measured.',
  openSource: 'Open from enclosure to protocol.',
  waitlist: 'Be first to know.',
} as const

export const hero = {
  eyebrow: 'Revision 0.1 · First-article design preview',
  description: 'An original, open-source desktop programming controller.',
  primaryCta: 'Get preorder updates',
  secondaryCta: 'Explore the design',
} as const

export const productCopy = {
  skipLink: 'Skip to content',
  primaryNavigationLabel: 'Primary navigation',
  wordmark: 'Open Micro',
  overviewAriaLabel: 'Open Micro overview',
  navigationCta: 'Get updates',
  statusLabel: 'First-article status',
  lifecycleEyebrow: 'Intended OMP mapping',
  lifecycleLead:
    'Six software-defined agent positions turn host lifecycle state into a glanceable color and pattern.',
  lifecycleQualifier:
    'Intended protocol behavior—not measured LED color, brightness, or timing.',
  lifecycleControlLabel: 'Choose an intended lifecycle state',
  controlsEyebrow: 'Software-defined controls',
  controlsLead:
    'Eleven 1u keys and one 2u microphone key create 12 full-height Cherry MX-compatible hot-swap positions beside an encoder, joystick, and capacitive action—each positioned from the revision 0.1 mechanical layout.',
  controlMapTitle: 'Revision 0.1 control layout',
  controlMapInstructions:
    'Select, focus, or hover over any control to see its intended role.',
  controlMapLabel: 'Interactive Open Micro control map',
  controlMapFront: 'Front · operator edge',
  controlMapRear: 'Rear · USB-C',
  connectivityEyebrow: 'Transport, power, and software',
  connectivityLead:
    'Wired or bonded wireless, with a protected 600 mAh 503040 LiPo as the portable power design target—not a runtime claim.',
  designEyebrow: 'Revision 0.1 construction',
  materialsEyebrow: 'Dimensions and materials',
  materialsHeading: 'Measured in the design.',
  specsEyebrow: 'Customer-facing specifications',
  openSourceEyebrow: 'Source and licensing',
  waitlistEyebrow: 'Preorder notification list',
  waitlistLead:
    'Revision 0.1 is still a design preview. Leave one address and we’ll share preorder timing only when it is confirmed.',
  cadFigureType: 'Technical figure',
  cadFigureHeading: 'Revision 0.1 CAD projection',
  cadFigureCaption:
    'Exact source projection. Line work represents CAD geometry, not manufactured hardware or photography.',
  heroAlt:
    'Assembled silver Open Micro controller in a front three-quarter view — design visualization based on revision 0.1 CAD',
  explodedAlt:
    'Open Micro separated into enclosure, neutral PCB envelope, plate, and controls — design visualization based on revision 0.1 CAD',
  cadAlt:
    'Exploded revision 0.1 CAD projection showing the exact assembly hierarchy',
  footerProduct: 'Open Micro · Revision 0.1',
  visualizationCredit: 'Design visualization based on revision 0.1 CAD',
} as const

export const waitlistCopy = {
  honeypotLabel: 'Website',
  emailLabel: 'Email address',
  placeholder: 'you@example.com',
  submit: 'Notify me',
  pending: 'Joining…',
  success: "You're on the list. We'll let you know when preorder timing is confirmed.",
  error: "We couldn't save your email. Please try again.",
} as const

export const qualificationDisclosure =
  'Revision 0.1 is a first-article fabrication candidate. Physical qualification, regulatory testing, and production readiness are pending.'

export const lifecycleStates = [
  {
    id: 'idle',
    name: 'Idle',
    color: '#202020',
    effect: 'solid',
    period: 0,
    timing: 'Solid',
    description: 'Available for the next prompt.',
  },
  {
    id: 'thinking',
    name: 'Thinking',
    color: '#4D8DFF',
    effect: 'breathe',
    period: 1400,
    timing: 'Breathe · 1400 ms',
    description: 'Reasoning through the current request.',
  },
  {
    id: 'running',
    name: 'Running',
    color: '#31C7D9',
    effect: 'pulse',
    period: 800,
    timing: 'Pulse · 800 ms',
    description: 'Executing tools and code.',
  },
  {
    id: 'waiting',
    name: 'Waiting',
    color: '#FF9F0A',
    effect: 'blink',
    period: 900,
    timing: 'Blink · 900 ms',
    description: 'Paused for input or approval.',
  },
  {
    id: 'done',
    name: 'Done',
    color: '#30D158',
    effect: 'solid',
    period: 4000,
    timing: 'Solid · 4000 ms',
    description: 'The current task has completed.',
  },
  {
    id: 'error',
    name: 'Error',
    color: '#FF453A',
    effect: 'blink',
    period: 700,
    timing: 'Blink · 700 ms',
    description: 'The workflow needs attention.',
  },
] as const satisfies ReadonlyArray<{
  id: string
  name: string
  color: string
  effect: LifecycleEffect
  period: number
  timing: string
  description: string
}>

export type ControlKind = 'key' | 'wide-key' | 'encoder' | 'joystick' | 'touch'

export const controls = [
  { id: 'encoder', name: 'Push encoder', role: 'Turn through choices, then press to confirm.', kind: 'encoder', x: 19.425, y: 19.425, width: 18.5, height: 18.5 },
  { id: 'agent-1', name: 'Agent 1', role: 'Select the first software-defined agent position.', kind: 'key', x: 38.475, y: 19.425, width: 18, height: 18 },
  { id: 'agent-2', name: 'Agent 2', role: 'Select the second software-defined agent position.', kind: 'key', x: 57.525, y: 19.425, width: 18, height: 18 },
  { id: 'joystick', name: 'Five-way joystick', role: 'Navigate in four directions and press to select.', kind: 'joystick', x: 76.575, y: 19.425, width: 15, height: 15 },
  { id: 'agent-3', name: 'Agent 3', role: 'Select the third software-defined agent position.', kind: 'key', x: 19.425, y: 38.475, width: 18, height: 18 },
  { id: 'agent-4', name: 'Agent 4', role: 'Select the fourth software-defined agent position.', kind: 'key', x: 38.475, y: 38.475, width: 18, height: 18 },
  { id: 'agent-5', name: 'Agent 5', role: 'Select the fifth software-defined agent position.', kind: 'key', x: 57.525, y: 38.475, width: 18, height: 18 },
  { id: 'agent-6', name: 'Agent 6', role: 'Select the sixth software-defined agent position.', kind: 'key', x: 76.575, y: 38.475, width: 18, height: 18 },
  { id: 'command-1', name: 'Command 1', role: 'A remappable command position for a frequent action.', kind: 'key', x: 19.425, y: 57.525, width: 18, height: 18 },
  { id: 'command-2', name: 'Command 2', role: 'A remappable command position for a frequent action.', kind: 'key', x: 38.475, y: 57.525, width: 18, height: 18 },
  { id: 'command-3', name: 'Command 3', role: 'A remappable command position for a frequent action.', kind: 'key', x: 57.525, y: 57.525, width: 18, height: 18 },
  { id: 'command-4', name: 'Command 4', role: 'A remappable command position for a frequent action.', kind: 'key', x: 76.575, y: 57.525, width: 18, height: 18 },
  { id: 'touch', name: 'Capacitive touch', role: 'A software-defined touch action for mode changes.', kind: 'touch', x: 19.425, y: 76.575, width: 14, height: 14 },
  { id: 'microphone', name: 'Microphone key', role: 'A full-height 2u position intended for voice control.', kind: 'wide-key', x: 48, y: 76.575, width: 37.05, height: 18 },
  { id: 'command-6', name: 'Command 6', role: 'A remappable command position for a frequent action.', kind: 'key', x: 76.575, y: 76.575, width: 18, height: 18 },
] as const satisfies ReadonlyArray<{
  id: string
  name: string
  role: string
  kind: ControlKind
  x: number
  y: number
  width: number
  height: number
}>

export const connectivityCards = [
  {
    label: 'Wired',
    title: 'USB-C',
    body: 'USB keyboard and vendor HID transport for direct, documented control.',
  },
  {
    label: 'Wireless',
    title: 'Bonded Bluetooth Low Energy',
    body: 'BLE keyboard, custom GATT, and five profiles for moving between hosts.',
  },
  {
    label: 'Firmware',
    title: 'ZMK, mapped your way',
    body: 'ZMK keymaps and Studio support keep the hardware software-defined.',
  },
  {
    label: 'Host software',
    title: 'Local by design',
    body: 'A Rust daemon, CLI, simulator, and documented local JSON protocol for macOS, Linux, and Windows.',
  },
] as const

export const explodedCallouts = [
  'Enclosure — printed or bead-blasted 6061-T6',
  'Core — 91.5 mm four-layer PCB design envelope',
  'Interface — 1.5 mm frosted polycarbonate plate',
  'Controls — hot-swap keys, encoder, joystick, and touch',
] as const

export const designPanels = [
  {
    label: 'Footprint',
    value: '96 × 96 × 17.5 mm',
    body: 'A compact rounded-square assembled enclosure target.',
  },
  {
    label: 'Core',
    value: '91.5 mm · four layers',
    body: 'A 1.6 mm PCB design envelope around the nRF52840-based EBYTE E73 module.',
  },
  {
    label: 'Surface',
    value: 'Frosted polycarbonate',
    body: 'A 1.5 mm plate above 12 full-height MX-compatible hot-swap positions.',
  },
  {
    label: 'Enclosure options',
    value: 'Printed or CNC',
    body: 'Printed construction or 6061-T6 aluminum with 120-grit bead blast and clear/silver anodize.',
  },
] as const

export const specs = [
  ['Enclosure', '96 × 96 × 17.5 mm'],
  ['PCB', '91.5 × 91.5 × 1.6 mm, four layers'],
  ['Compute', 'EBYTE E73 / nRF52840, 1 MB flash, 256 KB RAM'],
  ['Controls', '12 MX hot-swap, five-way joystick, 24-detent push encoder, capacitive touch'],
  ['Lighting', '13 reverse-mount RGB indicators'],
  ['Connectivity', 'USB-C, bonded BLE, five wireless profiles'],
  ['Power target', 'protected 600 mAh 503040 LiPo'],
  ['Firmware', 'ZMK with Studio support'],
  ['Host bridge', 'macOS, Linux, Windows; Rust daemon/CLI/simulator'],
  ['Materials', '1.5 mm frosted polycarbonate plate; printed or 6061-T6 CNC enclosure'],
  ['Status', 'revision 0.1 first-article fabrication candidate, not physically qualified'],
] as const

export const licenses = [
  ['Hardware / mechanical', 'CERN-OHL-S-2.0'],
  ['Software', 'Apache-2.0'],
  ['Documentation', 'CC-BY-4.0'],
  ['Pinned Lucide-derived keycap artwork', 'ISC'],
] as const

export const openSourceStatement = 'Open-source design and software, licensed as listed'

export const privacyStatement =
  'Preorder updates only. We store your email solely for Open Micro launch notices until the preorder notice program ends.'
