import { ArrowUpRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { photographyCollections, photographyWebsite, instagramUrl } from '../data/photography';
import { useLanguage } from '../i18n/LanguageContext';

const collectionTranslations = {
  'japan-2026': { title: '东京时刻', place: '日本', description: '列车、路口、窗景，以及穿行于城市时安静的节奏。' },
  'san-francisco': { title: '向西的光', place: '旧金山', description: '穿过窗户，越过山丘，一路向太平洋。' },
};

export default function Photography() {
  const { language } = useLanguage();
  const zh = language === 'zh';
  return <div className="site-shell photography-page">
    <a className="skip-link" href="#main">{zh ? '跳至正文' : 'Skip to content'}</a>
    <Header />
    <main id="main" className="portfolio-main">
      <header className="portfolio-head">
        <div className="portfolio-head-grid">
          <div>
            <p className="portfolio-signature">{zh ? 'here again · Danwei Yao 摄影' : 'here again · photographs by Danwei Yao'}</p>
            <h1>{zh ? <>光曾<br />照见我</> : <>Where the Light<br />Found Me</>}</h1>
            <div className="portfolio-intro">
              <p>{zh ? '旅行或暂时离开工作时，我通常站在镜头后，收集世界出现在我眼前的细小片段。' : 'When I’m traveling or away from work, I’m usually behind a lens, collecting small pieces of the world as they appear to me.'}</p>
              <a href={instagramUrl}>Instagram <ArrowUpRight size={14} /></a>
            </div>
          </div>
          <figure className="photographer-portrait">
            <img src="/photography/danwei-photographer.jpg" alt={zh ? '午后光线中的 Danwei Yao' : 'Danwei Yao in afternoon light'} />
            <figcaption>{zh ? 'Danwei Yao · 摄影师' : 'Danwei Yao · photographer'}</figcaption>
          </figure>
        </div>
      </header>

      <div className="portfolio-collections">
        {photographyCollections.map((collection, collectionIndex) => {
          const translated = collectionTranslations[collection.slug as keyof typeof collectionTranslations];
          const title = zh && translated ? translated.title : collection.title;
          const place = zh && translated ? translated.place : collection.place;
          const description = zh && translated ? translated.description : collection.description;
          return <section className="portfolio-collection" id={collection.slug} key={collection.slug}>
          <header className="collection-head">
            <p className="collection-index">{String(collectionIndex + 1).padStart(2, '0')}</p>
            <div>
              <h2>{title}</h2>
              <p>{place} · {collection.year}</p>
            </div>
            <p className="collection-description">{description}</p>
          </header>

          <div className="film-strip" aria-label={zh ? `${title}摄影作品` : `${title} photographs`} tabIndex={0}>
            <div className="film-strip-track">
              {collection.photos.map((photo, index) => <figure className="film-frame" key={photo.src}>
                <a href={photo.src} aria-label={zh ? `打开${title}第 ${index + 1} 张照片` : `Open ${title}, frame ${index + 1}`}>
                  <img src={photo.src} alt={zh ? `${place}摄影作品，第 ${index + 1} 张` : photo.alt} loading={collectionIndex === 0 && index < 3 ? 'eager' : 'lazy'} />
                </a>
                <figcaption>{String(index + 1).padStart(2, '0')}</figcaption>
              </figure>)}
            </div>
          </div>
          <p className="strip-hint">{zh ? '横向滑动浏览胶片 →' : 'Scroll the film strip →'}</p>
        </section>})}
      </div>

      <section className="portfolio-contact">
        <p>{zh ? '更多照片、正在整理的作品，以及日常里的片刻。' : 'More photographs, works in progress, and everyday frames.'}</p>
        <div>
          <a href={instagramUrl}>@here_againphotography <ArrowUpRight size={14} /></a>
          {photographyWebsite && <a href={photographyWebsite}>{zh ? '摄影网站' : 'Photography website'} <ArrowUpRight size={14} /></a>}
        </div>
      </section>
    </main>
    <Footer />
  </div>;
}
