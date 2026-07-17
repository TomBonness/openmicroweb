import { useState, type FocusEvent } from 'react'
import { controls, headings, productCopy } from '../content/product'
import { ControlIcon } from './ControlIcon'
import styles from './ControlsShowcase.module.css'


export function ControlsShowcase() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const activeControl = controls.find((control) => control.id === activeId)

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) setActiveId(null)
  }

  return (
    <section className="section" id="controls" aria-labelledby="controls-title">
      <div className={`sectionInner ${styles.layout}`}>
        <div className={styles.copy}>
          <p className="eyebrow">{productCopy.controlsEyebrow}</p>
          <h2 id="controls-title">{headings.controls}</h2>
          <p className="sectionLead">{productCopy.controlsLead}</p>
          <div className={styles.readout} aria-live="polite" aria-atomic="true">
            {activeControl ? (
              <>
                <strong>{activeControl.name}</strong>
                <p>{activeControl.role}</p>
              </>
            ) : (
              <>
                <strong>{productCopy.controlMapTitle}</strong>
                <p>{productCopy.controlMapInstructions}</p>
              </>
            )}
          </div>
        </div>

        <div className={styles.mapWrap} onBlurCapture={handleBlur}>
          <div className={styles.orientation} aria-hidden="true">{productCopy.controlMapRear}</div>
          <div className={styles.deviceMap} aria-label={productCopy.controlMapLabel}>
            <div className={styles.plate} aria-hidden="true" />
            {controls.map((control) => (
              <button
                type="button"
                key={control.id}
                className={`${styles.control} ${styles[control.kind]} ${activeId === control.id ? styles.active : ''}`}
                style={{
                  left: `${((control.x - control.width / 2) / 96) * 100}%`,
                  top: `${((control.y - control.height / 2) / 96) * 100}%`,
                  width: `${(control.width / 96) * 100}%`,
                  height: `${(control.height / 96) * 100}%`,
                }}
                aria-label={`${control.name}: ${control.role}`}
                aria-pressed={activeId === control.id}
                onPointerEnter={() => setActiveId(control.id)}
                onPointerLeave={(event) => {
                  if (event.pointerType === 'mouse') setActiveId(null)
                }}
                onFocus={() => setActiveId(control.id)}
                onClick={() => setActiveId(control.id)}
              >
                <span aria-hidden="true">
                  <ControlIcon id={control.id} />
                  <small>{control.legend}</small>
                </span>
              </button>
            ))}
          </div>
          <p className={styles.mapCaption}>{productCopy.controlMapFront}</p>
        </div>
      </div>
    </section>
  )
}
