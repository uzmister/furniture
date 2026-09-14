import { useApp } from '../state/AppProvider';
import { Star } from './Icons';
import { Reveal } from './Reveal';

export function Reviews() {
  const { t } = useApp();
  const quotes = [
    { text: t.reviews.r1, name: t.reviews.r1n, role: t.reviews.r1r, accent: false },
    { text: t.reviews.r2, name: t.reviews.r2n, role: t.reviews.r2r, accent: true },
    { text: t.reviews.r3, name: t.reviews.r3n, role: t.reviews.r3r, accent: false }
  ];

  return (
    <section className="section shell" id="reviews">
      <div className="head">
        <Reveal>
          <span className="head__eyebrow">{t.reviews.eyebrow}</span>
          <h2 className="head__title">{t.reviews.title}</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="head__text">{t.reviews.text}</p>
        </Reveal>
      </div>

      <div className="quotes">
        {quotes.map((quote, index) => (
          <Reveal
            key={quote.name}
            delay={index * 90}
            className={`quote${quote.accent ? ' quote--accent' : ''}`}
          >
            <div className="quote__stars" aria-hidden>
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={starIndex} />
              ))}
            </div>
            <p>«{quote.text}»</p>
            <div className="quote__who">
              <span className="quote__ava" aria-hidden>
                {quote.name.charAt(0)}
              </span>
              <span>
                <b>{quote.name}</b>
                <span>{quote.role}</span>
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
