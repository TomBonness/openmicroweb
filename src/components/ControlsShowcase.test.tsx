import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ControlsShowcase } from './ControlsShowcase'

describe('ControlsShowcase', () => {
  it('follows the rear-to-front schematic in layout and keyboard order', () => {
    render(<ControlsShowcase />)

    const controls = screen.getAllByRole('button')
    expect(controls.slice(0, 4).map((control) => control.getAttribute('aria-label'))).toEqual([
      'Mode switch: Switch profiles or command layers.',
      'Voice command: Open push-to-talk input.',
      'Undo: Undo the last mapped action.',
      'Build: Build the active project.',
    ])
    expect(controls.slice(-4).map((control) => control.getAttribute('aria-label'))).toEqual([
      'Command palette: Turn through commands and press to confirm.',
      'Merge branch: Merge the active branch when checks are green.',
      'Create branch: Create or switch branches without leaving the workflow.',
      'Navigate: Move through results in four directions and press to select.',
    ])

    const touchTop = Number.parseFloat(screen.getByRole('button', { name: /mode switch/i }).style.top)
    const encoderTop = Number.parseFloat(screen.getByRole('button', { name: /command palette/i }).style.top)
    expect(touchTop).toBeLessThan(encoderTop)
    expect(screen.getByText('Rear · USB-C')).toBeInTheDocument()
    expect(screen.getByText('Front · operator edge')).toBeInTheDocument()
  })
})
