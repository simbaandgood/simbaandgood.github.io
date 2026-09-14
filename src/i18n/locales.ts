export const defaultLocale = 'en';

export const locales = {
  en: { label: 'English', htmlLang: 'en' },
  es: { label: 'Español', htmlLang: 'es' },
  pt: { label: 'Português', htmlLang: 'pt' },
  th: { label: 'ไทย', htmlLang: 'th' },
  de: { label: 'Deutsch', htmlLang: 'de' },
  fr: { label: 'Français', htmlLang: 'fr' },
  it: { label: 'Italiano', htmlLang: 'it' },
} as const;

export type Locale = keyof typeof locales;

// Locale-specific font pairing. Fraunces + Inter cover Latin/Latin-Extended
// (en, es, pt, de, fr, it) but have no Thai glyphs, so `th` gets its own pairing.
export function fontsFor(locale: string) {
  if (locale === 'th') {
    return {
      heading: '"Taviraj", Georgia, serif',
      body: '"Sarabun", system-ui, sans-serif',
      headingLineHeight: '1.35',
      googleFontsParam: 'family=Taviraj:wght@400;500;600&family=Sarabun:wght@400;500;600',
    };
  }
  return {
    heading: '"Fraunces", Georgia, serif',
    body: '"Inter", system-ui, sans-serif',
    headingLineHeight: '1.08',
    googleFontsParam:
      'family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600',
  };
}

// Given a path like "/for-brands" and a target locale, returns the localized
// path (e.g. "/es/for-brands", or "/for-brands" for the default locale).
export function localizedPath(path: string, locale: string): string {
  const clean = path === '/' ? '' : path;
  if (locale === defaultLocale) return clean || '/';
  return `/${locale}${clean}`;
}

// Pages that exist in all 7 locales. Legal pages (privacy/terms), the 404
// page, and individual story posts are English-only for now, so the language
// switcher falls back to the homepage on those rather than a broken link.
export const translatedPaths = [
  '/', '/for-brands', '/for-venues', '/welfare-plan', '/shop', '/seasons', '/contact', '/stories',
];

// Path to switch to when changing locale: the same page if it has
// translations, otherwise that locale's homepage.
export function switchLocalePath(currentPath: string, targetLocale: string): string {
  const base = translatedPaths.includes(currentPath) ? currentPath : '/';
  return localizedPath(base, targetLocale);
}
