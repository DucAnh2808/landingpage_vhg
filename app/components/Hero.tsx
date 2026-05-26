import { COMPANY } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-vhg-border">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 70% 0%, color-mix(in srgb, var(--vhg-yellow) 25%, transparent), transparent 60%), linear-gradient(135deg, transparent 40%, color-mix(in srgb, var(--vhg-charcoal) 80%, transparent) 100%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Giải pháp{" "}
            <span className="italic text-vhg-yellow">Fulfillment</span> xuyên
            biên giới — Xử lý chính xác, tối ưu vận hành
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-vhg-muted sm:text-lg">
            VHG Logistics cung cấp dịch vụ hoàn tất đơn hàng (Fulfillment) toàn
            diện với hệ thống tổng kho tại phía Bắc Việt Nam. Chúng tôi tiếp
            nhận, quản lý tồn kho, đóng gói, dán nhãn và xử lý giao hàng chặng
            cuối, giúp doanh nghiệp tháo gỡ gánh nặng vận hành và tăng tốc chuỗi
            cung ứng.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#dang-ky"
              className="inline-flex items-center justify-center rounded-full bg-vhg-yellow px-8 py-3 text-sm font-bold text-vhg-charcoal transition-colors hover:bg-[var(--vhg-yellow-hover)]"
            >
              Đăng ký tư vấn miễn phí
            </a>
            <a
              href={COMPANY.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-vhg-border px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:border-vhg-yellow hover:text-vhg-yellow"
            >
              Xem website chính thức
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            {
              value: "Miền Bắc Việt Nam",
              label: "Hệ thống tổng kho hiện đại",
              compact: true,
            },
            { value: "24h", label: "Tốc độ đóng gói & xuất kho" },
            {
              value: "Thời gian thực",
              label: "Đồng bộ & kiểm soát tồn kho dữ liệu",
              compact: true,
            },
            { value: "Tối ưu 30%", label: "Chi phí kho bãi và nhân sự" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-vhg-border bg-vhg-surface p-5 sm:p-6"
            >
              <p
                className={`font-bold italic text-vhg-yellow ${
                  stat.compact
                    ? "text-lg leading-snug sm:text-xl"
                    : "text-2xl sm:text-3xl"
                }`}
              >
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-vhg-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
