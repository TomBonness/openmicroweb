import explodedView from '../assets/product/source/exploded.svg'
import enclosureView from '../assets/product/source/silver-anodized.svg'
import { explodedLayers, headings, productCopy } from '../content/product'
import styles from './ExplodedStory.module.css'

export function ExplodedStory() {
  return (
    <section className={styles.story} id="design" aria-labelledby="design-title">
      <div className={styles.inner}>
        <header className={styles.heading}>
          <p className="eyebrow eyebrowDark">{productCopy.designEyebrow}</p>
          <h2 id="design-title">{headings.design}</h2>
          <p className="sectionLead sectionLeadDark">{productCopy.designLead}</p>
        </header>

        <div className={styles.visualGrid}>
          <figure className={`${styles.render} ${styles.explodedRender}`}>
            <div className={styles.renderImage}>
              <img
                src={explodedView}
                width="1800"
                height="540"
                loading="lazy"
                decoding="async"
                alt={productCopy.explodedAlt}
              />
            </div>
            <figcaption>
              <strong>{productCopy.explodedRenderTitle}</strong>
              <span>{productCopy.explodedRenderBody}</span>
            </figcaption>
          </figure>

          <figure className={`${styles.render} ${styles.enclosureRender}`}>
            <div className={styles.renderImage}>
              <img
                src={enclosureView}
                width="1800"
                height="540"
                loading="lazy"
                decoding="async"
                alt={productCopy.enclosureAlt}
              />
            </div>
            <figcaption>
              <strong>{productCopy.enclosureRenderTitle}</strong>
              <span>{productCopy.enclosureRenderBody}</span>
            </figcaption>
          </figure>
        </div>

        <ol className={styles.layers}>
          {explodedLayers.map((layer) => (
            <li key={layer.label}>
              <span>{layer.label}</span>
              <div>
                <small>{layer.title}</small>
                <strong>{layer.value}</strong>
                <p>{layer.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
