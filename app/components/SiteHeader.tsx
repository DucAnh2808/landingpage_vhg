import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const nav = [
  { href: "#dich-vu", label: "Dịch vụ" },
  { href: "#ve-chung-toi", label: "Về chúng tôi" },
  { href: "#dang-ky", label: "Đăng ký tư vấn" },
];

export function SiteHeader() {
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

        <div className="flex items-center gap-3">
          <a
            href={COMPANY.hotlineHref}
            className="hidden text-base font-semibold text-vhg-charcoal sm:block"
          >
            {COMPANY.hotline}
          </a>
          <a
            href="#dang-ky"
            className="rounded-full bg-vhg-yellow px-5 py-2.5 text-base font-bold text-vhg-charcoal transition-colors hover:bg-[var(--vhg-yellow-hover)]"
          >
            Tư vấn ngay
          </a>
        </div>
      </div>
    </header>
  );
}
