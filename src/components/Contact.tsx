import { useState, type FormEvent } from 'react';
import { useApp } from '../state/AppProvider';
import { Check, Send } from './Icons';
import { Reveal } from './Reveal';

interface Errors {
  name?: string;
  phone?: string;
}

const PHONE_RE = /^[+()\d\s-]{7,20}$/;

export function Contact() {
  const { t } = useApp();
  const [form, setForm] = useState({ name: '', phone: '', object: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle');

  const update = (key: keyof typeof form) => (event: { target: { value: string } }) =>
    setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = t.cta.errName;
    if (!PHONE_RE.test(form.phone.trim())) next.phone = t.cta.errPhone;
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setState('sending');
    // Demo: backend yo'q — so'rovni shu yerda qabul qilamiz
    window.setTimeout(() => {
      setState('done');
      setForm({ name: '', phone: '', object: '', message: '' });
    }, 900);
  };

  return (
    <section className="section shell" id="contact">
      <Reveal className="cta">
        <div>
          <h2 className="cta__title">{t.cta.title}</h2>
          <p className="cta__text">{t.cta.text}</p>
          <ul className="cta__list">
            <li>
              <Check size={17} />
              {t.cta.l1}
            </li>
            <li>
              <Check size={17} />
              {t.cta.l2}
            </li>
            <li>
              <Check size={17} />
              {t.cta.l3}
            </li>
          </ul>
        </div>

        <form className="form" onSubmit={submit} noValidate>
          <div className={`field${errors.name ? ' field--error' : ''}`}>
            <label htmlFor="name">{t.cta.name}</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={update('name')}
              placeholder={t.cta.namePh}
              autoComplete="name"
              required
            />
            {errors.name && <span className="field__err">{errors.name}</span>}
          </div>

          <div className={`field${errors.phone ? ' field--error' : ''}`}>
            <label htmlFor="phone">{t.cta.phone}</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={update('phone')}
              placeholder={t.cta.phonePh}
              autoComplete="tel"
              required
            />
            {errors.phone && <span className="field__err">{errors.phone}</span>}
          </div>

          <div className="field">
            <label htmlFor="object">{t.cta.object}</label>
            <select id="object" name="object" value={form.object} onChange={update('object')}>
              <option value="">{t.cta.object}</option>
              <option value="flat">{t.cta.o1}</option>
              <option value="house">{t.cta.o2}</option>
              <option value="office">{t.cta.o3}</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="message">{t.cta.msg}</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={update('message')}
              placeholder={t.cta.msgPh}
            />
          </div>

          <button type="submit" className="btn btn--primary btn--block" disabled={state === 'sending'}>
            {state === 'sending' ? t.cta.sending : t.cta.submit}
            <Send size={17} />
          </button>

          {state === 'done' && (
            <p className="form__ok">
              <Check size={17} />
              {t.cta.ok}
            </p>
          )}

          <p className="form__note">{t.cta.note}</p>
        </form>
      </Reveal>
    </section>
  );
}
