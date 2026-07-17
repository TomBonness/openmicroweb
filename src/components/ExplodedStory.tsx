import { useEffect, useRef, useState } from 'react'
import { useReducedMotion, useScroll, useMotionValueEvent } from 'motion/react'
import exploded640Avif from '../assets/product/generated/exploded-640.avif'
import exploded1024Avif from '../assets/product/generated/exploded-1024.avif'
import exploded1536Avif from '../assets/product/generated/exploded-1536.avif'
import exploded640Webp from '../assets/product/generated/exploded-640.webp'
import exploded1024Webp from '../assets/product/generated/exploded-1024.webp'
import exploded1536Webp from '../assets/product/generated/exploded-1536.webp'
import explodedCad from '../assets/product/source/exploded.svg'
import { explodedCallouts, headings, productCopy } from '../content/product'
import styles from './ExplodedStory.module.css'

export function ExplodedStory() {
  const rootRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [staticMode, setStaticMode] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px), (pointer: coarse)')
    const update = () => setStaticMode(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (staticMode || prefersReducedMotion) return
    setActiveIndex(Math.min(3, Math.floor(progress * 4)))
  })

  const showAll = staticMode || prefersReducedMotion

  return (
    <section className={styles.story} id="design" ref={rootRef} aria-labelledby="design-title">
      <div className={styles.scrollSequence}>
      <div className={styles.stickyPanel}>
        <div className={styles.heading}>
          <p className="eyebrow eyebrowDark">{productCopy.designEyebrow}</p>
          <h2 id="design-title">{headings.design}</h2>
        </div>

        <div className={styles.visual}>
          <picture>
            <source
              type="image/avif"
              srcSet={`${exploded640Avif} 640w, ${exploded1024Avif} 1024w, ${exploded1536Avif} 1536w`}
              sizes="(max-width: 767px) 100vw, 68vw"
            />
            <source
              type="image/webp"
              srcSet={`${exploded640Webp} 640w, ${exploded1024Webp} 1024w, ${exploded1536Webp} 1536w`}
              sizes="(max-width: 767px) 100vw, 68vw"
            />
            <img
              src={exploded1024Webp}
              width="1536"
              height="1024"
              loading="lazy"
              decoding="async"
              alt={productCopy.explodedAlt}
            />
          </picture>
        </div>

        <ol className={styles.callouts}>
          {explodedCallouts.map((callout, index) => (
            <li
              key={callout}
              className={showAll || index <= activeIndex ? styles.revealed : undefined}
              aria-current={!showAll && index === activeIndex ? 'step' : undefined}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {callout}
            </li>
          ))}
        </ol>
      </div>
      </div>

      <figure className={styles.cadFigure}>
        <div className={styles.cadLabel}>
          <span>{productCopy.cadFigureType}</span>
          <strong>{productCopy.cadFigureHeading}</strong>
        </div>
        <img
          src={explodedCad}
          width="1800"
          height="540"
          loading="lazy"
          decoding="async"
          alt={productCopy.cadAlt}
        />
        <figcaption>{productCopy.cadFigureCaption}</figcaption>
      </figure>
    </section>
  )
}
