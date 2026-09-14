import { useApp } from '../state/AppProvider';
import { ArrowRight, Check, Clock, Hammer, Sparkle } from './Icons';
import { Reveal } from './Reveal';

const STATS = [
  { value: '12+', key: 's1' },
  { value: '480', key: 's2' },
  { value: '1200 m²', key: 's3' },
  { value: '5', key: 's4' }
] as const;

const BRANDS = ['NORDIC OAK', 'CLAY & CO', 'SOFTLINE', 'STUDIO BLUE', 'MATERIA', 'FORM LAB'];

export function Hero() {
  const { t } = useApp();

  return (
    <>
      <section className="hero shell" id="top">
        <div className="hero__grid">
          <div>
            <Reveal>
              <span className="pill">
                <span className="pill__dot" aria-hidden>
                  <Sparkle size={15} strokeWidth={2.2} />
                </span>
                {t.hero.badge}
              </span>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="hero__title">
                {t.hero.titleTop} <em>{t.hero.titleEm}</em> {t.hero.titleBottom}
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="hero__lead">{t.hero.lead}</p>
            </Reveal>

            <Reveal delay={230}>
              <div className="hero__actions">
                <a href="#portfolio" className="btn btn--primary">
                  {t.hero.ctaPrimary}
                  <ArrowRight size={17} />
                </a>
                <a href="#contact" className="btn btn--ghost">
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="hero__facts">
                <div className="fact">
                  <span className="fact__icon" aria-hidden>
                    <Hammer size={20} />
                  </span>
                  <span>
                    <b>12+</b>
                    <span>{t.hero.fact1}</span>
                  </span>
                </div>
                <div className="fact">
                  <span className="fact__icon" aria-hidden>
                    <Check size={20} />
                  </span>
                  <span>
                    <b>480</b>
                    <span>{t.hero.fact2}</span>
                  </span>
                </div>
                <div className="fact">
                  <span className="fact__icon" aria-hidden>
                    <Sparkle size={20} />
                  </span>
                  <span>
                    <b>98%</b>
                    <span>{t.hero.fact3}</span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140} className="hero__stage">
            <div className="hero__blob" aria-hidden />
            <div className="hero__photo">
              <img src="/img/hero-living-room.jpg" alt={t.hero.imgAlt} width={1408} height={768} />
            </div>

            <div className="chip chip--tl">
              <span className="chip__ic" aria-hidden>
                <Hammer size={18} />
              </span>
              <span>
                <b>{t.hero.chipMade}</b>
              </span>
            </div>

            <div className="chip chip--br">
              <span className="chip__ic" aria-hidden>
                <Clock size={18} />
              </span>
              <span>
                <b>21 {t.hero.chipDays}</b>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell" aria-label={t.stats.title}>
        <Reveal>
          <div className="marquee">
            <div className="marquee__track" aria-hidden>
              {[...BRANDS, ...BRANDS].map((brand, index) => (
                <span className="marquee__item" key={`${brand}-${index}`}>
                  {brand}
                  <span style={{ opacity: 0.45 }}>✳</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="shell" aria-label={t.stats.title}>
        <div className="head">
          <Reveal>
            <span className="head__eyebrow">{t.stats.title}</span>
            <h2 className="head__title head__title--sm">{t.stats.text}</h2>
          </Reveal>
        </div>

        <div className="stats">
          {STATS.map((item, index) => (
            <Reveal key={item.key} delay={index * 80} className="stat">
              <b>{item.value}</b>
              <span>{t.stats[item.key]}</span>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
