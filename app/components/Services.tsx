import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section id="dich-vu" className="border-b border-vhg-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Dịch vụ <span className="italic text-vhg-yellow">nổi bật</span>
          </h2>
          <p className="mt-3 text-vhg-muted">
            Chuỗi dịch vụ linh hoạt, phù hợp từng loại hàng và nhu cầu doanh
            nghiệp — hợp tác các hãng tàu lớn như Maersk, Evergreen.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-vhg-border bg-vhg-surface p-6 transition-colors hover:border-vhg-yellow/50"
            >
              <span className="text-3xl font-bold italic text-vhg-yellow/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-bold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-vhg-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
