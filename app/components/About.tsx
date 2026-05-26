import Image from "next/image";
import { HIGHLIGHTS } from "@/lib/constants";

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

export function About() {
  return (
    <section id="ve-chung-toi" className="border-b border-vhg-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Vì sao chọn{" "}
              <span className="italic text-vhg-yellow">VHG Logistics</span>?
            </h2>
            <p className="mt-4 leading-relaxed text-vhg-muted">
              Công ty vận tải quốc tế với mạng lưới văn phòng tại các cảng lớn,
              tập trung Hà Nội, TP.HCM, Quảng Châu và Moscow. Đội ngũ nhân viên
              giàu kinh nghiệm từ nhiều quốc gia — cam kết biến các lộ trình xuyên
              biên giới phức tạp trở nên đơn giản, minh bạch và an toàn nhất.
            </p>
            <p className="mt-4 leading-relaxed text-vhg-muted">
              Ngoài tuyến Việt – Trung, chúng tôi cung cấp vận chuyển{" "}
              <strong className="text-foreground">
                Trung Quốc – Campuchia
              </strong>{" "}
              và{" "}
              <strong className="text-foreground">Trung Quốc – Thái Lan</strong>
              , hàng tiêu dùng, gia dụng và thương mại điện tử.
            </p>
          </div>

          <ul className="space-y-4">
            {HIGHLIGHTS.map((item) => (
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
            {gallery.map((item) => (
              <div
                key={item.src}
                className="relative overflow-hidden rounded-2xl border border-vhg-border bg-vhg-surface"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.alt}
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
            Hình ảnh kho bãi, container và đội ngũ vận hành
          </p>
        </div>
      </div>
    </section>
  );
}
