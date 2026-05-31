import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COMPANY } from "@/lib/constants";
import { getDictionary, hasLocale, LOCALES } from "./translations";

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

type LayoutProps = {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const title = `${COMPANY.name} | ${dict.hero.titlePrefix} ${dict.hero.titleEmphasis} ${dict.hero.titleSuffix}`.replace(
    /\s+/g,
    " ",
  );

  return {
    title,
    description: dict.hero.description,
    verification: {
      other: {
        "facebook-domain-verification": "nzun0bnhnx5vp4y0q7qsi0wqokgrsd",
      },
    },
    icons: {
      icon: [{ url: "/logo.png" }],
      apple: [{ url: "/logo.png" }],
    },
    openGraph: {
      title,
      description: dict.hero.description,
      url: COMPANY.website,
    },
  };
}

export default function LocaleLayout({ children }: LayoutProps) {
  return children;
}

