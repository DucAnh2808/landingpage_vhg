import { Suspense } from "react";
import { redirect, notFound } from "next/navigation";
import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { LeadForm } from "../components/LeadForm";
import { Services } from "../components/Services";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { getDictionary, hasLocale } from "./translations";
import { parseLeadParams, submitLeadToSheet } from "@/lib/submit-lead";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Home({ params, searchParams }: PageProps) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const sp = await searchParams;
  const lead = parseLeadParams(sp);

  // Điện thoại / trình duyệt không chạy JS → form gửi GET /{locale}?fullName=... — xử lý tại server
  if (lead && !sp.sent && !sp.error) {
    try {
      await submitLeadToSheet(lead);
      redirect(`/${locale}?sent=1`);
    } catch {
      redirect(`/${locale}?error=sheet`);
    }
  }

  return (
    <>
      <SiteHeader dict={dict} locale={locale} />
      <main>
        <Hero dict={dict} />
        <Services dict={dict} />
        <About dict={dict} />
        <Suspense fallback={null}>
          <LeadForm dict={dict} />
        </Suspense>
      </main>
      <SiteFooter dict={dict} />
    </>
  );
}

