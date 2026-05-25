import { NextResponse } from "next/server";
import { redirectTo } from "@/lib/request-origin";
import { parseLeadParams, submitLeadToSheet } from "@/lib/submit-lead";

async function parseBody(request: Request): Promise<Record<string, string | string[] | undefined> | null> {
  const type = request.headers.get("content-type") ?? "";

  if (type.includes("application/json")) {
    const json = (await request.json()) as Record<string, string>;
    return json;
  }

  if (
    type.includes("application/x-www-form-urlencoded") ||
    type.includes("multipart/form-data")
  ) {
    const fd = await request.formData();
    const out: Record<string, string> = {};
    for (const [key, value] of fd.entries()) {
      if (typeof value === "string") out[key] = value;
    }
    return out;
  }

  return null;
}

function isBrowserFormSubmit(request: Request): boolean {
  const type = request.headers.get("content-type") ?? "";
  return (
    type.includes("application/x-www-form-urlencoded") ||
    type.includes("multipart/form-data")
  );
}

export async function POST(request: Request) {
  const wantsRedirect = isBrowserFormSubmit(request);

  let raw: Record<string, string | string[] | undefined> | null;
  try {
    raw = await parseBody(request);
  } catch {
    raw = null;
  }

  const lead = raw ? parseLeadParams(raw) : null;

  if (!lead) {
    if (wantsRedirect) {
      return redirectTo(request, "/?error=invalid#dang-ky");
    }
    return NextResponse.json(
      { ok: false, error: "Vui lòng điền đầy đủ thông tin" },
      { status: 400 },
    );
  }

  try {
    await submitLeadToSheet(lead);

    if (wantsRedirect) {
      return redirectTo(request, "/?sent=1#dang-ky");
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message =
      err instanceof Error
        ? err.message
        : "Không lưu được dữ liệu. Thử lại hoặc gọi hotline.";

    if (wantsRedirect) {
      return redirectTo(
        request,
        `/?error=${encodeURIComponent(message)}#dang-ky`,
      );
    }
    return NextResponse.json({ ok: false, error: message }, { status: 502 });
  }
}
