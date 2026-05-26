import Image from "next/image";
import type { Dictionary } from "../[locale]/translations";

const gallery = [
  { src: "/kho1.jpg", alt: "Kho bãi VHG Logistics" },
  { src: "/kho2.jpg", alt: "Khu vực lưu kho và phân loại hàng" },
  { src: "/kho3.jpg", alt: "Đóng gói và xử lý đơn hàng" },
  { src: "/kho4.jpg", alt: "Container và vận chuyển" },
  { src: "/kho5.jpg", alt: "Kho tổng và bốc xếp hàng hóa" },
  { src: "/kho6.jpg", alt: "Hệ thống kho bãi tiêu chuẩn" },
  { src: "/kho7.jpg", alt: "Đội ngũ vận hành" },
  { src: "/kho8.jpg", alt: "Đội ngũ và hoạt động logistics" },
];

export function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="ve-chung-toi" className="border-b border-vhg-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              {dict.about.titlePrefix}{" "}
              <span className="italic text-vhg-yellow">
                {dict.about.titleEmphasis}
              </span>
              {dict.about.titleSuffix}
            </h2>
            <p className="mt-4 leading-relaxed text-vhg-muted">
              {dict.about.p1}
            </p>
            <p className="mt-4 leading-relaxed text-vhg-muted">
              {dict.about.p2Prefix}{" "}
              <strong className="text-foreground">
                {dict.about.p2Strong1}
              </strong>{" "}
              {dict.about.p2Middle}{" "}
              <strong className="text-foreground">{dict.about.p2Strong2}</strong>
              {dict.about.p2Suffix}
            </p>
          </div>

          <ul className="space-y-4">
            {dict.data.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-4 rounded-xl border border-vhg-border bg-vhg-surface px-5 py-4"
              >
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-vhg-yellow text-xs font-bold text-vhg-charcoal"
                  aria-hidden
                >
                  ✓
                </span>
                <span className="text-sm font-medium sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {gallery.map((item, idx) => (
              <div
                key={item.src}
                className="relative overflow-hidden rounded-2xl border border-vhg-border bg-vhg-surface"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={dict.about.galleryAlt[idx] ?? item.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                    priority={item.src === "/kho1.jpg"}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-vhg-muted">
            {dict.about.galleryCaption}
          </p>
        </div>
      </div>
    </section>
  );
}
