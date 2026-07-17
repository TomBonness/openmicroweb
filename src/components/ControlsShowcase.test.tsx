import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ControlsShowcase } from './ControlsShowcase'

describe('ControlsShowcase', () => {
  it('follows the rear-to-front CAD legend layout and keyboard order', () => {
    render(<ControlsShowcase />)

    const controls = screen.getAllByRole('button')
    expect(controls.slice(0, 4).map((control) => control.getAttribute('aria-label'))).toEqual([
      'Mode switch: Switch profiles or command layers.',
      'Voice command: Open push-to-talk input.',
      'Launch workflow: Start the selected automation.',
      'Review diff: Open the current change for review.',
    ])
    expect(controls.slice(-4).map((control) => control.getAttribute('aria-label'))).toEqual([
      'Command palette: Turn through commands and press to confirm.',
      'Terminal: Open a command line in the active workspace.',
      'Code action: Open the mapped editor action.',
      'Navigate: Move through results in four directions and press to select.',
    ])

    const touchTop = Number.parseFloat(screen.getByRole('button', { name: /mode switch/i }).style.top)
    const encoderTop = Number.parseFloat(screen.getByRole('button', { name: /command palette/i }).style.top)
    expect(touchTop).toBeLessThan(encoderTop)
    expect(screen.getByText('Rear · USB-C')).toBeInTheDocument()
    expect(screen.getByText('Front · operator edge')).toBeInTheDocument()
  })
})
