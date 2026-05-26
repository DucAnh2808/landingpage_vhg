"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import type { Locale } from "../[locale]/translations";

const LOCALES: Array<{ locale: Locale; flag: string; label: string }> = [
  { locale: "vi", flag: "/vn.svg", label: "Tiếng Việt" },
  { locale: "en", flag: "/en.svg", label: "English" },
  { locale: "zh", flag: "/tq.svg", label: "中文" },
];

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentHash = typeof window !== "undefined" ? window.location.hash : "";
  const qs = searchParams.toString();

  function hrefFor(target: Locale) {
    const segments = pathname.split("/").filter(Boolean);
    // Replace first segment (locale) if present
    if (segments.length > 0) segments[0] = target;
    const nextPath = `/${segments.join("/")}`;
    return `${nextPath}${qs ? `?${qs}` : ""}${currentHash}`;
  }

  return (
    <div className="flex shrink-0 items-center gap-0.5 rounded-full border border-vhg-border bg-white px-1 py-0.5 sm:gap-1 sm:px-1.5 sm:py-1">
      {LOCALES.map((l) => {
        const active = l.locale === locale;
        return (
          <Link
            key={l.locale}
            href={hrefFor(l.locale)}
            title={l.label}
            aria-label={l.label}
            className={`rounded-full p-1 transition-colors sm:p-1.5 ${
              active
                ? "bg-vhg-yellow ring-2 ring-vhg-yellow/60"
                : "opacity-70 hover:bg-vhg-yellow/15 hover:opacity-100"
            }`}
            aria-current={active ? "page" : undefined}
          >
            <Image
              src={l.flag}
              alt={l.label}
              width={24}
              height={18}
              className="h-4 w-5 rounded-sm object-cover sm:h-[18px] sm:w-6"
              unoptimized
            />
          </Link>
        );
      })}
    </div>
  );
}

