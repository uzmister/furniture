import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode
} from 'react';
import { DICT, type Copy, type Lang } from '../data/i18n';

export type Theme = 'light' | 'dark';

interface AppValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Copy;
  theme: Theme;
  toggleTheme: () => void;
  favourites: string[];
  toggleFavourite: (id: string) => void;
  notify: (message: string) => void;
}

const AppContext = createContext<AppValue | null>(null);

const LANG_KEY = 'mono-lang';
const THEME_KEY = 'mono-theme';
const FAV_KEY = 'mono-favourites';

const readStored = <T,>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

const detectLang = (): Lang => {
  try {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === 'uz' || stored === 'ru' || stored === 'en') return stored;
    // O'zbekiston auditoriyasi: rus tili brauzeri ruscha, qolganlar o'zbekcha ko'radi
    if (navigator.language.toLowerCase().startsWith('ru')) return 'ru';
  } catch {
    /* ignore */
  }
  return 'uz';
};

const detectTheme = (): Theme => {
  const attr = document.documentElement.getAttribute('data-theme');
  if (attr === 'dark' || attr === 'light') return attr;
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
  } catch {
    /* ignore */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);
  const [theme, setTheme] = useState<Theme>(detectTheme);
  const [favourites, setFavourites] = useState<string[]>(() => readStored<string[]>(FAV_KEY, []));
  const [toast, setToast] = useState<string | null>(null);
  const timer = useRef<number | null>(null);

  const notify = useCallback((message: string) => {
    setToast(message);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast(null), 2600);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.lang = lang;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#080e1c' : '#e8eeff');
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme, lang]);

  useEffect(() => {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  useEffect(() => {
    try {
      localStorage.setItem(FAV_KEY, JSON.stringify(favourites));
    } catch {
      /* ignore */
    }
  }, [favourites]);

  useEffect(() => () => void (timer.current && window.clearTimeout(timer.current)), []);

  const toggleTheme = useCallback(() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')), []);
  const setLang = useCallback((next: Lang) => setLangState(next), []);

  const toggleFavourite = useCallback(
    (id: string) => setFavourites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])),
    []
  );

  const value = useMemo<AppValue>(
    () => ({ lang, setLang, t: DICT[lang], theme, toggleTheme, favourites, toggleFavourite, notify }),
    [lang, setLang, theme, toggleTheme, favourites, toggleFavourite, notify]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
      <div className={`toast${toast ? ' is-on' : ''}`} role="status" aria-live="polite">
        <span className="toast__ic" aria-hidden>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 12.5l5 5 10-11" />
          </svg>
        </span>
        {toast ?? ''}
      </div>
    </AppContext.Provider>
  );
}

export function useApp(): AppValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp AppProvider ichida ishlatilishi kerak');
  return ctx;
}
