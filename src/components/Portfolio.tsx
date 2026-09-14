import { useEffect, useMemo, useState } from 'react';
import { useApp } from '../state/AppProvider';
import { CATEGORIES, PROJECTS, type Category, type Project } from '../data/projects';
import { ArrowRight, Close, Heart, Zoom } from './Icons';
import { Reveal } from './Reveal';

type Filter = 'all' | Category;

export function Portfolio() {
  const { t, lang, favourites, toggleFavourite, notify } = useApp();
  const [filter, setFilter] = useState<Filter>('all');
  const [preview, setPreview] = useState<Project | null>(null);

  const items = useMemo(
    () => (filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.cat === filter)),
    [filter]
  );

  useEffect(() => {
    if (!preview) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPreview(null);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [preview]);

  const onFavourite = (project: Project) => {
    const wasFav = favourites.includes(project.id);
    toggleFavourite(project.id);
    notify(wasFav ? t.portfolio.removed : t.portfolio.saved);
  };

  return (
    <section className="section shell" id="portfolio">
      <div className="head">
        <Reveal>
          <span className="head__eyebrow">{t.portfolio.eyebrow}</span>
          <h2 className="head__title">{t.portfolio.title}</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="head__text">{t.portfolio.text}</p>
        </Reveal>
      </div>

      <Reveal>
        <div className="filters" role="group" aria-label={t.portfolio.eyebrow}>
          {(['all', ...CATEGORIES] as Filter[]).map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              className={`filter${filter === item ? ' is-active' : ''}`}
              onClick={() => setFilter(item)}
            >
              {t.portfolio[item]}
            </button>
          ))}
        </div>
      </Reveal>

      {items.length === 0 ? (
        <p className="muted">{t.portfolio.empty}</p>
      ) : (
        <div className="grid">
          {items.map((project, index) => {
            const isFav = favourites.includes(project.id);
            return (
              <article
                className="card"
                key={`${filter}-${project.id}`}
                style={{ animationDelay: `${Math.min(index, 7) * 70}ms` }}
              >
                <div
                  className="card__media"
                  onClick={() => setPreview(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setPreview(project);
                    }
                  }}
                  aria-label={`${project.name[lang]} — ${t.portfolio.zoom}`}
                >
                  <img src={project.img} alt={project.name[lang]} loading="lazy" width={1408} height={768} />
                  <span className="card__tag">{t.portfolio[project.cat]}</span>
                  <span className="card__zoom" aria-hidden>
                    <Zoom size={19} />
                  </span>
                </div>

                <div className="card__body">
                  <div className="card__top">
                    <h3 className="card__name">{project.name[lang]}</h3>
                    <span className="card__price">{project.price} so‘m</span>
                  </div>

                  <p className="card__desc">{project.desc[lang]}</p>

                  <div className="card__meta">
                    {project.tags[lang].map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="card__foot">
                    <button type="button" className="card__link" onClick={() => setPreview(project)}>
                      {t.portfolio.detail}
                      <ArrowRight size={16} />
                    </button>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span className="muted" style={{ fontSize: '0.78rem' }}>
                        {project.year} · {project.size}
                      </span>
                      <button
                        type="button"
                        className={`card__like${isFav ? ' is-on' : ''}`}
                        onClick={() => onFavourite(project)}
                        aria-pressed={isFav}
                        aria-label={t.portfolio.like}
                        title={t.portfolio.like}
                      >
                        <Heart size={17} filled={isFav} />
                      </button>
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {preview && (
        <div className="lightbox" onClick={() => setPreview(null)} role="dialog" aria-modal="true">
          <div className="lightbox__panel" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="lightbox__close"
              onClick={() => setPreview(null)}
              aria-label="Yopish"
            >
              <Close size={20} />
            </button>
            <img src={preview.img} alt={preview.name[lang]} />
            <div className="lightbox__body">
              <div className="lightbox__row">
                <h3 className="card__name" style={{ fontSize: '1.5rem' }}>
                  {preview.name[lang]}
                </h3>
                <span className="card__price">{preview.price} so‘m</span>
              </div>
              <p className="muted">
                {t.portfolio[preview.cat]} · {preview.year} · {preview.size}
              </p>
              <p className="card__desc">{preview.desc[lang]}</p>
              <div className="card__meta">
                {preview.tags[lang].map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#contact" className="btn btn--primary" onClick={() => setPreview(null)}>
                {t.nav.cta}
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
