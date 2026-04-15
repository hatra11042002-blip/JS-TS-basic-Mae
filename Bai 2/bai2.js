// mật khẩu không <8 và không lớn hơn 16 ký tự
const matKhauKhongHopLe = "12345";
const viPhamDoDai =
  matKhauKhongHopLe.length < 8 || matKhauKhongHopLe.length > 16;

console.log(`Độ dài mật khẩu: ${matKhauKhongHopLe.length}`);
if (viPhamDoDai) {
  console.log("Loi mat khau khong du dai");
}

// toLowerCase-toUpperCase
const tuKhoaTimKiem = "Iphone 17";
const tieuDeSanPhamUI = "Apple Iphone 17";
const coChuaTuKhoa = tieuDeSanPhamUI
  .toLowerCase()
  .includes(tuKhoaTimKiem.toLowerCase());
console.log(tieuDeSanPhamUI.toLowerCase());

// trim
const tenNguoiDung = " Nguyen Van A ";
const tenNguoiDungMongDoi = "Nguyen Van A";
const tenDaTrim = tenNguoiDung.trim();

console.log(`tên đã trim:${tenDaTrim}`);
console.log(
  tenNguoiDungMongDoi.toLowerCase().includes(tenDaTrim.toLowerCase()),
);

// replace()
const giaTienThucTeUI = "Gia niem yet: 1,250.99 USD";
const chuoiDaLamSachGiaNiemYet = giaTienThucTeUI.replace("Gia niem yet:", "");
console.log(chuoiDaLamSachGiaNiemYet);

// const chuoiDaLamSachGiaNiemYet = giaTienThucTeUI.replace("1,250.99", "");
// console.log(chuoiDaLamSachGiaNiemYet);

const chuoiDaLamSachUSD = chuoiDaLamSachGiaNiemYet.replace("USD", "");
console.log(chuoiDaLamSachUSD);

const chuoiDalamSachDauPhay = chuoiDaLamSachUSD.replace(",", "");
console.log(chuoiDalamSachDauPhay);

// split
const breadCrumText = "Trang chu > Dien Thoai > Apple";
const breadCrumArray = breadCrumText.split(">");
// console.log(breadCrumArray.length);
console.log("ARRAY BREADCRUMB", breadCrumArray);

// indexOf()
const tieuDe = "Automation Testing that thu vi";
const viTri = tieuDe.indexOf("Testing");
console.log(`Tu Testing bat dau o vi tri: ${viTri}`);

const URLHientai = "https://example.com/login?status=success";
const ketQuaTimKiem = URLHientai.indexOf("error");
console.log(`Ket qua cua indexOf ${ketQuaTimKiem}`);
if (ketQuaTimKiem === -1) {
  console.log("URL khong chua tham so loi, Dang nhap thanh cong");
} else {
  console.log("Dang nhap that bai");
}

// slice
const urlTrangThanhCong =
  "https://example.com/order-success?id=ORD-987654-2025&status=paid";
// const viTriBatDau = urlTrangThanhCong.indexOf("id") + 3;
// const viTriKetThuc = urlTrangThanhCong.indexOf("&");
// const maDonHang = urlTrangThanhCong.slice(viTriBatDau, viTriKetThuc);
// console.log(maDonHang);

// Dùng thử split
const cutSauDauBang = urlTrangThanhCong.split("=")[1];
console.log(cutSauDauBang);
const maDonHangThanhCong = cutSauDauBang.split("&")[0];
console.log(maDonHangThanhCong);

// 2. Number
// Math.floor: làm tròn xuống
console.log(Math.floor(4.99));

const tamTinhTextUI = "Tam tinh:1,250,500.75 VND";
const tongCongTextUI = "Tong cong (da giam):1,125,450.75 VND";
const daSoCheTamTinhTextUI = tamTinhTextUI
  .replaceAll(",", "")
  .replace("Tam tinh:", "")
  .replace("VND", "");
const daSoCheTongCongTextUI = tongCongTextUI
  .replaceAll(",", "")
  .replace(".", "")
  .replace("VND", "")
  .replace("Tong cong (da giam):", "");
console.log(daSoCheTamTinhTextUI, daSoCheTongCongTextUI);

const soLuongKeo = 5;
const soLuongBanh = 5;
console.log(
  `Tong so:${soLuongKeo + soLuongBanh}, typeof:${typeof (soLuongBanh + soLuongKeo)}`,
);

// parseInt(): lay so nguyen
const soLuongText = "15 san pham";
console.log(parseInt(soLuongText));

const soLuongSanPham = "san pham 15";
console.log(parseInt(soLuongSanPham));
