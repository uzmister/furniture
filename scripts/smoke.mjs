/**
 * Smoke test — ilovani jsdom ichida ishga tushirib, asosiy oqimlarni tekshiradi:
 * render, filtr, til almashtirish, tun/kun rejimi, sevimlilar va forma validatsiyasi.
 *
 *   npm run smoke
 */
import { build } from 'esbuild';
import { JSDOM } from 'jsdom';
import { mkdirSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outfile = resolve(root, '.smoke/bundle.mjs');

/* ---------- 1. jsdom muhitini tayyorlaymiz ---------- */
const dom = new JSDOM(
  `<!doctype html><html data-theme="light"><head></head><body><div id="root"></div></body></html>`,
  { url: 'http://localhost:5173/', pretendToBeVisual: true }
);

const { window } = dom;
window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener() {},
  removeListener() {},
  addEventListener() {},
  removeEventListener() {},
  dispatchEvent: () => false
});

// Test deterministik bo'lishi uchun tilni oldindan o'zbekchaga o'rnatamiz
window.localStorage.setItem('mono-lang', 'uz');

class IO {
  constructor(cb) {
    this.cb = cb;
  }
  observe(el) {
    this.cb([{ isIntersecting: true, target: el }], this);
  }
  unobserve() {}
  disconnect() {}
}

window.IntersectionObserver = IO;
window.scrollTo = () => {};

globalThis.window = window;
globalThis.document = window.document;
Object.defineProperty(globalThis, 'navigator', {
  value: window.navigator,
  configurable: true,
  writable: true
});
globalThis.HTMLElement = window.HTMLElement;
globalThis.localStorage = window.localStorage;
globalThis.sessionStorage = window.sessionStorage;
globalThis.Node = window.Node;
globalThis.Event = window.Event;
globalThis.MouseEvent = window.MouseEvent;
globalThis.KeyboardEvent = window.KeyboardEvent;
globalThis.IntersectionObserver = IO;
globalThis.requestAnimationFrame = (cb) => setTimeout(() => cb(Date.now()), 0);
globalThis.cancelAnimationFrame = (id) => clearTimeout(id);
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
// React o'zining ichki ogohlantirishlarini (act, deprecated utils) filtrlab o'tkazamiz
const IGNORED_WARNINGS = ['not wrapped in act', 'ReactDOMTestUtils.act', 'deprecated in favor of React.act'];
globalThis.console.error = ((orig) =>
  (...args) => {
    const msg = args.map((a) => String(a)).join(' ');
    if (IGNORED_WARNINGS.some((needle) => msg.includes(needle))) return;
    orig(...args);
  })(console.error);

/* ---------- 2. Bundle ---------- */
rmSync(resolve(root, '.smoke'), { recursive: true, force: true });
mkdirSync(resolve(root, '.smoke'), { recursive: true });
await build({
  entryPoints: [resolve(root, 'scripts/smoke-entry.mjs')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  jsx: 'automatic',
  outfile,
  loader: { '.css': 'empty' },
  define: { 'process.env.NODE_ENV': '"development"' },
  logLevel: 'error'
});

/* ---------- 3. Testlarni ishga tushiramiz ---------- */
const { run } = await import(outfile);
const result = await run();

const checks = [];
const check = (name, ok, extra = '') => {
  checks.push({ name, ok, extra });
  console.log(`${ok ? '✅' : '❌'} ${name}${extra ? ` — ${extra}` : ''}`);
};

check('Hero sarlavhasi render bo‘ldi', result.heroTitle.length > 10, result.heroTitle.slice(0, 60));
check('Portfolio 8 ta loyiha ko‘rsatdi', result.cardCount === 8, `${result.cardCount} ta`);
check('Filtr "Yotoqxona" dan keyin 2 ta karta', result.cardCountBedroom === 2, `${result.cardCountBedroom} ta`);
check('Statistika bloklari 4 ta', result.statCount === 4, `${result.statCount} ta`);
check('Xizmatlar 4 ta, jarayon 4 qadam', result.serviceCount === 4 && result.stepCount === 4);
check('Sharhlar 3 ta', result.quoteCount === 3, `${result.quoteCount} ta`);
check('Barcha rasmlar mavjud yo‘l bilan', result.brokenImages.length === 0, result.brokenImages.join(', '));
check('Xato/ogohlantirishsiz render', result.renderErrors.length === 0, result.renderErrors.join(' | '));
check('Tungi rejim almashinuvi', result.themeAfterToggle === 'dark', result.themeAfterToggle);
check('Rus tiliga o‘tish ishlaydi', result.ruNav.includes('Портфолио'), result.ruNav);
check('Ingliz tiliga o‘tish ishlaydi', result.enNav.includes('Portfolio'), result.enNav);
check('Sevimlilar localStorage’ga yozildi', result.favouriteSaved === true, String(result.favouriteRaw));
check('Bo‘sh forma xato ko‘rsatadi', result.formErrors === 2, `${result.formErrors} ta xato`);
check('To‘g‘ri forma qabul qilinadi', result.formSuccess === true);
check('Lightbox loyiha nomini ochadi', result.lightboxTitle.length > 3, result.lightboxTitle);

const failed = checks.filter((c) => !c.ok);
console.log(`\n${checks.length - failed.length}/${checks.length} tekshiruv muvaffaqiyatli.`);
process.exit(failed.length === 0 ? 0 : 1);
