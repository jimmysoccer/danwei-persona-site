import { ArrowUpRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { photographyCollections, photographyWebsite, instagramUrl } from '../data/photography';

export default function Photography() {
  return <div className="site-shell photography-page">
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main" className="portfolio-main">
      <header className="portfolio-head">
        <div className="portfolio-head-grid">
          <div>
            <p className="portfolio-signature">here again · photographs by Danwei Yao</p>
            <h1>Where the Light<br />Found Me</h1>
            <div className="portfolio-intro">
              <p>When I’m traveling or away from work, I’m usually behind a lens, collecting small pieces of the world as they appear to me.</p>
              <a href={instagramUrl}>Instagram <ArrowUpRight size={14} /></a>
            </div>
          </div>
          <figure className="photographer-portrait">
            <img src="/photography/danwei-photographer.jpg" alt="Danwei Yao in afternoon light" />
            <figcaption>Danwei Yao · photographer</figcaption>
          </figure>
        </div>
      </header>

      <div className="portfolio-collections">
        {photographyCollections.map((collection, collectionIndex) => <section className="portfolio-collection" id={collection.slug} key={collection.slug}>
          <header className="collection-head">
            <p className="collection-index">{String(collectionIndex + 1).padStart(2, '0')}</p>
            <div>
              <h2>{collection.title}</h2>
              <p>{collection.place} · {collection.year}</p>
            </div>
            <p className="collection-description">{collection.description}</p>
          </header>

          <div className="film-strip" aria-label={`${collection.title} photographs`} tabIndex={0}>
            <div className="film-strip-track">
              {collection.photos.map((photo, index) => <figure className="film-frame" key={photo.src}>
                <a href={photo.src} aria-label={`Open ${collection.title}, frame ${index + 1}`}>
                  <img src={photo.src} alt={photo.alt} loading={collectionIndex === 0 && index < 3 ? 'eager' : 'lazy'} />
                </a>
                <figcaption>{String(index + 1).padStart(2, '0')}</figcaption>
              </figure>)}
            </div>
          </div>
          <p className="strip-hint">Scroll the film strip →</p>
        </section>)}
      </div>

      <section className="portfolio-contact">
        <p>More photographs, works in progress, and everyday frames.</p>
        <div>
          <a href={instagramUrl}>@here_againphotography <ArrowUpRight size={14} /></a>
          {photographyWebsite && <a href={photographyWebsite}>Photography website <ArrowUpRight size={14} /></a>}
        </div>
      </section>
    </main>
    <Footer />
  </div>;
}
