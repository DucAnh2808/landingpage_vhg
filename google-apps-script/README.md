# Kết nối form → Google Sheet

Sheet: [VHG Leads](https://docs.google.com/spreadsheets/d/1_pFnIgTBlRZqjfW8GpIigQtgCr7cwUPGUEV8jYxtMhE/edit)

## Bước 1 — Header trên Sheet (hàng 1)

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Thời gian | Họ tên | SĐT | Email | Công ty | Tuyến hàng |

## Bước 2 — Deploy Apps Script

1. Mở Google Sheet → **Extensions** → **Apps Script**
2. Dán nội dung file `Code.gs` vào editor, lưu
3. **Deploy** → **New deployment** → loại **Web app**
4. **Execute as:** Me · **Who has access:** Anyone
5. Copy **Web app URL** (dạng `https://script.google.com/macros/s/.../exec`)

> **Quan trọng:** Mỗi lần sửa `Code.gs` phải **Deploy → Manage deployments → Edit → Version: New version → Deploy**. Nếu không, URL cũ vẫn chạy code cũ (form gửi nhưng Sheet không có dòng mới).

## Vì sao không dùng POST?

Google Apps Script Web App trả **302 redirect** khi POST từ server — body JSON thường **không tới** `doPost`, trong khi API vẫn có thể báo lỗi mơ hồ. Landing page gửi **GET + query** vào `doGet` (ổn định hơn).

## Bước 3 — Cấu hình Next.js

Tạo file `.env.local` ở thư mục gốc project:

```env
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/XXXX/exec
```

Chạy lại `npm run dev`, gửi thử form trên landing page.

## Lưu ý

- Lần deploy mới sau khi sửa script cần tạo deployment mới (hoặc chỉnh version) để URL có hiệu lực.
- Tài khoản deploy phải có quyền chỉnh sửa Sheet.
