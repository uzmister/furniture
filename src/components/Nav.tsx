import { useEffect, useState } from 'react';
import { useApp } from '../state/AppProvider';
import { LANGS } from '../data/i18n';
import { ArrowRight, Close, Menu, Moon, Sofa, Sun } from './Icons';

const SECTIONS = ['portfolio', 'services', 'process', 'reviews', 'contact'] as const;

export function Nav() {
  const { t, theme, toggleTheme, lang, setLang } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(100, (window.scrollY / height) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <div className="scrollbar-top" style={{ width: `${progress}%` }} aria-hidden />
      <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="shell">
          <div className="nav__inner">
            <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
              <span className="nav__mark" aria-hidden>
                <Sofa size={21} />
              </span>
              <span>
                MONO
                <small>Mebel</small>
              </span>
            </a>

            <nav className={`nav__links${open ? ' is-open' : ''}`} aria-label="Asosiy navigatsiya">
              {SECTIONS.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`nav__link${active === id ? ' is-active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {t.nav[id]}
                </a>
              ))}
            </nav>

            <div className="nav__tools">
              <div className="lang" role="group" aria-label="Til">
                {LANGS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`lang__btn${lang === item.id ? ' is-active' : ''}`}
                    onClick={() => setLang(item.id)}
                    aria-pressed={lang === item.id}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="icon-btn"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? t.theme.toLight : t.theme.toDark}
                title={theme === 'dark' ? t.theme.toLight : t.theme.toDark}
              >
                {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
              </button>

              <a href="#contact" className="btn btn--primary btn--sm nav__cta">
                {t.nav.cta}
                <ArrowRight size={16} />
              </a>

              <button
                type="button"
                className="icon-btn nav__burger"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={t.menu}
              >
                {open ? <Close size={19} /> : <Menu size={19} />}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
