import { COMPANY } from "@/lib/constants";
import type { Dictionary } from "../[locale]/translations";

export function Hero({ dict }: { dict: Dictionary }) {
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
            {dict.hero.titlePrefix}{" "}
            <span className="italic text-vhg-yellow">{dict.hero.titleEmphasis}</span>{" "}
            {dict.hero.titleSuffix}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-vhg-muted sm:text-lg">
            {dict.hero.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#dang-ky"
              className="inline-flex items-center justify-center rounded-full bg-vhg-yellow px-8 py-3 text-sm font-bold text-vhg-charcoal transition-colors hover:bg-[var(--vhg-yellow-hover)]"
            >
              {dict.hero.primaryCta}
            </a>
            <a
              href={COMPANY.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-vhg-border px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:border-vhg-yellow hover:text-vhg-yellow"
            >
              {dict.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {dict.hero.stats.map((stat) => (
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
