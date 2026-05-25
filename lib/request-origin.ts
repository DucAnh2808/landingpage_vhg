/** Giữ đúng host/IP mà trình duyệt đang dùng (không ép về localhost). */
export function redirectTo(request: Request, path: string): Response {
  const { headers } = request;
  const referer = headers.get("referer");

  if (referer) {
    try {
      const ref = new URL(referer);
      return Response.redirect(`${ref.origin}${path}`, 303);
    } catch {
      /* ignore invalid referer */
    }
  }

  const host =
    headers.get("x-forwarded-host")?.split(",")[0]?.trim() ||
    headers.get("host");

  if (host) {
    const proto =
      headers.get("x-forwarded-proto")?.split(",")[0]?.trim() || "http";
    return Response.redirect(`${proto}://${host}${path}`, 303);
  }

  return Response.redirect(path, 303);
}
