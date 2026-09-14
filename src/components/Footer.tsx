import { useApp } from '../state/AppProvider';
import { Facebook, Instagram, MapPin, Phone, Telegram, Clock } from './Icons';

export function Footer() {
  const { t } = useApp();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__grid">
          <div className="footer__about">
            <a href="#top" className="nav__brand">
              <span className="nav__mark" aria-hidden>
                M
              </span>
              <span>
                MONO
                <small>Mebel</small>
              </span>
            </a>
            <p>{t.footer.about}</p>
            <div className="socials">
              <a className="icon-btn" href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
                <Instagram size={18} />
              </a>
              <a className="icon-btn" href="https://t.me" aria-label="Telegram" target="_blank" rel="noreferrer">
                <Telegram size={18} />
              </a>
              <a className="icon-btn" href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4>{t.footer.nav}</h4>
            <div className="footer__links">
              <a href="#portfolio">{t.nav.portfolio}</a>
              <a href="#services">{t.nav.services}</a>
              <a href="#process">{t.nav.process}</a>
              <a href="#reviews">{t.nav.reviews}</a>
            </div>
          </div>

          <div>
            <h4>{t.footer.cats}</h4>
            <div className="footer__links">
              <a href="#portfolio">{t.portfolio.living}</a>
              <a href="#portfolio">{t.portfolio.bedroom}</a>
              <a href="#portfolio">{t.portfolio.kitchen}</a>
              <a href="#portfolio">{t.portfolio.office}</a>
            </div>
          </div>

          <div>
            <h4>{t.footer.contact}</h4>
            <div className="footer__links">
              <a href="tel:+998901234567">
                <span style={{ display: 'inline-flex', gap: 9, alignItems: 'center' }}>
                  <Phone size={16} />
                  +998 90 123 45 67
                </span>
              </a>
              <a href="mailto:salom@mono.uz">
                <span style={{ display: 'inline-flex', gap: 9, alignItems: 'center' }}>
                  <Telegram size={16} />
                  salom@mono.uz
                </span>
              </a>
              <span className="muted" style={{ display: 'inline-flex', gap: 9, alignItems: 'center', fontSize: '0.92rem' }}>
                <MapPin size={16} />
                {t.footer.addr}
              </span>
              <span className="muted" style={{ display: 'inline-flex', gap: 9, alignItems: 'center', fontSize: '0.92rem' }}>
                <Clock size={16} />
                {t.footer.hours}
              </span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} MONO Mebel. {t.footer.rights}
          </span>
          <span>{t.footer.made} ✳</span>
        </div>
      </div>
    </footer>
  );
}
