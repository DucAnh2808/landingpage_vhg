import Image from "next/image";
import Link from "next/link";
import { COMPANY, OFFICES } from "@/lib/constants";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-vhg-charcoal py-12 text-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Image
              src={`${COMPANY.logoSrc}?v=${COMPANY.logoVersion}`}
              alt={COMPANY.name}
              width={225}
              height={225}
              className="h-9 w-auto"
              unoptimized
            />
            <p className="mt-3 max-w-xs text-vhg-muted">
              {COMPANY.legalName} — giải pháp Fulfillment, tổng kho phía Bắc
              Việt Nam.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href={COMPANY.hotlineHref}
              className="font-bold text-vhg-yellow hover:underline"
            >
              Hotline: {COMPANY.hotline}
            </a>
            <a
              href={COMPANY.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-vhg-muted transition-colors hover:text-foreground"
            >
              {COMPANY.website.replace(/^https?:\/\//, "")}
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {OFFICES.map((office) => (
            <div key={office.name}>
              <h3 className="font-bold text-vhg-yellow">{office.name}</h3>
              <p className="mt-2 leading-relaxed text-vhg-muted">
                {office.address}
              </p>
              <p className="mt-1 text-vhg-muted">
                Hotline:{" "}
                <a
                  href={office.hotlineHref}
                  className="text-foreground hover:text-vhg-yellow"
                >
                  {office.hotline}
                </a>
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-vhg-muted">
          © {year} VHG Co., Ltd. All rights reserved. ·{" "}
          <Link
            href={COMPANY.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-vhg-yellow"
          >
            vhglogistics.com
          </Link>
        </p>
      </div>
    </footer>
  );
}
