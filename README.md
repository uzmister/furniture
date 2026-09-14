# MONO Mebel — claymorphism mebel portfolio sayti

Zamonaviy mebel studiyasi uchun bir sahifali portfolio sayti. Dizayn uslubi —
**claymorphism** (yumshoq loy/plastilin shakllar, katta radiuclar, ichki va tashqi
yumshoq soyalar). Palitra — **to'q ko'k** va **och ko'k**, krem va mint aksentlari bilan.
**Kun va tun rejimi** mavjud, tanlov `localStorage`da saqlanadi.

## Texnologiyalar

| Qatlam | Tanlov |
| --- | --- |
| Build | Vite 5 |
| UI | React 18 + TypeScript (strict) |
| Uslublar | CSS o'zgaruvchilari (design tokens) + komponent CSS |
| Shriftlar | Nunito (sarlavhalar), Outfit (matn) |
| Test | jsdom + esbuild asosidagi `npm run smoke` |

## Ishga tushirish

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # dist/ ga production build
npm run preview    # buildni tekshirish
npm run smoke      # 15 ta avtomatik tekshiruv (jsdom)
```

## Sayt bo'limlari

1. **Hero** — blob fon ustidagi clay uslubidagi xona rasmi, suzuvchi chiplar, asosiy CTA.
2. **Statistika** — tajriba, loyihalar, ustaxona maydoni, kafolat.
3. **Portfolio** — 8 ta loyiha, kategoriya filtri (Hammasi / Yashash xonasi / Yotoqxona /
   Oshxona / Ofis), lightbox, «sevimlilar» tugmasi (`localStorage`ga saqlanadi).
4. **Xizmatlar** — loyihalash, ishlab chiqarish, yetkazish va montaj, kafolat.
5. **Jarayon** — 4 qadam, raqamlangan clay kartochkalar.
6. **Sharhlar** — 3 ta mijoz fikri (biri aksent rangda).
7. **Aloqa** — validatsiyali ariza formasi (ism va telefon tekshiriladi).
8. **Footer** — aloqa ma'lumotlari, ijtimoiy tarmoqlar, kolleksiyalar.

## Til va mavzu

- Tillar: **UZ / RU / EN** — yuqori o'ng burchakdagi almashtirgich. Barcha matnlar
  `src/data/i18n.ts` faylida bir joyda saqlanadi.
- Mavzu: quyosh/oy tugmasi `data-theme="light|dark"` atributini almashtiradi.
  Ranglar `src/styles/theme.css` dagi CSS o'zgaruvchilari orqali boshqariladi —
  yangi rang qo'shish uchun faqat shu faylni tahrirlash kifoya.

## Tuzilma

```
public/img/            claymorphism uslubidagi mebel rasmlari (1408×768)
src/
  components/          Nav, Hero, Portfolio, Services, Process, Reviews, Contact, Footer, Icons, Reveal
  data/                i18n.ts (uch til), projects.ts (portfolio kontenti)
  state/AppProvider.tsx  til, mavzu, sevimlilar va toast holati
  styles/theme.css     dizayn tokenlari + reset + clay soyalar
  styles/app.css       komponent uslublari
scripts/smoke.mjs      jsdom smoke test
```

## Nima ishlaydi

- Scroll-reveal animatsiyalar (IntersectionObserver), `prefers-reduced-motion` hurmat qilinadi.
- Portfolioda filtr, lightbox (Escape / fon bosish bilan yopiladi), sevimlilar.
- Forma validatsiyasi va muvaffaqiyat holati (demo — so'rovni backendga yubormaydi;
  `src/components/Contact.tsx` dagi `setTimeout` o'rniga `fetch('/api/lead')` qo'yish kifoya).
- To'liq javob beradigan (responsive) tarmoq: 1080 / 900 / 560 px nuqtalarida.
- A11y: klaviatura fokusi, `aria-*` atributlari, `lang` atributi til bilan yangilanadi.

## Keyingi qadamlar (ixtiyoriy)

- Formani Telegram bot yoki CRM'ga ulash (`Contact.tsx`).
- Rasmlarni `webp`/`avif` formatga o'tkazib, `srcset` qo'shish.
- Har bir loyiha uchun alohida sahifa (react-router) va real narx kalkulyatori.
