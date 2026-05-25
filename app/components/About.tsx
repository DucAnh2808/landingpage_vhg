import { HIGHLIGHTS } from "@/lib/constants";

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
              giàu kinh nghiệm từ nhiều quốc gia — cam kết uy tín, tận tâm và
              hiệu quả trong từng lô hàng.
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

        <div
          className="mt-12 flex min-h-[200px] items-center justify-center rounded-2xl border border-dashed border-vhg-border bg-vhg-surface/50 px-6 text-center text-sm text-vhg-muted"
          role="img"
          aria-label="Khu vực hình ảnh — sẽ bổ sung sau"
        >
          <p>
            Khu vực hình ảnh (kho bãi, container, đội ngũ…)
            <br />
            <span className="text-vhg-yellow">Bạn có thể bổ sung ảnh sau</span>
          </p>
        </div>
      </div>
    </section>
  );
}
