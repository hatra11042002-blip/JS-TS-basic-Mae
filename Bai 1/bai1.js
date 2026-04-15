// alert("Xin chao cac ban");

// console.log("Minh la JS");

// let Diemso;
// Diemso = 8;
// console.log(Diemso);

// Diemso = 10;
// console.log(Diemso);

// // const không đổi giá trị
// const soPi = 3.14;
// console.log(soPi);
// soPi = 3.15;
// console.log(soPi);

// const tenTestCase = "TC01-Login";
// const trangThai = "Passed";
// const thoigianChay = 3500;
// console.log(
//   "Testcase:" +
//     tenTestCase +
//     "-Status" +
//     trangThai +
//     "-Duration" +
//     thoigianChay,
// );

// const tenTestCase = "TC02-Logout";
// const trangThai = "failed";
// console.log("Testcase:", tenTestCase, "-Status", trangThai);

// const tenTestCase = "TC03-Registration";
// const thoigianChay = 3500;
// console.log(`Testcase: ${tenTestCase}-Duration: ${thoigianChay * 2}`);

// const Soluong = 2;
// const Gia = 25000;
// const thueVAT = 0.1;
// console.log(`Quantity:${Soluong}-Total price:${Gia * 2 * 0.1}`);

// let loiChao = "Xin chao buoi sang";
// const tenSach = "Lap tring JS";
// console.log(typeof loiChao);

// let tuoi = 30;
// const PI = 3.14;
// console.log(typeof tuoi);
// console.log(typeof PI);

// let denDangBat = true;
// let daTotNghiep = false;
// console.log(typeof denDangBat);
// console.log(typeof daTotNghiep);

// Bai 1
const targetURL = "https://anhtester.com";
let defaultTimeout = 5000;
let isHeadlessMode = true;

console.log(
  `URL: ${targetURL} - Timeout: ${defaultTimeout} - Headless: ${isHeadlessMode} `,
);

// Bai 2
const testUsername = "tomsmith";
const testPassword = "SuperSecretPassword!";
console.log(`Bắt đầu đăng nhập với người dùng: ${testUsername}...`);

// Bai 3

// let testResult;
// let errorMessage = null;
// console.log(typeof testResult);
// console.log(typeof errorMessage);

// let isTestPassed = errorMessage === null;
// if (errorMessage === null) {
//   console.log("Không lỗi");
// }

// Chữa bài

// let testResult;
// let errorMessage = null;

// console.log("testResult:", testResult, "- type:", typeof testResult);
// console.log("errorMessage:", errorMessage, "- type:", typeof errorMessage);

// let isTestPassed = errorMessage === null;

// if (isTestPassed) {
//   console.log("TEST PASSED - Không có lỗi");
// } else {
//   console.log("TEST FAILED - Lỗi:", errorMessage);
// }

// Bai 4
const tongSoTestCase = 50;
let soTestPass = 45;
let soTestFail = 3;
const thoiGianThucThi = 120.5;

let soTestSkip = tongSoTestCase - soTestFail - soTestPass;
let tiLePass = (soTestPass / tongSoTestCase) * 100;
let thoiGianTrungBinh = thoiGianThucThi / tongSoTestCase;
console.log(
  `Testcase bỏ qua:${soTestSkip}, tỉ lệ pass:${tiLePass}, thời gian trung bình:${thoiGianTrungBinh}`,
);
