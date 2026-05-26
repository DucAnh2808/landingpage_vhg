import "server-only";
import vi from "./translations/vi.json";

export const LOCALES = ["vi", "en", "zh"] as const;
export type Locale = (typeof LOCALES)[number];

export const hasLocale = (locale: string): locale is Locale =>
  (LOCALES as readonly string[]).includes(locale);

const dictionaries = {
  vi: () => import("./translations/vi.json").then((m) => m.default),
  en: () => import("./translations/en.json").then((m) => m.default),
  zh: () => import("./translations/zh.json").then((m) => m.default),
} satisfies Record<Locale, () => Promise<typeof vi>>;

export type Dictionary = typeof vi;

export async function getDictionary(locale: Locale) {
  return await dictionaries[locale]();
}

