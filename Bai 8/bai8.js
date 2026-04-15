// function tinhToanNang() {
//   console.log("Bat dau tinh toan nang...ca chuong trinh se bi treo");
//   let counter = 0;
//   const startTime = Date.now();

//   function runHeavyTask() {}
//   while (Date.now() - startTime < 3000) {}
//   console.log("Tinh toan nang da xong");
// }

// console.log("Chuong trinh bat dau");
// setInterval(() => console.log("Tich tac..."), 1000);
// tinhToanNang();
// console.log("Chuong trinh ket thuc");

// function kiemTraTuoi(tuoi) {
//   return new Promise();
// }

// 1. function declaration: khai báo hàm tường minh
// setInterval
// Ví dụ 1:
// function showNotification() {
//   console.log("Bạn có xxx tin chưa đọc");
// }
// setInterval(showNotification, 2000);

// Ví dụ 2:
// function updateTime() {
//   let currentTime = new Date();
//   console.log(currentTime);
// }
// setInterval(updateTime, 1000);

// Ví dụ 3:
// let counter = 0;
// function count() {
//   console.log(counter++);
// }
// setInterval(count, 1000);

// 2. function expression
// let counter = 0;
// let count = function () {
//   console.log(counter++);
// };
// setInterval(count, 1000);

// 3. arrow function -> bỏ function
// let counter = 0;
// let count = () => {
//   console.log(counter++);
// };
// setInterval(count, 1000);

// 4. Hủy lặp
// let counter = 0;
// let count = function () {
//   console.log(counter++);
//   if (counter === 5) {
//     clearInterval(stopInterval);
//   }
// };
// // Step 1: Gán biến để nhận giá trị trả về
// let stopInterval = setInterval(count, 1000);

// base-objects
// --BasePage.js -> class cha chứa các hành động chung
// --LoginPage.js -> class cho trang đăng nhập
// -- HomePage.js -> class cho trang chủ

// File basePage.js
class BasePage {
  constructor(page, url) {
    this.page = page;
    this.url = url;
  }
  async navigateTo() {
    console.log(`ACTION: dang dieu huong toi trang ${this.url}`);
  }
}
