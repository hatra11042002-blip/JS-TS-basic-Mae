let giaGame = 1000000;
let soTienTietKiem = 0;
let soTuan = 0;

while (soTienTietKiem < giaGame) {
  console.log(`Tuan ${soTuan + 1}. Dang co ${soTienTietKiem}`);
  soTienTietKiem += 150000;
  soTuan++;
  console.log("Bo vao tiet kiem 150000");
}
console.log(
  `Sau ${soTuan} thi da tiet kiem duoc ${soTienTietKiem} va du de mua`,
);

// vong lap for

for (let i = 0; i < 5; i++) {
  console.log(`dang thuc hien vong lap thu ${i}`);
}

// let dangBaoTri = false;
// let tonKho = 20;
// let soLuongDat = 1;
// let giaTriDonHang = 500;
// let yeuCauGiaoQuocTe = false;
// let laThanhVienVip = true;
// let lichSuMuaHang = 10;
// let donHangDaXuLyTrongNgay = 152;
// Kết quả mong đợi: Robot thông báo xử lý tự động, tonKho còn 19, donHangDaXuLyTrongNgay tăng lên 153.

// 1. Kiểm tra điều kiện tiên quyết: Robot chỉ hoạt động nếu hệ thống không trong giờ bảo trì (!dangBaoTri). Nếu đang bảo trì, robot sẽ báo lại và dừng ngay lập tức.
// 2. Kiểm tra tồn kho:
// - Nếu số lượng sản phẩm khách đặt (soLuongDat) lớn hơn số lượng trong kho (tonKho), robot sẽ thông báo "Hủy đơn hàng do hết tồn kho" và dừng lại.
// - Nếu còn hàng, robot sẽ tạm thời "giữ" sản phẩm cho khách bằng cách giảm số lượng tồn kho đi 1 (sử dụng toán tử giảm).
// 3. Phân tích rủi ro (Cần xác minh thủ công):
//  Sau khi đã trừ kho, robot sẽ kiểm tra xem đơn hàng có cần người thật xác minh hay không. Đơn hàng sẽ bị gắn cờ "Cần xác minh" nếu thoa mãn BẤT KỲ điều kiện nào sau đây:
// a. Giá trị đơn hàng lớn hơn $1000 VÀ khách hàng này mới mua dưới 3 lần.
// b. Khách hàng không phải là thành viên VIP (!laThanhVienVip) VÀ đơn hàng yêu cầu giao hàng quốc tế.
// 4. Xử lý tự động:
// - Nếu đơn hàng vượt qua tất cả các bước kiểm tra trên, nó sẽ được xử lý tự động. Robot sẽ thông báo "Đơn hàng được tự động xử lý và gửi đến bộ phận đóng gói".
// - Sau khi xử lý thành công, robot sẽ tăng biến đếm tổng số đơn hàng đã xử lý trong ngày (donHangDaXuLyTrongNgay) lên 1.

// Kiểm tra điều kiện tiên quyết: Robot chỉ hoạt động nếu hệ thống không trong giờ bảo trì (!dangBaoTri). Nếu đang bảo trì, robot sẽ báo lại và dừng ngay lập tức.
let dangBaoTri = false;
if (!dangBaoTri) {
  console.log("Robot hoat dong");
} else {
  console.log("Robot bao lai va dung hoat dong");
}

// 2. Kiểm tra tồn kho:
// - Nếu số lượng sản phẩm khách đặt (soLuongDat) lớn hơn số lượng trong kho (tonKho), robot sẽ thông báo "Hủy đơn hàng do hết tồn kho" và dừng lại.
// - Nếu còn hàng, robot sẽ tạm thời "giữ" sản phẩm cho khách bằng cách giảm số lượng tồn kho đi 1 (sử dụng toán tử giảm).
let tonKho = 20;
let soLuongDat = 1;
if (soLuongDat > tonKho) {
  console.log("Huy don hang do het ton kho");
} else {
  tonKho -= 1;
  // Su dung: tonKho--
  console.log(`Con hang: ${tonKho}`);
}

// 3. Phân tích rủi ro (Cần xác minh thủ công):
//  Sau khi đã trừ kho, robot sẽ kiểm tra xem đơn hàng có cần người thật xác minh hay không. Đơn hàng sẽ bị gắn cờ "Cần xác minh"
// nếu thoa mãn BẤT KỲ điều kiện nào sau đây:
// a. Giá trị đơn hàng lớn hơn $1000 VÀ khách hàng này mới mua dưới 3 lần.
// b. Khách hàng không phải là thành viên VIP (!laThanhVienVip) VÀ đơn hàng yêu cầu giao hàng quốc tế.

// let giaTriDonHang = 500;
// let yeuCauGiaoQuocTe = false;
// let laThanhVienVip = true;

// let giaTriDonHang = 500;
// let soLanMuaHang = 3;
// const biGanCo1 = giaTriDonHang > 1000 && soLanMuaHang < 3;

// let laThanhVienVip = false;
// let yeuCauGiaoQuocTe = true;
// const biGanCo2 = !laThanhVienVip && yeuCauGiaoQuocTe;

// if (biGanCo1 || biGanCo2) {
//   console.log("Can xac minh");
// } else {
//   console.log("Khong can xac minh");
// }

// hoặc làm theo cách sau
let giaTriDonHang = 500;
let soLanMuaHang = 3;
let laThanhVienVip = false;
let yeuCauGiaoQuocTe = true;

const canXacMinh =
  (giaTriDonHang > 1000 && soLanMuaHang < 3) ||
  (!laThanhVienVip && yeuCauGiaoQuocTe);

if (canXacMinh) {
  console.log("Gan co can xac minh");
} else {
  console.log("Khong gan co can xac minh");
}

// 4. Xử lý tự động:
// - Nếu đơn hàng vượt qua tất cả các bước kiểm tra trên, nó sẽ được xử lý tự động. Robot sẽ thông báo "Đơn hàng được tự động xử lý và gửi đến bộ phận đóng gói".
// - Sau khi xử lý thành công, robot sẽ tăng biến đếm tổng số đơn hàng đã xử lý trong ngày (donHangDaXuLyTrongNgay) lên 1.

// let lichSuMuaHang = 10;
// let donHangDaXuLyTrongNgay = 152;
let donHangDaXuLyTrongNgay = 152;

if (!canXacMinh) {
  console.log("Don hang duoc tu dong xu ly va gui den bo phan dong goi");
  donHangDaXuLyTrongNgay += 1;
  console.log(`Don hang da duoc xu ly ${donHangDaXuLyTrongNgay}`);
} else {
  console.log("Don hang can xac minh thu cong");
}

// 1. Kiểm tra trạng thái hệ thống: Robot chỉ hoạt động nếu hệ thống không bị vô hiệu hóa thủ công (!heThongBiVoHieuHoa). Nếu bị vô hiệu hóa, nó sẽ không làm gì cả.
let heThongBiVoHieuHoa = false;
if (!heThongBiVoHieuHoa) {
  console.log("Robot hoat dong");
} else {
  console.log("Robot khong lam gi ca");
}
// 2 . Ưu tiên hàng đầu - Xử lý khẩn cấp:
// Nếu nhiệt độ (nhietDo) vượt quá 40°C, đây là tình huống nguy hiểm. Robot phải bỏ qua mọi việc khác, bật ngay lập tức hệ thống làm mát và phun sương, đồng thời gửi cảnh báo khẩn cấp.
let nhietDo = 25;
if (nhietDo > 40) {
  // console.log("Tinh huong nguy hiem");
  console.log("🚨 Nhiet do vuot nguong nguy hiem");
  console.log("❄️ Bat he thong lam mat");
  console.log("💧 Phun suong");
  console.log("📢 Gui canh bao khan cap");
}

// 3. Logic tưới tiêu (khi không có tình huống khẩn cấp):
// Robot sẽ bật máy bơm nước nếu CẢ HAI điều kiện sau được thoa mãn:
// a. Độ ẩm đất (doAmDat) dưới 30%.
// b. Lượng nước trong bình chứa (binhNuoc_Lit) vẫn còn trên 5 lít.
// Khi bật máy bơm, lượng nước trong bình sẽ giảm đi 10 lít và biến đếm số lần tưới trong ngày (soLanTuoiTrongNgay) sẽ tăng lên 1.
let doAmDat = 20;
let binhNuoc_Lit = 100;
let soLanTuoiTrongNgay = 2;

const batMayBomNuoc = doAmDat < 30 && binhNuoc_Lit > 5;

if (batMayBomNuoc) {
  console.log("Bat may bom nuoc");
  binhNuoc_Lit -= 10;
  soLanTuoiTrongNgay += 1;
  console.log(
    `Khi bat may bom, luong nuoc trong binh con ${binhNuoc_Lit} va so lan tuoi trong ngay la ${soLanTuoiTrongNgay} `,
  );
} else {
  console.log("Khong bat may bom nuoc");
}

// 4. Logic phòng trừ sâu bệnh (chỉ chạy khi không tưới nước):
// Robot sẽ phun thuốc trừ sâu nếu MỘT TRONG HAI kịch bản sau xảy ra:
// a. Cảm biến phát hiện có sâu bệnh (phatHienSauBenh là true).
// b. Độ ẩm không khí (doAmKhongKhi) lớn hơn 80% VÀ nhiệt độ trên 28°C (môi trường lý tưởng cho nấm mốc phát triển).
// Khi phun thuốc, lượng thuốc trong bình (binhThuocTruSau_mL) sẽ giảm đi 50mL. Nếu bình đã hết thuốc, robot phải gửi cảnh báo.
// Trạng thái bình thường:
// Nếu không có hành động nào ở trên được thực hiện, robot sẽ báo cáo "Mọi chỉ số đều ổn định".
let phatHienSauBenh = false;
let doAmKhongKhi = 70;
let binhThuocTruSau_mL = 200;

const roBotPhunThuocTruSau =
  !batMayBomNuoc && (phatHienSauBenh || (doAmKhongKhi > 80 && nhietDo > 28));
if (roBotPhunThuocTruSau) {
  console.log("Robot se phun thuoc tru sau");
  binhThuocTruSau_mL -= 50;
  if (binhThuocTruSau_mL <= 0) {
    console.log("Robot phai gui canh bao");
  }
} else {
  console.log("Robot bao cao: Moi chi so deu on dinh");
}
// let heThongBiVoHieuHoa = false;
// let binhNuoc_Lit = 100;
// let binhThuocTruSau_mL = 200;
// let soLanTuoiTrongNgay = 2;
// let nhietDo = 25;
// let doAmDat = 50;
// let doAmKhongKhi = 70;
// let phatHienSauBenh = false;
