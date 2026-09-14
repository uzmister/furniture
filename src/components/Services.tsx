import { useApp } from '../state/AppProvider';
import { Hammer, Palette, Shield, Truck } from './Icons';
import { Reveal } from './Reveal';

const ICONS = [Palette, Hammer, Truck, Shield];

export function Services() {
  const { t } = useApp();
  const items = [
    { t: t.services.s1t, d: t.services.s1d },
    { t: t.services.s2t, d: t.services.s2d },
    { t: t.services.s3t, d: t.services.s3d },
    { t: t.services.s4t, d: t.services.s4d }
  ];

  return (
    <section className="section shell" id="services">
      <div className="head">
        <Reveal>
          <span className="head__eyebrow">{t.services.eyebrow}</span>
          <h2 className="head__title">{t.services.title}</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="head__text">{t.services.text}</p>
        </Reveal>
      </div>

      <div className="services">
        {items.map((item, index) => {
          const Icon = ICONS[index];
          return (
            <Reveal key={item.t} delay={index * 90} className="service">
              <span className="service__ic" aria-hidden>
                <Icon size={26} />
              </span>
              <h3>{item.t}</h3>
              <p>{item.d}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
