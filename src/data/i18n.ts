export type Lang = 'uz' | 'ru' | 'en';

export const LANGS: { id: Lang; label: string }[] = [
  { id: 'uz', label: 'UZ' },
  { id: 'ru', label: 'RU' },
  { id: 'en', label: 'EN' }
];

const uz = {
  nav: {
    portfolio: 'Portfolio',
    services: 'Xizmatlar',
    process: 'Jarayon',
    reviews: 'Sharhlar',
    contact: 'Aloqa',
    cta: 'Bepul maslahat'
  },
  hero: {
    badge: '2 ta yangi loyiha uchun joy bor',
    titleTop: 'Uyingiz uchun',
    titleEm: 'yumshoq',
    titleBottom: 'shakldagi mebel',
    lead:
      "Biz mebelni qolipga solmaymiz — har bir burchakni qo'lda o'lchab, xarakteringizga moslab yasaymiz. To'q ko'k va och ko'k palitra, ipak mato va tabiiy yog'och.",
    ctaPrimary: 'Portfolioni ko‘rish',
    ctaSecondary: '3D loyiha so‘rash',
    fact1: 'yillik tajriba',
    fact2: 'yakunlangan loyiha',
    fact3: 'mijoz mamnuniyati',
    chipMade: 'Qo‘lda yasalgan',
    chipDays: 'kunda tayyor',
    imgAlt: 'Clay uslubidagi yashash xonasi — ko‘k divan, chiroq va monstera o‘simligi'
  },
  stats: {
    title: 'Raqamlardagi studiya',
    text: 'Ustaxonamiz Toshkentdagi 1200 m² maydonda joylashgan: to‘liq sikl — eskizdan yuk mashinasigacha.',
    s1: 'Yillik tajriba',
    s2: 'Loyiha topshirilgan',
    s3: 'Kvadrat metr ustaxona',
    s4: 'Kafolat yili'
  },
  portfolio: {
    eyebrow: 'Ishlarimiz',
    title: 'Har bir loyiha — alohida hikoya',
    text: 'Kolleksiyalarimizdan tanlang yoki o‘zingizning g‘oyangizni keltiring: biz uni chizamiz, material tanlaymiz va ishlab chiqaramiz.',
    all: 'Hammasi',
    living: 'Yashash xonasi',
    bedroom: 'Yotoqxona',
    kitchen: 'Oshxona',
    office: 'Ofis',
    zoom: 'Rasmni kattalashtirish',
    like: 'Sevimlilarga qo‘shish',
    saved: 'Sevimlilarga qo‘shildi',
    removed: 'Sevimlilardan olindi',
    detail: 'Loyihani ko‘rish',
    empty: 'Bu bo‘limda hozircha loyiha yo‘q.'
  },
  services: {
    eyebrow: 'Xizmatlar',
    title: 'Eskizdan montajgacha — bir qo‘l ostida',
    text: 'Har bir bosqichni o‘z ustaxonamizda bajaramiz, shuning uchun muddat va sifat uchun biz javob beramiz.',
    s1t: 'Individual loyiha',
    s1d: 'Xonangizni o‘lchaymiz, 3D vizualizatsiya va aniq chizmalar tayyorlaymiz. Reja o‘zgarguncha — bepul.',
    s2t: 'Ustaxonada ishlab chiqarish',
    s2d: 'CNC dastgohlari, qo‘lda sayqallash va ekologik lak. Har bir detal nazoratdan o‘tadi.',
    s3t: 'Yetkazib berish va montaj',
    s3d: 'O‘zimizning jamoamiz mebelni joyiga olib boradi, yig‘adi va chiqindini olib ketadi.',
    s4t: 'Kafolat va servis',
    s4d: '5 yil kafolat. Qopqoqni almashtirish yoki ta’mirlash — bir qo‘ng‘iroq bilan.'
  },
  process: {
    eyebrow: 'Jarayon',
    title: 'To‘rt qadam, nol stress',
    text: 'Bizda hamma narsa jadval bo‘yicha ketadi: siz har hafta hisobot olasiz, kutilmagan xarajat bo‘lmaydi.',
    p1t: 'Tanishuv va o‘lchov',
    p1d: 'Uyda yoki showroomda uchrashamiz, o‘lchov olamiz, byudjetni aniqlaymiz. 45 daqiqa.',
    p2t: 'Dizayn va smeta',
    p2d: '3D model, material namunalari va qat’iy narx. 3–5 ish kuni.',
    p3t: 'Ishlab chiqarish',
    p3d: 'Ustaxonada tayyorlanadi, har bosqichda foto-hisobot yuboramiz. 3–6 hafta.',
    p4t: 'Montaj va topshirish',
    p4d: 'Yetkazamiz, yig‘amiz, tozalaymiz va kafolat talonini beramiz. 1 kun.'
  },
  reviews: {
    eyebrow: 'Sharhlar',
    title: 'Mijozlar nima deydi',
    text: 'Instagram, Telegram va Google’dagi haqiqiy sharhlardan tanlab oldik.',
    r1: 'Uch oyda butun kvartirani jihozladik. Divan va oshxona stoli alohida ajralib turadi — mehmonlar “qayerdan oldingiz?” deb so‘raydi.',
    r2: 'Eskizni 4 marta o‘zgartirdim, jamoaning sabri cheksiz ekan. Natija kutganimdan ham yaxshi chiqdi.',
    r3: 'Ofisimiz uchun 22 ta stul va 6 ta stol tiklandi. Muddatga to‘liq rioya qilindi, narx ham oldindan aytilganidek.',
    r1n: 'Dilnoza Karimova',
    r1r: 'Yunusobod, 96 m² kvartira',
    r2n: 'Sardor Ergashev',
    r2r: 'Interyer dizayneri',
    r3n: 'Aziza Yusupova',
    r3r: 'Bloom Studio, ofis menejeri'
  },
  cta: {
    title: 'Keling, uyingizni yumshoqroq qilamiz',
    text: 'Formani to‘ldiring — 24 soat ichida bog‘lanamiz, o‘lchov va maslahat bepul.',
    l1: 'Bepul o‘lchov va 3D eskiz',
    l2: 'Qat’iy narx, yashirin to‘lovlar yo‘q',
    l3: '5 yil kafolat va servis',
    name: 'Ismingiz',
    namePh: 'Masalan: Aziza',
    phone: 'Telefon',
    phonePh: '+998 90 123 45 67',
    object: 'Obyekt turi',
    o1: 'Kvartira',
    o2: 'Uy / dacha',
    o3: 'Ofis / kafe',
    msg: 'Qisqa izoh',
    msgPh: 'Qaysi xona, qanday uslub, muddat…',
    submit: 'Ariza yuborish',
    sending: 'Yuborilyapti…',
    ok: 'Rahmat! Arizangiz qabul qilindi — tez orada qo‘ng‘iroq qilamiz.',
    note: 'Ma’lumotlaringiz uchinchi shaxslarga berilmaydi.',
    errName: 'Ismingizni kiriting',
    errPhone: 'To‘g‘ri telefon raqam kiriting'
  },
  footer: {
    about:
      'MONO Mebel — Toshkentdagi mebel studiyasi. 2013-yildan buyon individual loyihalar, yumshoq mebel va oshxona jihozlari bilan shug‘ullanamiz.',
    nav: 'Bo‘limlar',
    cats: 'Kolleksiyalar',
    contact: 'Aloqa',
    addr: 'Toshkent, Bo‘stonliq tumani, Ustaxona ko‘chasi 14',
    hours: 'Du–Sha, 9:00–19:00',
    rights: 'Barcha huquqlar himoyalangan.',
    made: 'Claymorphism uslubida mehr bilan yasaldi'
  },
  theme: { toDark: 'Tun rejimini yoqish', toLight: 'Kun rejimini yoqish' },
  menu: 'Menyu'
};

const ru: typeof uz = {
  nav: {
    portfolio: 'Портфолио',
    services: 'Услуги',
    process: 'Процесс',
    reviews: 'Отзывы',
    contact: 'Контакты',
    cta: 'Бесплатная консультация'
  },
  hero: {
    badge: 'Есть место для 2 новых проектов',
    titleTop: 'Мягкая по форме',
    titleEm: 'мебель',
    titleBottom: 'для вашего дома',
    lead:
      'Мы не работаем по шаблону — каждый угол снимаем вручную и подгоняем под ваш характер. Тёмно-синяя и светло-голубая палитра, шёлковая ткань и натуральное дерево.',
    ctaPrimary: 'Смотреть портфолио',
    ctaSecondary: 'Заказать 3D-проект',
    fact1: 'года опыта',
    fact2: 'завершённых проектов',
    fact3: 'довольных клиентов',
    chipMade: 'Ручная работа',
    chipDays: 'дней до готовности',
    imgAlt: 'Гостиная в clay-стиле — синий диван, торшер и монстера'
  },
  stats: {
    title: 'Студия в цифрах',
    text: 'Наш цех площадью 1200 м² находится в Ташкенте: полный цикл — от эскиза до доставки.',
    s1: 'Лет опыта',
    s2: 'Сданных проектов',
    s3: 'Квадратных метров цеха',
    s4: 'Лет гарантии'
  },
  portfolio: {
    eyebrow: 'Наши работы',
    title: 'Каждый проект — отдельная история',
    text: 'Выберите из наших коллекций или принесите свою идею: мы нарисуем, подберём материалы и изготовим.',
    all: 'Все',
    living: 'Гостиная',
    bedroom: 'Спальня',
    kitchen: 'Кухня',
    office: 'Офис',
    zoom: 'Увеличить изображение',
    like: 'В избранное',
    saved: 'Добавлено в избранное',
    removed: 'Удалено из избранного',
    detail: 'Смотреть проект',
    empty: 'В этом разделе пока нет проектов.'
  },
  services: {
    eyebrow: 'Услуги',
    title: 'От эскиза до монтажа — в одних руках',
    text: 'Каждый этап выполняем в своём цехе, поэтому за сроки и качество отвечаем мы.',
    s1t: 'Индивидуальный проект',
    s1d: 'Замеряем помещение, готовим 3D-визуализацию и точные чертежи. Правки — бесплатно.',
    s2t: 'Производство в цехе',
    s2d: 'Станки ЧПУ, ручная шлифовка и экологичный лак. Каждая деталь под контролем.',
    s3t: 'Доставка и монтаж',
    s3d: 'Наша команда привозит, собирает мебель и вывозит упаковку.',
    s4t: 'Гарантия и сервис',
    s4d: '5 лет гарантии. Замена обивки или ремонт — по одному звонку.'
  },
  process: {
    eyebrow: 'Процесс',
    title: 'Четыре шага, ноль стресса',
    text: 'Всё идёт по графику: вы получаете отчёт каждую неделю, скрытых платежей нет.',
    p1t: 'Знакомство и замер',
    p1d: 'Встречаемся у вас или в шоуруме, снимаем размеры, обсуждаем бюджет. 45 минут.',
    p2t: 'Дизайн и смета',
    p2d: '3D-модель, образцы материалов и фиксированная цена. 3–5 рабочих дней.',
    p3t: 'Производство',
    p3d: 'Изготавливаем в цехе, на каждом этапе отправляем фотоотчёт. 3–6 недель.',
    p4t: 'Монтаж и сдача',
    p4d: 'Доставляем, собираем, убираем и выдаём гарантийный талон. 1 день.'
  },
  reviews: {
    eyebrow: 'Отзывы',
    title: 'Что говорят клиенты',
    text: 'Выбрали реальные отзывы из Instagram, Telegram и Google.',
    r1: 'За три месяца обставили всю квартиру. Диван и кухонный стол — отдельная любовь, гости спрашивают, где мы их взяли.',
    r2: 'Переделывал эскиз 4 раза, у команды бесконечное терпение. Результат превзошёл ожидания.',
    r3: 'Для офиса изготовили 22 стула и 6 столов. Сроки соблюдены, цена как и обещали.',
    r1n: 'Дильноза Каримова',
    r1r: 'Юнусабад, квартира 96 м²',
    r2n: 'Сардор Эргашев',
    r2r: 'Дизайнер интерьера',
    r3n: 'Азиза Юсупова',
    r3r: 'Bloom Studio, офис-менеджер'
  },
  cta: {
    title: 'Сделаем ваш дом мягче',
    text: 'Заполните форму — свяжемся в течение 24 часов, замер и консультация бесплатны.',
    l1: 'Бесплатный замер и 3D-эскиз',
    l2: 'Фиксированная цена, без скрытых платежей',
    l3: '5 лет гарантии и сервис',
    name: 'Ваше имя',
    namePh: 'Например: Азиза',
    phone: 'Телефон',
    phonePh: '+998 90 123 45 67',
    object: 'Тип объекта',
    o1: 'Квартира',
    o2: 'Дом / дача',
    o3: 'Офис / кафе',
    msg: 'Короткий комментарий',
    msgPh: 'Какая комната, стиль, сроки…',
    submit: 'Отправить заявку',
    sending: 'Отправляем…',
    ok: 'Спасибо! Заявка принята — скоро позвоним.',
    note: 'Ваши данные не передаются третьим лицам.',
    errName: 'Введите имя',
    errPhone: 'Введите корректный номер телефона'
  },
  footer: {
    about:
      'MONO Mebel — мебельная студия в Ташкенте. С 2013 года делаем индивидуальные проекты, мягкую мебель и кухни.',
    nav: 'Разделы',
    cats: 'Коллекции',
    contact: 'Контакты',
    addr: 'Ташкент, Бостанлыкский район, ул. Устахона 14',
    hours: 'Пн–Сб, 9:00–19:00',
    rights: 'Все права защищены.',
    made: 'Сделано с любовью в стиле claymorphism'
  },
  theme: { toDark: 'Включить тёмную тему', toLight: 'Включить светлую тему' },
  menu: 'Меню'
};

const en: typeof uz = {
  nav: {
    portfolio: 'Portfolio',
    services: 'Services',
    process: 'Process',
    reviews: 'Reviews',
    contact: 'Contact',
    cta: 'Free consultation'
  },
  hero: {
    badge: 'Two slots left this month',
    titleTop: 'Softly shaped',
    titleEm: 'furniture',
    titleBottom: 'for your home',
    lead:
      'No templates here — we measure every corner by hand and shape it around your character. Deep navy and light blue palette, silk fabric and natural wood.',
    ctaPrimary: 'Browse portfolio',
    ctaSecondary: 'Request a 3D plan',
    fact1: 'years of craft',
    fact2: 'projects delivered',
    fact3: 'client satisfaction',
    chipMade: 'Handmade',
    chipDays: 'days to deliver',
    imgAlt: 'Clay style living room with a blue sofa, floor lamp and monstera plant'
  },
  stats: {
    title: 'The studio in numbers',
    text: 'Our 1200 m² workshop sits in Tashkent: full cycle, from the first sketch to the delivery truck.',
    s1: 'Years of experience',
    s2: 'Delivered projects',
    s3: 'Square meters of workshop',
    s4: 'Years of warranty'
  },
  portfolio: {
    eyebrow: 'Our work',
    title: 'Every project is its own story',
    text: 'Pick from our collections or bring your own idea: we draw it, choose the materials and build it.',
    all: 'All',
    living: 'Living room',
    bedroom: 'Bedroom',
    kitchen: 'Kitchen',
    office: 'Office',
    zoom: 'Zoom image',
    like: 'Add to favourites',
    saved: 'Added to favourites',
    removed: 'Removed from favourites',
    detail: 'View project',
    empty: 'No projects in this section yet.'
  },
  services: {
    eyebrow: 'Services',
    title: 'From sketch to installation — all in-house',
    text: 'Every stage runs inside our own workshop, so we own the deadline and the quality.',
    s1t: 'Bespoke design',
    s1d: 'We measure your room and deliver a 3D visual with precise drawings. Revisions are free.',
    s2t: 'Workshop production',
    s2d: 'CNC machines, hand sanding and eco-friendly lacquer. Every part is checked.',
    s3t: 'Delivery and installation',
    s3d: 'Our own crew brings the furniture, assembles it and takes the packaging away.',
    s4t: 'Warranty and service',
    s4d: '5-year warranty. Re-upholstery or repair — one phone call away.'
  },
  process: {
    eyebrow: 'Process',
    title: 'Four steps, zero stress',
    text: 'Everything follows a schedule: you get a weekly report and there are no surprise costs.',
    p1t: 'Meeting and measuring',
    p1d: 'We meet at your place or in the showroom, take measurements, agree the budget. 45 minutes.',
    p2t: 'Design and quote',
    p2d: '3D model, material samples and a fixed price. 3–5 working days.',
    p3t: 'Production',
    p3d: 'Built in our workshop with photo reports at every stage. 3–6 weeks.',
    p4t: 'Installation and handover',
    p4d: 'We deliver, assemble, clean up and hand over the warranty card. 1 day.'
  },
  reviews: {
    eyebrow: 'Reviews',
    title: 'What clients say',
    text: 'Hand-picked real reviews from Instagram, Telegram and Google.',
    r1: 'We furnished the whole flat in three months. The sofa and the dining table stand out — guests keep asking where we got them.',
    r2: 'I redrew the sketch four times and the team never lost patience. The result beat my expectations.',
    r3: 'They made 22 chairs and 6 desks for our office. Deadlines kept, price exactly as quoted.',
    r1n: 'Dilnoza Karimova',
    r1r: 'Yunusabad, 96 m² apartment',
    r2n: 'Sardor Ergashev',
    r2r: 'Interior designer',
    r3n: 'Aziza Yusupova',
    r3r: 'Bloom Studio, office manager'
  },
  cta: {
    title: "Let's make your home softer",
    text: 'Fill in the form — we reply within 24 hours. Measuring and advice are free.',
    l1: 'Free measuring and 3D sketch',
    l2: 'Fixed price, no hidden fees',
    l3: '5-year warranty and service',
    name: 'Your name',
    namePh: 'e.g. Aziza',
    phone: 'Phone',
    phonePh: '+998 90 123 45 67',
    object: 'Property type',
    o1: 'Apartment',
    o2: 'House / cottage',
    o3: 'Office / cafe',
    msg: 'Short note',
    msgPh: 'Which room, style, timeline…',
    submit: 'Send request',
    sending: 'Sending…',
    ok: 'Thank you! Request received — we will call you shortly.',
    note: 'Your details are never shared with third parties.',
    errName: 'Please enter your name',
    errPhone: 'Please enter a valid phone number'
  },
  footer: {
    about:
      'MONO Mebel is a furniture studio in Tashkent. Since 2013 we have built bespoke projects, upholstered furniture and kitchens.',
    nav: 'Sections',
    cats: 'Collections',
    contact: 'Contact',
    addr: '14 Ustaxona street, Bostanlyk district, Tashkent',
    hours: 'Mon–Sat, 9:00–19:00',
    rights: 'All rights reserved.',
    made: 'Made with love in claymorphism style'
  },
  theme: { toDark: 'Switch to dark mode', toLight: 'Switch to light mode' },
  menu: 'Menu'
};

export const DICT: Record<Lang, typeof uz> = { uz, ru, en };
export type Copy = typeof uz;
