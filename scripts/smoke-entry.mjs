import { act } from 'react';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '../src/App.tsx';

const wait = (ms = 60) => new Promise((resolve) => setTimeout(resolve, ms));

const click = (el) => {
  el.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }));
};

const text = (el) => (el ? el.textContent.trim() : '');

export async function run() {
  const renderErrors = [];
  const originalError = console.error;
  console.error = (...args) => {
    const msg = args.map((a) => (a instanceof Error ? a.message : String(a))).join(' ');
    renderErrors.push(msg);
    originalError(...args);
  };

  const container = document.getElementById('root');
  const root = createRoot(container);

  await act(async () => {
    root.render(createElement(App));
  });
  await act(async () => {
    await wait(80);
  });

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  if (!document.querySelector('.hero__title')) {
    console.log('DEBUG render errors:', renderErrors.join(' || '));
    console.log('DEBUG html length:', container.innerHTML.length);
    console.log('DEBUG html head:', container.innerHTML.slice(0, 400));
  }
  const heroTitle = text($('.hero__title'));
  const cardCount = $$('.card').length;
  const statCount = $$('.stat').length;
  const serviceCount = $$('.service').length;
  const stepCount = $$('.step').length;
  const quoteCount = $$('.quote').length;
  const brokenImages = $$('img')
    .map((img) => img.getAttribute('src'))
    .filter((src) => !src || !src.startsWith('/img/'));

  // --- Filtr ---
  const bedroomBtn = $$('.filter').find((btn) => btn.textContent.includes('Yotoqxona'));
  await act(async () => {
    click(bedroomBtn);
    await wait(80);
  });
  const cardCountBedroom = $$('.card').length;

  // --- Lightbox ---
  await act(async () => {
    click($$('.card__media')[0]);
    await wait(60);
  });
  const lightboxTitle = text($('.lightbox__body .card__name'));
  await act(async () => {
    click($('.lightbox__close'));
    await wait(60);
  });
  const lightboxClosed = !$('.lightbox');

  // --- Sevimlilar ---
  await act(async () => {
    click($$('.card__like')[0]);
    await wait(60);
  });
  const favouriteSaved = (window.localStorage.getItem('mono-favourites') || '[]').includes('"');
  const favouriteRaw = window.localStorage.getItem('mono-favourites');

  // --- Tun rejimi ---
  await act(async () => {
    click($('.icon-btn'));
    await wait(60);
  });
  const themeAfterToggle = document.documentElement.getAttribute('data-theme');

  // --- Til ---
  const ruBtn = $$('.lang__btn').find((btn) => btn.textContent === 'RU');
  await act(async () => {
    click(ruBtn);
    await wait(80);
  });
  const ruNav = $$('.nav__link').map(text).join('|');

  const enBtn = $$('.lang__btn').find((btn) => btn.textContent === 'EN');
  await act(async () => {
    click(enBtn);
    await wait(80);
  });
  const enNav = $$('.nav__link').map(text).join('|');

  // --- Forma: bo'sh yuborish ---
  await act(async () => {
    $('.form').dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }));
    await wait(80);
  });
  const formErrors = $$('.field__err').length;

  // --- Forma: to'g'ri to'ldirish ---
  const setValue = (el, value) => {
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    setter.call(el, value);
    el.dispatchEvent(new window.Event('input', { bubbles: true }));
  };
  await act(async () => {
    setValue($('#name'), 'Aziza');
    setValue($('#phone'), '+998 90 123 45 67');
    await wait(40);
  });
  await act(async () => {
    $('.form').dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }));
    await wait(1100);
  });
  const formSuccess = Boolean($('.form__ok'));

  console.error = originalError;
  root.unmount();

  return {
    heroTitle,
    cardCount,
    cardCountBedroom,
    statCount,
    serviceCount,
    stepCount,
    quoteCount,
    brokenImages,
    lightboxTitle,
    lightboxClosed,
    favouriteSaved,
    favouriteRaw,
    themeAfterToggle,
    ruNav,
    enNav,
    formErrors,
    formSuccess,
    renderErrors
  };
}
