// De bai
// let dangBaoTri = false;
// let soLuongDat = 2;
// let donHangDaXuLyTrongNgay = 152;
// let tonKho = 20;
// let giaTriDonHang = 1000; // Bằng 1000, không lớn hơn
// let lichSuMuaHang = 3; // Bằng 3, không nhỏ hơn
// let laThanhVienVip = true; // Kích hoạt
// let yeuCauGiaoQuocTe = true; // Kích hoạt

// if (dangBaoTri === false) {
//   console.log("Robot hoat dong");
//   //doan check ton kho neu kho hang ko bao tri
//   if (soLuongDat > tonKho) {
//     console.log("Huy don hang do ko du ton kho va dung lai");
//   } else {
//     tonKho--;
//     console.log(`Giu ${tonKho}`);
//     const canXacMinh =
//       (giaTriDonHang > 1000 && lichSuMuaHang < 3) ||
//       (!laThanhVienVip && yeuCauGiaoQuocTe);
//     if (canXacMinh) {
//       console.log("can xac minh");
//     } else {
//       donHangDaXuLyTrongNgay++;
//       console.log(
//         `Don hang so ${donHangDaXuLyTrongNgay} dang duoc tu dong xu ly`,
//       );
//     }
//   }
// } else {
//   console.log("Robot  bao tri va dung ngay lap tuc");
// }

//ham for
// for (let index = 0; index < 5; index++) {
//   if (index === 3) break;

//   console.log("So bao nhieu", index);
// }

// // For...of
// const colors = ["Red", "Green", "Blue"];
// for (const color of colors) {
//   console.log(color);
// }

// // forEach
// colors.forEach(function (mau, index) {
//   console.log("Mau gi", mau, "dang o vi tri so ", index);
// });

// return: tra ve mot gia tri. Ket thuc ham ngay lap tuc
// function tinhTong(a, b) {
//   const result = a + b;
//   return result;
// }
// const sum = tinhTong(3, 5);
// console.log(sum);

// function checkAccess(age) {
//   if (age < 18) {
//     console.log("Chua du tuoi moi ban ra ngoai");
//     return;
//   }
//   console.log("Du tuoi vao.moi ban");
// }

// checkAccess(15);
// // checkAccess(20);

// const tickets = ["Thuong", "Thuong", "VIP", "Thuong", "VIP"];

// for (const ticket of tickets) {
//   console.log(`Dang kiem tra ve: ${ticket}`);
//   if (ticket === "VIP") {
//     console.log("Moi ban vao");
//     break;
//   }
// }

// forEach: khong dung break
// forEach(function(item){})

// const tickets = ["Thuong", "Thuong", "VIP", "Thuong", "VIP"];
// let foundVIP = false;

// tickets.forEach(function (item) {
//   if (foundVIP) {
//     console.log(`Da tim thay VIP, nhung van liec qua ve: ${item}`);
//     return;
//   }
//   console.log(`Dang kiem tra ve ${item}`);
//   if (item === "VIP") {
//     console.log("Da tim thay ve VIP moi vao");
//     foundVIP = true;
//   }
// });

// ===> Tìm dòng log đầu tiên ghi nhận
// 1 đợt đăng nhập thất bại (status=FAIL)
// của dịch vụ xác thực service=user_auth
// ===> Dùng kỹ thuật để xử lỹ chuỗi để trích xuất
// ra mã người dùng (uid) và mã lỗi err_code
// ===> Ngay sau khi trích xuất thành công, dừng lại
// và không xử lý các dòng log còn lại.

// const logEntries = [
//   "t=1m service=PAYMENT status=OK uid=101",
//   "t=2m service=USER_AUTH status=FAIL uid=205 err_code=401",
//   "t=3m service=INVENTORY status=OK uid=302",
//   "t=4m service=USER_AUTH status=OK uid=205",
//   "t=5m service=USER_AUTH status=FAIL uid=404 err_code=404",
// ];

// let failedLoginInfo = null;
// for (const logEntry of logEntries) {
//   if (
//     logEntry.includes("service=USER_AUTH") &&
//     logEntry.includes("status=FAIL")
//   ) {
//     console.log(`Tim thay dong log dau tien ${logEntry}`);

//     const parts = logEntry.split(" ");
//     console.log(`sau khi tach chuoi thanh mang, ${parts}`);
//     let uid = null;
//     let errCode = null;
//     for (const part of parts) {
//       if (part.startsWith("uid=")) {
//         uid = part.replace("uid=", "");
//       }
//       if (part.startsWith("err_code=")) {
//         errCode = part.slice("err_code=".length);
//       }
//     }
//     failedLoginInfo = { uid: uid, errCode: errCode };
//     console.log("Da tim thay log thich hop");
//     break;
//   }
// }
// console.log("Thong tin da tim thay la", failedLoginInfo);

// // mang:map
// const numbers = [1, 2, 3, 4, 5, 6];
// const doubleNumber = numbers.map(function (number) {
//   return number * 2;
// });
// console.log("Mang ban dau", numbers);
// console.log("Mang sau khi bien doi", doubleNumber);

// const dailySales = [50, 65, 60, 80, 75];
// const saleTrend = dailySales.map(function (currentItem, index, array) {
//   if (index === 0) {
//     return `Ngay 1: ${currentItem} {Bat dau}`;
//   }
//   const previousSale = array[index - 1];
//   const change = currentItem - previousSale;

//   return `Ngay ${index + 1}: ${currentItem} Thay doi ${+change}`;
// });

// Bai 1: In ra toàn bộ mảng
// const fruits = ["tao", "cam", "xoai", "chuoi"];
// console.log(fruits.length);

// Bài 2 — Lấy phần tử theo vị trí
// In ra phần tử đầu tiên, In ra phần tử thứ 2,
// In ra phần tử cuối cùng
// const colors = ["do", "xanh", "vang", "tim"];
// for (const color of colors) {
//   if (color === "vang") {
//     continue;
//   } else {
//     console.log(color);
//   }
// }
// Hoặc làm theo cách sau
// const colors = ["do", "xanh", "vang", "tim"];
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[colors.length - 1]);

// // Bài 3 — Thay đổi giá trị trong mảng
// // const animals = ["cho", "meo", "ga"];
// // const replaceGa = animals.replace("ga", "vit");
// // console.log(animals);
// // Giải như trên là sai bản chất -> replace dùng cho string, không dùng cho hàm
// // Hoặc giải như sau
// const animals = ["cho", "meo", "ga"];
// animals[2] = "vit";
// console.log(animals);

// // Bài 4 — Thêm phần tử vào cuối mảng
// const subjects = ["Toan", "Van", "Anh"];
// subjects.push("Ly");
// console.log(subjects);

// // Bài 5 — Xóa phần tử cuối
// const numbers = [10, 20, 30, 40];
// numbers.pop();
// console.log(numbers);

// // Bài 8 — In từng phần tử bằng for
// const fruits = ["tao", "cam", "xoai"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits);
// }

// Bài 9 — Tính tổng các số trong mảng
// const scores = [5, 10, 15, 20];

// let total = 0;
// for (let i = 0; i < scores.length; i++) {
//   total = total + scores[i];
// }
// console.log(total);

// // Bài 11 — In từng phần tử bằng for...of
// const drinks = ["tra", "cafe", "nuoc loc"];
// for (const drink of drinks) {
// //   console.log(drink);
// // }

// // Bài 12 — Đếm có bao nhiêu số chẵn
// const numbers = [2, 5, 8, 9, 12, 13];

// let count = 0;
// for (const number of numbers) {
//   if (number % 2 === 0) {
//     count++;
//   }
// }
// console.log(count);

// // Bài 13 — In từng tên học sinh
// const students = ["An", "Binh", "Chi"];
// students.forEach(function (student) {
//   console.log(student);
// });

// // Bài 14 — In cả vị trí và giá trị
// const products = ["ban phim", "chuot", "man hinh"];
// products.forEach(function (item, index) {
//   console.log(`San pham ${index + 1}: ${item}`);
// });

// PHẦN 6 — map()
//Bài 15 — Nhân đôi từng số
// const numbers = [1, 2, 3, 4];
// const result = numbers.map(function (item) {
//   return item * 2;
// });
// console.log(result);

// Bài 16 — Thêm chữ vào từng phần tử
// const names = ["An", "Binh", "Chi"];
// const newName = names.map(function (item) {
//   return `Xin chao ${item}`;
// });
// console.log(newName);

// PHẦN 7 — filter()
//Bài 19 — Lọc số chẵn
// const numbers = [1, 2, 3, 4, 5, 6];
// const locSoChan = numbers.filter(function (item) {
//   return item % 2 === 0;
// });
// console.log(locSoChan);

// //Bài 20 — Lọc điểm đậu
// const scores = [3, 5, 7, 4, 8];
// const diemDau = scores.filter(function (score) {
//   return score >= 5;
// });
// console.log(diemDau);

//Bài 26 — Phân tích điểm số học sinh
const scores = [8, 5, 9, 4, 6, 3, 10];

// let totalScore = 0;
// for (let i = 0; i < scores.length; i++) {
//   totalScore = totalScore + scores[i];
// }
// console.log(totalScore);

// Hoặc
// let total = 0;
// for (const score of scores) {
//   total += score;
// }
// console.log(total);

// Tìm điểm cao nhất
let max = scores[0];
const maxScore = scores.filter(function (score) {
  if (score > max) {
    console.log(`Diem cao nhat la ${max}`);
  }
});
