import type { Lang } from './i18n';

export type Category = 'living' | 'bedroom' | 'kitchen' | 'office';

export interface Project {
  id: string;
  img: string;
  cat: Category;
  price: string;
  year: string;
  size: string;
  name: Record<Lang, string>;
  desc: Record<Lang, string>;
  tags: Record<Lang, string[]>;
}

export const CATEGORIES: Category[] = ['living', 'bedroom', 'kitchen', 'office'];

export const PROJECTS: Project[] = [
  {
    id: 'aurora',
    img: '/img/work-aurora-sofa.jpg',
    cat: 'living',
    price: '18 400 000',
    year: '2025',
    size: '314 × 168 sm',
    name: {
      uz: 'Aurora burchakli divan',
      ru: 'Угловой диван Aurora',
      en: 'Aurora sectional sofa'
    },
    desc: {
      uz: 'Modul asosidagi burchakli divan: to‘q ko‘k va och ko‘k modullar bir-biriga erkin ulanadi. Yechib olinadigan qopqoq, yumshoq “bulut” o‘rindiqlar.',
      ru: 'Модульный угловой диван: тёмно-синие и голубые модули соединяются свободно. Съёмные чехлы и мягкие «облачные» сиденья.',
      en: 'A modular sectional: navy and light blue modules click together freely, with removable covers and cloud-soft seats.'
    },
    tags: {
      uz: ['Ipak mikrofayber', 'Eman', 'Yechiladigan qopqoq'],
      ru: ['Микрофибра-шёлк', 'Дуб', 'Съёмный чехол'],
      en: ['Silk microfibre', 'Oak', 'Removable cover']
    }
  },
  {
    id: 'nimbus',
    img: '/img/work-nimbus-armchair.jpg',
    cat: 'living',
    price: '6 900 000',
    year: '2025',
    size: '92 × 88 × 78 sm',
    name: { uz: 'Nimbus kreslosi', ru: 'Кресло Nimbus', en: 'Nimbus lounge chair' },
    desc: {
      uz: 'Kun bo‘yi kitob o‘qish uchun yumaloq kreslo. Orqa qismi anatomik egri, o‘rindiq esa ko‘pikning uch qatlamidan yig‘ilgan.',
      ru: 'Округлое кресло для долгого чтения. Анатомическая спинка и сиденье из трёх слоёв пены.',
      en: 'A rounded chair built for long reading sessions, with an anatomical back and a three-layer foam seat.'
    },
    tags: {
      uz: ['Velür', 'Ko‘p qatlamli ko‘pik', 'Mato: 40 rang'],
      ru: ['Велюр', 'Многослойная пена', 'Ткань: 40 цветов'],
      en: ['Velvet', 'Layered foam', 'Fabric: 40 colours']
    }
  },
  {
    id: 'luna',
    img: '/img/work-luna-bed.jpg',
    cat: 'bedroom',
    price: '24 500 000',
    year: '2024',
    size: '180 × 200 sm',
    name: { uz: 'Luna yotoqxona to‘plami', ru: 'Комплект Luna для спальни', en: 'Luna bedroom set' },
    desc: {
      uz: 'Baland yumshoq bosh tomoni va ikkita tungi tumba. To‘plamga ortopedik asos va ichki saqlash qutisi kiradi.',
      ru: 'Высокое мягкое изголовье и две прикроватные тумбы. В комплекте ортопедическое основание и ящик для хранения.',
      en: 'A tall upholstered headboard with two nightstands. The set includes an orthopaedic base and a storage box.'
    },
    tags: {
      uz: ['To‘q ko‘k shinil', 'Saqlash qutisi', 'Ortopedik asos'],
      ru: ['Тёмно-синий шенилл', 'Ящик для хранения', 'Ортопедическое основание'],
      en: ['Navy chenille', 'Storage box', 'Orthopaedic base']
    }
  },
  {
    id: 'terra',
    img: '/img/work-terra-dining.jpg',
    cat: 'kitchen',
    price: '16 200 000',
    year: '2024',
    size: 'Ø 130 sm + 4 stul',
    name: { uz: 'Terra ovqat stoli', ru: 'Обеденный стол Terra', en: 'Terra dining table' },
    desc: {
      uz: 'Dumaloq stol va to‘rt stul — kichik oshxona uchun ideal. Ustki qismi namlikka chidamli tabiiy shpon bilan qoplangan.',
      ru: 'Круглый стол и четыре стула — идеально для небольшой кухни. Столешница покрыта влагостойким натуральным шпоном.',
      en: 'A round table with four chairs, ideal for a compact kitchen. The top is finished with moisture-resistant natural veneer.'
    },
    tags: {
      uz: ['Tabiiy shpon', 'Namlikka chidamli', 'Yumaloq qirralar'],
      ru: ['Натуральный шпон', 'Влагостойкий', 'Скруглённые кромки'],
      en: ['Natural veneer', 'Moisture resistant', 'Rounded edges']
    }
  },
  {
    id: 'vega',
    img: '/img/work-vega-wardrobe.jpg',
    cat: 'bedroom',
    price: '21 800 000',
    year: '2024',
    size: '240 × 62 × 230 sm',
    name: { uz: 'Vega shkafi', ru: 'Шкаф Vega', en: 'Vega wardrobe' },
    desc: {
      uz: 'Uch eshikli, yumaloq qirrali shkaf. Ichida shtanga, tortmalar va poyabzal uchun modul bor — hammasi yumshoq yopiladi.',
      ru: 'Трёхдверный шкаф со скруглёнными кромками. Внутри штанга, ящики и модуль для обуви — всё закрывается мягко.',
      en: 'A three-door wardrobe with rounded edges. Inside: a rail, drawers and a shoe module — everything closes softly.'
    },
    tags: {
      uz: ['MDF lak', 'Push-to-open', 'Ichki yoritish'],
      ru: ['МДФ лак', 'Push-to-open', 'Внутренняя подсветка'],
      en: ['Lacquered MDF', 'Push-to-open', 'Inner lighting']
    }
  },
  {
    id: 'orbit',
    img: '/img/work-orbit-tables.jpg',
    cat: 'living',
    price: '5 400 000',
    year: '2025',
    size: 'Ø 92 / 62 / 44 sm',
    name: { uz: 'Orbit jurnal stollari', ru: 'Журнальные столики Orbit', en: 'Orbit coffee tables' },
    desc: {
      uz: 'Uchta stol bir-birining ichiga kiradi — kerak bo‘lmaganda joy egallamaydi. Ustida mat krem lak.',
      ru: 'Три столика вкладываются друг в друга — когда не нужны, места не занимают. Матовый кремовый лак.',
      en: 'Three tables nest into each other and disappear when unused. Finished in matte cream lacquer.'
    },
    tags: {
      uz: ['Uchta o‘lcham', 'Ichma-ich yig‘iladi', 'Mat lak'],
      ru: ['Три размера', 'Вкладываются', 'Матовый лак'],
      en: ['Three sizes', 'Nesting set', 'Matte lacquer']
    }
  },
  {
    id: 'cove',
    img: '/img/work-cove-office.jpg',
    cat: 'office',
    price: '12 700 000',
    year: '2025',
    size: '160 × 70 sm',
    name: { uz: 'Cove ish stoli', ru: 'Рабочий стол Cove', en: 'Cove desk setup' },
    desc: {
      uz: 'Uydagi ish burchagi: kabel kanali yashiringan stol, ergonomik kreslo va devor tokchasi bir to‘plamda.',
      ru: 'Домашний рабочий уголок: стол со скрытым кабель-каналом, эргономичное кресло и настенная полка в комплекте.',
      en: 'A home-office corner: a desk with a hidden cable channel, an ergonomic chair and a wall shelf in one set.'
    },
    tags: {
      uz: ['Kabel kanali', 'Ergonomik', 'To‘plam'],
      ru: ['Кабель-канал', 'Эргономика', 'Комплект'],
      en: ['Cable channel', 'Ergonomic', 'Full set']
    }
  },
  {
    id: 'mono',
    img: '/img/hero-living-room.jpg',
    cat: 'living',
    price: '34 000 000',
    year: '2025',
    size: '42 m² xona',
    name: { uz: 'Mono Living — to‘liq jihoz', ru: 'Mono Living — полный комплект', en: 'Mono Living — full room' },
    desc: {
      uz: 'Bitta xona uchun to‘liq yechim: divan, chiroq, gilam, jurnal stoli va o‘simlik uchun tuvak — o‘zaro uyg‘un palitrada.',
      ru: 'Полное решение для одной комнаты: диван, торшер, ковёр, журнальный стол и кашпо — в единой палитре.',
      en: 'A complete single-room solution: sofa, floor lamp, rug, coffee table and planter — all in one palette.'
    },
    tags: {
      uz: ['To‘liq interyer', 'Gilam + o‘simlik', 'Yagona palitra'],
      ru: ['Целый интерьер', 'Ковёр + растение', 'Единая палитра'],
      en: ['Full interior', 'Rug + plant', 'One palette']
    }
  }
];
