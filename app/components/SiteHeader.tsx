import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Dictionary, Locale } from "../[locale]/translations";

export function SiteHeader({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const nav = [
    { href: "#dich-vu", label: dict.nav.services },
    { href: "#ve-chung-toi", label: dict.nav.about },
    { href: "#dang-ky", label: dict.nav.consultation },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex h-30 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[5.5rem] sm:px-6">
        <Link href="#" className="flex shrink-0 items-center gap-3">
          <Image
            src={`${COMPANY.logoSrc}?v=${COMPANY.logoVersion}`}
            alt={COMPANY.name}
            width={225}
            height={225}
            className="h-14 w-auto sm:h-16"
            priority
            unoptimized
          />
        </Link>

        <nav className="hidden items-center gap-8 text-base font-medium text-vhg-charcoal/80 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-vhg-yellow"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageSwitcher locale={locale} />
          <a
            href={COMPANY.hotlineHref}
            className="hidden text-base font-semibold text-vhg-charcoal sm:block"
          >
            {COMPANY.hotline}
          </a>
          <a
            href="#dang-ky"
            className="rounded-full bg-vhg-yellow px-3 py-2 text-sm font-bold text-vhg-charcoal transition-colors hover:bg-[var(--vhg-yellow-hover)] sm:px-5 sm:py-2.5 sm:text-base"
          >
            {dict.header.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
