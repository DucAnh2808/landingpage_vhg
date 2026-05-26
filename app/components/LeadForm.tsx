"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { COMPANY } from "@/lib/constants";
import type { Dictionary } from "../[locale]/translations";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  company: string;
  route: string;
  notes: string;
};

export function LeadForm({ dict }: { dict: Dictionary }) {
  const searchParams = useSearchParams();
  const shippingRoutes = dict.data.shippingRoutes;
  const sent = searchParams.get("sent");
  const error = searchParams.get("error");

  const queryState = useMemo(() => {
    if (sent === "1") {
      return {
        status: "success" as const,
        message: dict.form.successToast,
        showThanks: true,
      };
    }

    if (error === "sheet") {
      return {
        status: "error" as const,
        message: dict.form.sheetError,
        showThanks: false,
      };
    }

    if (error) {
      return {
        status: "error" as const,
        message: error === "invalid" ? dict.form.invalidError : decodeURIComponent(error),
        showThanks: false,
      };
    }

    return { status: "idle" as const, message: "", showThanks: false };
  }, [dict.form.invalidError, dict.form.sheetError, dict.form.successToast, error, sent]);

  const initial: FormState = {
    fullName: "",
    phone: "",
    email: "",
    company: "",
    route: shippingRoutes[0] ?? "",
    notes: "",
  };
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    queryState.status,
  );
  const [message, setMessage] = useState(queryState.message);
  const [showThanks, setShowThanks] = useState(queryState.showThanks);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Gửi thất bại");
      }

      setStatus("success");
      setMessage(dict.form.successToast);
      setShowThanks(true);
      setForm(initial);
      window.history.replaceState(null, "", "#dang-ky");
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error
          ? err.message
          : `Không gửi được. Vui lòng gọi hotline ${COMPANY.hotline}`,
      );
    }
  }

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <section id="dang-ky" className="border-b border-vhg-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {showThanks && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={dict.form.modalAriaLabel}
            onClick={() => setShowThanks(false)}
          >
            <div
              className="w-full max-w-md rounded-2xl border border-vhg-border bg-background p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-center text-base font-semibold text-foreground">
                {dict.form.modalTitle}
              </p>
              <button
                type="button"
                className="mt-5 w-full rounded-full bg-vhg-yellow py-3 text-sm font-bold text-vhg-charcoal transition-colors hover:bg-[var(--vhg-yellow-hover)]"
                onClick={() => setShowThanks(false)}
              >
                {dict.form.modalClose}
              </button>
            </div>
          </div>
        )}
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold sm:text-3xl">
              {dict.form.titlePrefix}{" "}
              <span className="italic text-vhg-yellow">{dict.form.titleEmphasis}</span>
            </h2>
            <p className="mt-3 text-vhg-muted">
              {dict.form.description}
            </p>
            <p className="mt-6 text-sm text-vhg-muted">
              {dict.form.hotlineLabel}{" "}
              <a
                href={COMPANY.hotlineHref}
                className="font-bold text-vhg-yellow hover:underline"
              >
                {COMPANY.hotline}
              </a>
            </p>
          </div>

          <form
            action="/api/lead"
            method="POST"
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl border border-vhg-border bg-vhg-surface p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={dict.form.fields.fullName} required className="sm:col-span-2">
                <input
                  name="fullName"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  className={inputClass}
                  placeholder={dict.form.placeholders.fullName}
                />
              </Field>

              <Field label={dict.form.fields.phone} required>
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className={inputClass}
                  placeholder={dict.form.placeholders.phone}
                />
              </Field>

              <Field label={dict.form.fields.email} required>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={inputClass}
                  placeholder={dict.form.placeholders.email}
                />
              </Field>

              <Field label={dict.form.fields.company} required className="sm:col-span-2">
                <input
                  name="company"
                  type="text"
                  required
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  className={inputClass}
                  placeholder={dict.form.placeholders.company}
                />
              </Field>

              <Field label={dict.form.fields.route} required className="sm:col-span-2">
                <select
                  name="route"
                  required
                  value={form.route}
                  onChange={(e) => update("route", e.target.value)}
                  className={inputClass}
                >
                  {shippingRoutes.map((route) => (
                    <option key={route} value={route}>
                      {route}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                label={dict.form.fields.notes}
                className="sm:col-span-2"
              >
                <textarea
                  name="notes"
                  rows={4}
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  className={inputClass}
                  placeholder={dict.form.placeholders.notes}
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 w-full rounded-full bg-vhg-yellow py-3.5 text-sm font-bold text-vhg-charcoal transition-colors hover:bg-[var(--vhg-yellow-hover)] disabled:opacity-60"
            >
              {status === "loading" ? dict.form.submitLoading : dict.form.submitIdle}
            </button>

            {message && (
              <p
                role="status"
                className={`mt-4 text-center text-sm ${
                  status === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-vhg-yellow"> *</span>}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-lg border border-vhg-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-vhg-muted/60 focus:border-vhg-yellow focus:ring-1 focus:ring-vhg-yellow";
