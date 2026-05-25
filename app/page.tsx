import { Suspense } from "react";
import { redirect } from "next/navigation";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { LeadForm } from "./components/LeadForm";
import { Services } from "./components/Services";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { parseLeadParams, submitLeadToSheet } from "@/lib/submit-lead";

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const lead = parseLeadParams(params);

  // Điện thoại / trình duyệt không chạy JS → form gửi GET /?fullName=... — xử lý tại server
  if (lead && !params.sent && !params.error) {
    try {
      await submitLeadToSheet(lead);
      redirect("/?sent=1#dang-ky");
    } catch {
      redirect("/?error=sheet#dang-ky");
    }
  }

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <About />
        <Suspense fallback={null}>
          <LeadForm />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
