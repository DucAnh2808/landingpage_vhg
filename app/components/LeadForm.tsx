"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { COMPANY, SHIPPING_ROUTES } from "@/lib/constants";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  company: string;
  route: string;
};

const initial: FormState = {
  fullName: "",
  phone: "",
  email: "",
  company: "",
  route: SHIPPING_ROUTES[0],
};

export function LeadForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    const sent = searchParams.get("sent");
    const error = searchParams.get("error");
    if (sent === "1") {
      setStatus("success");
      setMessage(
        "Cảm ơn bạn! VHG Logistics sẽ liên hệ trong thời gian sớm nhất.",
      );
    } else if (error === "sheet") {
      setStatus("error");
      setMessage(
        "Không ghi được vào Sheet. Kiểm tra GOOGLE_SCRIPT_URL hoặc deploy Apps Script.",
      );
    } else if (error) {
      setStatus("error");
      setMessage(
        error === "invalid"
          ? "Vui lòng điền đầy đủ thông tin."
          : decodeURIComponent(error),
      );
    }
  }, [searchParams]);

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
      setMessage(
        "Cảm ơn bạn! VHG Logistics sẽ liên hệ trong thời gian sớm nhất.",
      );
      setForm(initial);
      window.history.replaceState(null, "", "#dang-ky");
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error
          ? err.message
          : "Không gửi được. Vui lòng gọi hotline " + COMPANY.hotline,
      );
    }
  }

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <section id="dang-ky" className="border-b border-vhg-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Đăng ký <span className="italic text-vhg-yellow">tư vấn</span>
            </h2>
            <p className="mt-3 text-vhg-muted">
              Điền thông tin — dữ liệu được ghi vào hệ thống của VHG Logistics
              để đội ngũ liên hệ báo giá và tư vấn tuyến phù hợp.
            </p>
            <p className="mt-6 text-sm text-vhg-muted">
              Hoặc gọi trực tiếp:{" "}
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
              <Field label="Họ và tên" required className="sm:col-span-2">
                <input
                  name="fullName"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  className={inputClass}
                  placeholder="Nguyễn Văn A"
                />
              </Field>

              <Field label="Số điện thoại" required>
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className={inputClass}
                  placeholder="09xx xxx xxx"
                />
              </Field>

              <Field label="Email" required>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={inputClass}
                  placeholder="email@congty.com"
                />
              </Field>

              <Field label="Tên công ty" required className="sm:col-span-2">
                <input
                  name="company"
                  type="text"
                  required
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  className={inputClass}
                  placeholder="Công ty TNHH ..."
                />
              </Field>

              <Field label="Tuyến hàng / dịch vụ quan tâm" required className="sm:col-span-2">
                <select
                  name="route"
                  required
                  value={form.route}
                  onChange={(e) => update("route", e.target.value)}
                  className={inputClass}
                >
                  {SHIPPING_ROUTES.map((route) => (
                    <option key={route} value={route}>
                      {route}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 w-full rounded-full bg-vhg-yellow py-3.5 text-sm font-bold text-vhg-charcoal transition-colors hover:bg-[var(--vhg-yellow-hover)] disabled:opacity-60"
            >
              {status === "loading" ? "Đang gửi..." : "Gửi đăng ký"}
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
