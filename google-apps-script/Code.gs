/**
 * VHG Logistics — ghi lead vào Google Sheet
 *
 * Sheet: https://docs.google.com/spreadsheets/d/1_pFnIgTBlRZqjfW8GpIigQtgCr7cwUPGUEV8jYxtMhE
 *
 * Cột hàng 1: Thời gian | Họ tên | SĐT | Email | Công ty | Tuyến hàng | Ghi chú
 *
 * Lưu ý: POST từ server thường bị redirect 302 → mất dữ liệu.
 * Next.js gửi GET với query params (doGet) — ổn định hơn.
 */
var SHEET_ID = "1_pFnIgTBlRZqjfW8GpIigQtgCr7cwUPGUEV8jYxtMhE";

function appendLead_(data) {
  var sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
  sheet.appendRow([
    data.submittedAt || new Date().toISOString(),
    data.fullName || "",
    data.phone || "",
    data.email || "",
    data.company || "",
    data.route || "",
    data.notes || "",
  ]);
  return jsonResponse({ ok: true });
}

function doGet(e) {
  try {
    var p = (e && e.parameter) || {};
    if (p.fullName && p.phone && p.email) {
      return appendLead_(p);
    }
    return jsonResponse({ ok: true, message: "VHG Logistics lead endpoint" });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

function doPost(e) {
  try {
    var data = {};
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    }
    if (!data.fullName) {
      return jsonResponse({ ok: false, error: "Missing fullName" });
    }
    return appendLead_(data);
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
