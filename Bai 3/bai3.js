// parseInt: lay so nguyen
// const soLuongText = "15 san pham";
// console.log(parseInt(soLuongText));

// parseFloat
// const giaTienText = "$29.99 USD";
// const giaTien = giaTienText.replace("$", "");
// console.log(parseFloat(giaTien));

// Number
// const tongTienText = "Tong thanh toan:2,540,000.50 VND";
// const chuoilamSach = tongTienText
//   .replaceAll(",", "")
//   .replace("VND", "")
//   .replace("Tong thanh toan:", "");
// console.log(Number(chuoilamSach));

// Number.isNaN()
// let ketQuaTinhToan = parseInt("abc");
// console.log(Number.isNaN(ketQuaTinhToan));
// console.log(Number.isNaN("hello"));

// Demo testcase
// const tonKhoText1 = "Ton kho: 25";
// const tonKhoText2 = "Ton kho: het hang";

// function kiemTraVaHanhDong(inputText) {
//   console.log(`Dang xu ly chuoi ${inputText}`);

//   const chuoiSo = inputText.replace("Ton kho:", "");
//   const soLuong = parseInt(chuoiSo);

//   if (Number.isNaN(soLuong)) {
//     console.log("San pham het hang, bo qua hanh dong them vao gio");
//   } else {
//     console.log(`So luong hang con lai ${soLuong}`);
//     if (soLuong > 0) {
//       console.log("Thuc hien hanh dong them vao gio hang");
//     }
//   }
// }
// console.log("Kich ban 1: con hang");
// kiemTraVaHanhDong(tonKhoText1);
// console.log("Kich ban 2: het hang");
// kiemTraVaHanhDong(tonKhoText2);

// let soTestCaseFail = 0;
// // lan dau test 1 login thất bại
// soTestCaseFail = soTestCaseFail + 1;
// console.log(soTestCaseFail);

// hau to x++
// let thuTuVeXemPhim = 10;
// let veHienTai = thuTuVeXemPhim++;
// console.log(`Ve hien tai bay gio dang la ${veHienTai}`);
// console.log(`Thu tu bay gio la ${thuTuVeXemPhim}`);

// let soLanClick = 0;
// console.log("Da click lan dau tien");
// soLanClick++;
// console.log(`Tong so lan da click ${soLanClick}`);

// Giới hạn số lần click, nếu click quá 3 lần thì Fail
// let attempts = 0;
// const MAX_ATTEMPTS = 3;

// function performClickWithRetry() {
//   ++attempts;
//   console.log(`Bat dau thuc hien click lan thu ${attempts + 1}`);

//   const isSuccess = false;

//   if (!isSuccess) {
//     if (attempts >= MAX_ATTEMPTS) {
//       console.error(`Da thu ${attempts} va van that bai. Dung lai`);
//     } else {
//       console.log(`Click that bai, so lan da thu ${attempts}`);
//     }
//   }
// }

// performClickWithRetry();
// performClickWithRetry();
// performClickWithRetry();
// performClickWithRetry();

// Toán tử so sánh == và ===
// const giaTriTuUI = "10";
// const giaTriTuDb = 10;
// const soSanhGiaTriLongLeo = giaTriTuUI == giaTriTuDb;
// console.log(soSanhGiaTriLongLeo);

// const soSanhGiaTriStrict = giaTriTuUI === giaTriTuDb;
// console.log(soSanhGiaTriStrict);

// Ví dụ 2
// const responseAPI={
//   product:'Lap top'
//   quantity: 0
// }
//   const soLuongMongDoi=0
//   if (responseAPI.quantity===soLuongMongDoi){
//     console.log(`PASSED`)
//   } else {
//     console.log(`FAILED`)
//   }

const giaTriInput = "";
const giaTriMongMuon = 0;
if (giaTriInput === giaTriMongMuon) {
  console.log("PASSED");
}

// Toán tử so sánh: && (And)
const nutDangNhapIsVisible = true;
const nutDangNhapIsEnable = true;
const coTheClickDangNhap = nutDangNhapIsVisible && nutDangNhapIsEnable;
if (coTheClickDangNhap) {
  console.log("PASS DIEU KIEN");
} else {
  console.log("FAIL DIEU KIEN");
}

// Toán tử so sánh: || (Or)
const thongBaoThucTe = "Cam on ban da mua hang";
const laThongBaoHopLe =
  thongBaoThucTe === "Cam on ban da mua hang" ||
  thongBaoThucTe === "Dat hang thanh cong";
if (laThongBaoHopLe) {
  console.log("TEST PASSED");
} else {
  console.log("TEST FAILED");
}

// Mức độ ưu tiên
const tongTienDonHang = 60000;
const laThanhVienVip = true;
const coMaGiamGiaDacBiet = false;

let duocGiamGia =
  (laThanhVienVip && tongTienDonHang > 50000) || coMaGiamGiaDacBiet;

console.log("CO DUOC GIAM GIA HAY KHONG", duocGiamGia);

// BAI 3: LOGIC VA RE NHANH

const tenNguoiDungIsVisible = false;

if (tenNguoiDungIsVisible) {
  console.log("DANG NHAP THANH CONG");
} else {
  console.log("DANG NHAP THAT BAI");
}

// Bài tập
// Kịch bản:
// Trên trang chi tiết sản phẩm, đôi khi thông tin quan trọng như SKU (Mã sản phẩm) và tình trạng kho được hiển thị trong cùng một dòng văn bản. Script của bạn cần phải đọc dòng này và bóc tách ra từng thông tin riêng biệt để xác thực.
// Dữ liệu thô từ UI:

// const productInfo_text = "SKU: APL-IP15-BLK | Tình trạng: Còn hàng (5 sản phẩm)";
// Yêu cầu:
// 1. Từ chuỗi productInfo_text, trích xuất ra mã SKU (APL-IP15-BLK) và gán vào một biến.
// 2. Cũng từ chuỗi đó, trích xuất ra số lượng sản phẩm trong kho (5) và gán vào một biến kiểu number.
// 3. In cả hai kết quả ra màn hình.

const productInfo_text =
  "SKU: APL-IP15-BLK | Tình trạng: Còn hàng (5 sản phẩm)";
const maSKU = productInfo_text.replace(
  "| Tình trạng: Còn hàng (5 sản phẩm)",
  "",
);

const soLuongSanPham = productInfo_text
  .replace("SKU: APL-IP15-BLK | Tình trạng: Còn hàng", "")
  .replace(" sản phẩm", "");
const quantity = parseInt(soLuongSanPham, 10);

console.log(maSKU, typeof maSKU);
console.log(soLuongSanPham, typeof soLuongSanPham);

// Bài 2: Xác thực Kết quả Tìm kiếm

// Kịch bản:
// Script automation của bạn đang chạy trên một trang chi tiết sản phẩm. Để thực hiện các bước tiếp theo như gọi API
// hoặc tìm kiếm trong database, bạn cần tạo ra một Product ID duy nhất và sạch sẽ từ các thông tin lộn xộn lấy từ
// giao diện người dùng (UI).
// Dữ liệu thô từ UI:

// const productTitle_UI = "  Apple iPhone 15 Pro Max - 256GB (Blue Titanium)  ";
// const brandName_API = "apple";
// const skuCode = "SKU#8825-A5";
// * Yêu cầu:
// * Bạn phải "sơ chế" và kết hợp các dữ liệu trên để tạo ra một chuỗi productId cuối cùng theo đúng định dạng sau:
// * apple-iphone-15-pro-max-256gb-blue-titanium_sku-8825a5

const productTitle_UI = "  Apple iPhone 15 Pro Max - 256GB (Blue Titanium)  ";
const brandName_API = "apple";
const skuCode = "SKU#8825-A5";

const productTitleLowerCase = productTitle_UI.toLowerCase();
const productTitleTrim = productTitleLowerCase.trim();

const skuCode_LowerCase = skuCode.toLowerCase();
const sku = skuCode_LowerCase.replace("#", "-").replace("-", "");

const productAddLine = productTitleTrim
  .replaceAll(" ", "-")
  .replace("(", "")
  .replace(")", "_")
  .replace("--", "");

console.log(productAddLine + sku);
