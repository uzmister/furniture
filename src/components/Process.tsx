import { useApp } from '../state/AppProvider';
import { Reveal } from './Reveal';

export function Process() {
  const { t } = useApp();
  const steps = [
    { t: t.process.p1t, d: t.process.p1d },
    { t: t.process.p2t, d: t.process.p2d },
    { t: t.process.p3t, d: t.process.p3d },
    { t: t.process.p4t, d: t.process.p4d }
  ];

  return (
    <section className="section shell" id="process">
      <div className="head">
        <Reveal>
          <span className="head__eyebrow">{t.process.eyebrow}</span>
          <h2 className="head__title">{t.process.title}</h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="head__text">{t.process.text}</p>
        </Reveal>
      </div>

      <div className="process">
        {steps.map((step, index) => (
          <Reveal key={step.t} delay={index * 90} className="step">
            <span className="step__no">{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.t}</h3>
            <p>{step.d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
