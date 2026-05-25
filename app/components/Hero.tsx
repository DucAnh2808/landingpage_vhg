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
          <p className="mb-4 inline-block rounded-full border border-vhg-yellow/40 bg-vhg-yellow/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-vhg-yellow">
            Thuộc hệ sinh thái VHG HOLDING
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Giải pháp{" "}
            <span className="italic text-vhg-yellow">logistics</span> quốc tế
            — nhanh, an toàn, tối ưu chi phí
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-vhg-muted sm:text-lg">
            {COMPANY.legalName} chuyên vận tải đa phương thức (biển, bộ, đường
            sắt), mạnh tuyến{" "}
            <strong className="text-foreground">Trung Quốc – Việt Nam</strong>{" "}
            và <strong className="text-foreground">Nga – Việt Nam</strong>, dịch
            vụ door-to-door, kho bãi và xử lý hàng lẻ.
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
            { value: "3+", label: "Tuyến quốc tế chủ lực" },
            { value: "36h", label: "Hải quan tối đa" },
            { value: "D2D", label: "Door-to-door" },
            { value: "24/7", label: "Hỗ trợ khách hàng" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-vhg-border bg-vhg-surface p-5 sm:p-6"
            >
              <p className="text-2xl font-bold italic text-vhg-yellow sm:text-3xl">
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
