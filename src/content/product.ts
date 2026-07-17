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
  eyebrow: 'Open-source hardware · Revision 0.1',
  description: 'A tactile desktop controller that works with any local automation harness.',
  primaryCta: 'Get preorder updates',
  secondaryCta: 'Explore the design',
} as const

export const productCopy = {
  skipLink: 'Skip to content',
  primaryNavigationLabel: 'Primary navigation',
  wordmark: 'Open Micro',
  overviewAriaLabel: 'Open Micro overview',
  navigationCta: 'Get updates',
  lifecycleEyebrow: 'Works with any harness',
  lifecycleLead:
    'Connect the documented local API to any harness and make long-running work visible at a glance.',
  lifecycleControlLabel: 'Choose a workflow state',
  controlsEyebrow: 'Software-defined controls',
  controlsLead:
    'Map twelve hot-swap keys, an encoder, a five-way control, and a touch surface to the actions you use all day.',
  controlMapTitle: 'Your workflow, under one hand.',
  controlMapInstructions:
    'Select, focus, or hover over a control to see the action mapped to it.',
  controlMapLabel: 'Interactive Open Micro control map',
  controlMapFront: 'Front · operator edge',
  controlMapRear: 'Rear · USB-C',
  connectivityEyebrow: 'Transport, power, and software',
  connectivityLead:
    'Move between USB-C and bonded Bluetooth with a protected 600 mAh battery for a clean, portable desk.',
  designEyebrow: 'Four-layer construction',
  designLead:
    'Every part has one job, from the machined shell to the light-diffusing control surface.',
  materialsHeading: 'Measured to fit your desk.',
  specsEyebrow: 'Customer-facing specifications',
  openSourceEyebrow: 'Source and licensing',
  waitlistEyebrow: 'Preorder notification list',
  waitlistLead:
    'Leave one address and we’ll share preorder timing only when it is confirmed.',
  explodedRenderTitle: 'Architecture, opened up.',
  explodedRenderBody: 'The shell, core, light plate, and controls separate cleanly into a serviceable stack.',
  enclosureRenderTitle: 'The working edge.',
  enclosureRenderBody: 'USB-C, power, and protected openings sit flush within the rounded aluminum shell.',
  heroAlt:
    'Silver Open Micro controller with twelve white keys, encoder, five-way control, and touch surface',
  explodedAlt:
    'Open Micro aluminum enclosure, PCB, interface plate, switches, and keycaps separated into layers',
  enclosureAlt:
    'Rear three-quarter view of Open Micro showing its USB-C and power openings',
  topAlt:
    'Open Micro assembled control layout',
  footerProduct: 'Open Micro · Revision 0.1',
  visualizationCredit: 'Revision 0.1 design visualization',
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


export const lifecycleStates = [
  {
    id: 'idle',
    name: 'Idle',
    color: '#202020',
    effect: 'solid',
    period: 0,
    timing: 'Ready',
    description: 'Available for the next request.',
  },
  {
    id: 'thinking',
    name: 'Thinking',
    color: '#4D8DFF',
    effect: 'breathe',
    period: 1400,
    timing: 'Working',
    description: 'Reasoning through the current request.',
  },
  {
    id: 'running',
    name: 'Running',
    color: '#31C7D9',
    effect: 'pulse',
    period: 800,
    timing: 'Active',
    description: 'Executing tools and code.',
  },
  {
    id: 'waiting',
    name: 'Waiting',
    color: '#FF9F0A',
    effect: 'blink',
    period: 900,
    timing: 'Needs input',
    description: 'Paused for input or approval.',
  },
  {
    id: 'done',
    name: 'Done',
    color: '#30D158',
    effect: 'solid',
    period: 4000,
    timing: 'Complete',
    description: 'The current task has completed.',
  },
  {
    id: 'error',
    name: 'Error',
    color: '#FF453A',
    effect: 'blink',
    period: 700,
    timing: 'Attention',
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
  { id: 'touch', name: 'Mode switch', legend: 'Mode', role: 'Switch profiles or command layers.', kind: 'touch', x: 19.425, y: 19.425, width: 14, height: 14 },
  { id: 'microphone', name: 'Voice command', legend: 'Voice', role: 'Open push-to-talk input.', kind: 'wide-key', x: 48, y: 19.425, width: 37.05, height: 18 },
  { id: 'command-6', name: 'Launch workflow', legend: 'Launch', role: 'Start the selected automation.', kind: 'key', x: 76.575, y: 19.425, width: 18, height: 18 },
  { id: 'command-1', name: 'Review diff', legend: 'Diff', role: 'Open the current change for review.', kind: 'key', x: 19.425, y: 38.475, width: 18, height: 18 },
  { id: 'command-2', name: 'Debug', legend: 'Debug', role: 'Open the debugger for the active run.', kind: 'key', x: 38.475, y: 38.475, width: 18, height: 18 },
  { id: 'command-3', name: 'Build', legend: 'Build', role: 'Build the active project.', kind: 'key', x: 57.525, y: 38.475, width: 18, height: 18 },
  { id: 'command-4', name: 'Test', legend: 'Test', role: 'Run the mapped test suite.', kind: 'key', x: 76.575, y: 38.475, width: 18, height: 18 },
  { id: 'agent-3', name: 'Create branch', legend: 'Branch', role: 'Create or switch the active branch.', kind: 'key', x: 19.425, y: 57.525, width: 18, height: 18 },
  { id: 'agent-4', name: 'Commit', legend: 'Commit', role: 'Create a commit from staged changes.', kind: 'key', x: 38.475, y: 57.525, width: 18, height: 18 },
  { id: 'agent-5', name: 'Pull request', legend: 'Pull request', role: 'Open the active change for review.', kind: 'key', x: 57.525, y: 57.525, width: 18, height: 18 },
  { id: 'agent-6', name: 'Merge branch', legend: 'Merge', role: 'Merge the active branch when checks are green.', kind: 'key', x: 76.575, y: 57.525, width: 18, height: 18 },
  { id: 'encoder', name: 'Command palette', legend: 'Palette', role: 'Turn through commands and press to confirm.', kind: 'encoder', x: 19.425, y: 76.575, width: 18.5, height: 18.5 },
  { id: 'agent-1', name: 'Terminal', legend: 'Terminal', role: 'Open a command line in the active workspace.', kind: 'key', x: 38.475, y: 76.575, width: 18, height: 18 },
  { id: 'agent-2', name: 'Code action', legend: 'Code', role: 'Open the mapped editor action.', kind: 'key', x: 57.525, y: 76.575, width: 18, height: 18 },
  { id: 'joystick', name: 'Navigate', legend: 'Move', role: 'Move through results in four directions and press to select.', kind: 'joystick', x: 76.575, y: 76.575, width: 15, height: 15 },
] as const satisfies ReadonlyArray<{
  id: string
  name: string
  legend: string
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

export const explodedLayers = [
  {
    label: '01',
    title: 'Enclosure',
    value: 'Printed or 6061-T6',
    body: 'A rounded shell keeps the footprint compact and the desk presence quiet.',
  },
  {
    label: '02',
    title: 'Core',
    value: '91.5 mm · four layers',
    body: 'The nRF52840-based board carries USB-C, Bluetooth, power, and every input.',
  },
  {
    label: '03',
    title: 'Light plate',
    value: '1.5 mm polycarbonate',
    body: 'A frosted interface softens the reverse-mount RGB light beneath each control.',
  },
  {
    label: '04',
    title: 'Controls',
    value: 'Hot-swap and remap',
    body: 'Twelve MX positions, an encoder, a five-way control, and touch stay fully software-defined.',
  },
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
