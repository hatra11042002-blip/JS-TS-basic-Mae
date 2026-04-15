// Dữ liệu đầu vào
// --- Object cấu hình toàn cục ---
const globalConfig = {
  thoiDiem: "giờ cao điểm", // 'bình thường', 'ban đêm'
  coSuKienDacBiet: true,
  mucDoCanhBaoThoiTiet: "bình thường", // 'xấu', 'nguy hiểm'
};

// --- Mảng các tuyến đường chính cho sự kiện ---
const tuyenDuongChinh = ["GL01", "GL03"];

// --- Array of Objects: Dữ liệu thời gian thực từ các giao lộ ---
const duLieuGiaoThong = [
  {
    id: "GL01",
    luongXe: "cao",
    coNguoiDiBoCho: true,
    coXeCuuThuong: false,
    camBienPhu: { ghiChu: "Cảm biến A cần hiệu chỉnh." },
  },
  {
    id: "GL02",
    luongXe: "trung bình",
    coNguoiDiBoCho: false,
    coXeCuuThuong: true,
    camBienPhu: {},
  },
  {
    id: "GL03",
    luongXe: "thấp",
    coNguoiDiBoCho: true,
    coXeCuuThuong: false,
    camBienPhu: {},
  },
  {
    id: "GL04",
    luongXe: "cao",
    coNguoiDiBoCho: false,
    coXeCuuThuong: false,
    camBienPhu: { ghiChu: "Hoạt động ổn định." },
  },
];
