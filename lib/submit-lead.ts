export type LeadPayload = {
  fullName: string;
  phone: string;
  email: string;
  company: string;
  route: string;
  notes?: string;
};

export function parseLeadParams(
  input: Record<string, string | string[] | undefined>,
): LeadPayload | null {
  const pick = (key: keyof LeadPayload) => {
    const v = input[key];
    return typeof v === "string" ? v.trim() : "";
  };

  const lead = {
    fullName: pick("fullName"),
    phone: pick("phone"),
    email: pick("email"),
    company: pick("company"),
    route: pick("route"),
    notes: pick("notes"),
  };

  if (
    !lead.fullName ||
    !lead.phone ||
    !lead.email ||
    !lead.company ||
    !lead.route
  ) {
    return null;
  }

  if (!lead.notes) {
    delete (lead as { notes?: string }).notes;
  }

  return lead;
}

function buildScriptUrl(base: string, lead: LeadPayload): string {
  const url = new URL(base);
  url.searchParams.set("fullName", lead.fullName);
  url.searchParams.set("phone", lead.phone);
  url.searchParams.set("email", lead.email);
  url.searchParams.set("company", lead.company);
  url.searchParams.set("route", lead.route);
  if (lead.notes) {
    url.searchParams.set("notes", lead.notes);
  }
  url.searchParams.set("submittedAt", new Date().toISOString());
  return url.toString();
}

export async function submitLeadToSheet(lead: LeadPayload): Promise<void> {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    throw new Error("Chưa cấu hình GOOGLE_SCRIPT_URL");
  }

  const res = await fetch(buildScriptUrl(scriptUrl, lead), {
    method: "GET",
    cache: "no-store",
    redirect: "follow",
  });

  const text = await res.text();
  let parsed: { ok?: boolean; error?: string } = {};
  try {
    parsed = JSON.parse(text) as { ok?: boolean; error?: string };
  } catch {
    console.error("[lead] Non-JSON from Apps Script:", text.slice(0, 200));
  }

  if (!res.ok || parsed.ok !== true) {
    throw new Error(
      parsed.error ||
        "Không ghi được vào Sheet — kiểm tra Apps Script deploy",
    );
  }
}
