export const COMPANY = {
  name: "VHG Logistics",
  legalName: "Công ty TNHH Tiếp vận VHG",
  tagline: "Giải pháp logistics đa phương thức — uy tín, hiệu quả, tận tâm",
  website: "https://vhglogistics.com/",
  hotline: "0969 265 726",
  hotlineHref: "tel:+84969265726",
  sheetId: "1_pFnIgTBlRZqjfW8GpIigQtgCr7cwUPGUEV8jYxtMhE",
  /** Tăng số này mỗi lần đổi public/logo.png để tránh cache trình duyệt / Next Image */
  logoVersion: 2,
  logoSrc: "/logo.png",
} as const;

export const SHIPPING_ROUTES = [
  "Trung Quốc – Việt Nam",
  "Nga – Việt Nam",
  "Ấn Độ – Việt Nam",
  "Trung Quốc – Campuchia",
  "Trung Quốc – Thái Lan",
  "Đường biển",
  "Đường hàng không",
  "Hải quan / Khai báo",
  "Khác / Cần tư vấn",
] as const;

export const SERVICES = [
  {
    title: "Vận tải xuyên biên giới",
    description:
      "Khai thác thế mạnh các tuyến trọng điểm Trung Quốc – Việt Nam và Đông Nam Á. Vận chuyển chính ngạch, lịch trình khởi hành cố định giúp đối tác chủ động hoàn toàn nguồn hàng.",
  },
  {
    title: "Vận tải đa phương thức",
    description:
      "Giải pháp Door-to-Door chuyên sâu tuyến Nga – Việt và toàn cầu. Phối hợp linh hoạt đường biển (FCL/LCL), đường bộ và hàng không với cước phí cạnh tranh từ các hãng tàu top đầu.",
  },
  {
    title: "Lưu kho & fulfillment B2B",
    description:
      "Hệ thống tổng kho tiêu chuẩn tại Đông Anh, Hà Nội. Tích hợp công nghệ quản lý tồn kho thời gian thực, đóng gói và xử lý đơn hàng chuyên nghiệp, chính xác.",
  },
  {
    title: "Hải quan & ủy thác XNK",
    description:
      "Đội ngũ am hiểu chính sách bản địa, cam kết thông quan tối đa 36 giờ. Xử lý trọn gói các thủ tục pháp lý, chứng từ (C/O Form E...), đảm bảo luồng hàng lưu thông.",
  },
] as const;

export const HIGHLIGHTS = [
  "Logistics đa phương thức: biển, bộ, đường sắt",
  "Door-to-door, kho bãi & xử lý hàng lẻ",
  "Mạng lưới Hà Nội, TP.HCM, Chiết Giang, Quảng Châu, Bằng Tường, Moscow",
  "Tiết kiệm chi phí, rút ngắn thời gian vận chuyển",
] as const;

export const OFFICES = [
  {
    name: "Trụ sở TP.HCM",
    address: "46 Bạch Đằng, Phường 2, Tân Bình, TP. Hồ Chí Minh",
    hotline: COMPANY.hotline,
    hotlineHref: COMPANY.hotlineHref,
  },
  {
    name: "Chi nhánh Hà Nội",
    address: "Số 20, D09, KĐT Geleximco, Lê Trọng Tấn, Dương Nội, Hà Đông",
    hotline: COMPANY.hotline,
    hotlineHref: COMPANY.hotlineHref,
  },
  {
    name: "Chi nhánh Hải Phòng",
    address: "TTC Building, 630 Lê Thánh Tông, Quận Hải An, Hải Phòng",
    hotline: COMPANY.hotline,
    hotlineHref: COMPANY.hotlineHref,
  },
  {
    name: "Chi nhánh Liên Bang Nga",
    address: "1st Tverskaya, Moscow, Nga.",
    hotline: "+79166602258",
    hotlineHref: "tel:+79166602258",
  },
  {
    name: "Chi nhánh Trung Quốc — Quảng Châu",
    address:
      "No. 62, Dalang North Road, Baiyun Lake Street, Baiyun District, Guangzhou",
    hotline: "15322046958",
    hotlineHref: "tel:+8615322046958",
  },
  {
    name: "Chi nhánh Trung Quốc — Chiết Giang",
    address:
      "No. 88 Qiushi Road, Beiyuan Street, Yiwu City, Zhejiang Province",
    hotline: "15158939112",
    hotlineHref: "tel:+8615158939112",
  },
] as const;
