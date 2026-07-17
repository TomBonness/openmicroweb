import { useRef, type PointerEvent } from 'react'
import { useReducedMotion } from 'motion/react'
import hero640Avif from '../assets/product/generated/hero-640.avif'
import hero1024Avif from '../assets/product/generated/hero-1024.avif'
import hero1536Avif from '../assets/product/generated/hero-1536.avif'
import hero640Webp from '../assets/product/generated/hero-640.webp'
import hero1024Webp from '../assets/product/generated/hero-1024.webp'
import hero1536Webp from '../assets/product/generated/hero-1536.webp'
import { controls, headings, hero, productCopy } from '../content/product'
import styles from './HeroProduct.module.css'

const ledPositions = controls.filter((control) =>
  ['key', 'wide-key', 'touch'].includes(control.kind),
)

export function HeroProduct() {
  const visualRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (prefersReducedMotion || !window.matchMedia('(pointer: fine)').matches) return

    const visual = visualRef.current
    if (!visual) return
    const bounds = visual.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    visual.style.setProperty('--parallax-x', `${x * 16}px`)
    visual.style.setProperty('--parallax-y', `${y * 16}px`)
    visual.style.setProperty('--rotate-x', `${y * -4}deg`)
    visual.style.setProperty('--rotate-y', `${x * 4}deg`)
    visual.style.setProperty('--shine-x', `${(x + 0.5) * 100}%`)
    visual.style.setProperty('--shine-y', `${(y + 0.5) * 100}%`)
  }

  function resetPointer() {
    const visual = visualRef.current
    if (!visual) return
    visual.style.removeProperty('--parallax-x')
    visual.style.removeProperty('--parallax-y')
    visual.style.removeProperty('--rotate-x')
    visual.style.removeProperty('--rotate-y')
    visual.style.removeProperty('--shine-x')
    visual.style.removeProperty('--shine-y')
  }

  return (
    <section className={styles.hero} id="overview" aria-labelledby="hero-title">
      <div className={styles.copy}>
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-title">{headings.hero}</h1>
        <p className={styles.description}>{hero.description}</p>
        <div className={styles.actions}>
          <a className="button buttonPrimary" href="#waitlist">
            {hero.primaryCta}
          </a>
          <a className="button buttonQuiet" href="#design">
            {hero.secondaryCta}
          </a>
        </div>
      </div>

      <div
        className={styles.visualStage}
        ref={visualRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
      >
        <div className={styles.product}>
          <picture>
            <source
              type="image/avif"
              srcSet={`${hero640Avif} 640w, ${hero1024Avif} 1024w, ${hero1536Avif} 1536w`}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 62vw, 760px"
            />
            <source
              type="image/webp"
              srcSet={`${hero640Webp} 640w, ${hero1024Webp} 1024w, ${hero1536Webp} 1536w`}
              sizes="(max-width: 767px) 100vw, (max-width: 1200px) 62vw, 760px"
            />
            <img
              src={hero1024Webp}
              width="1536"
              height="1024"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              alt={productCopy.heroAlt}
            />
          </picture>
          <div className={styles.specular} aria-hidden="true" />
          <div className={styles.ledLayer} aria-hidden="true">
            {ledPositions.map((control) => (
              <span
                key={control.id}
                style={{
                  left: `${control.x / 0.96}%`,
                  top: `${control.y / 0.96}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
