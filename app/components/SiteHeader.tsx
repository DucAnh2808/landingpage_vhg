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
    <header className="sticky top-0 z-50 border-b border-vhg-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="#" className="flex shrink-0 items-center gap-3">
          <Image
            src="/logo.png"
            alt={COMPANY.name}
            width={140}
            height={48}
            className="h-10 w-auto sm:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-vhg-muted md:flex">
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
            className="hidden text-sm font-semibold text-vhg-yellow sm:block"
          >
            {COMPANY.hotline}
          </a>
          <a
            href="#dang-ky"
            className="rounded-full bg-vhg-yellow px-4 py-2 text-sm font-bold text-vhg-charcoal transition-colors hover:bg-[var(--vhg-yellow-hover)]"
          >
            Tư vấn ngay
          </a>
        </div>
      </div>
    </header>
  );
}
