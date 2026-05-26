import type { Dictionary } from "../[locale]/translations";

export function Services({ dict }: { dict: Dictionary }) {
  return (
    <section id="dich-vu" className="border-b border-vhg-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            {dict.services.titlePrefix}{" "}
            <span className="italic text-vhg-yellow">
              {dict.services.titleEmphasis}
            </span>
          </h2>
          <p className="mt-3 text-vhg-muted">
            {dict.services.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {dict.data.services.map((service, i) => (
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
