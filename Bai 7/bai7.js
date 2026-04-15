// const tinhHieu = function (a, b) {
//   return a - b;
// };

// const ketQua = tinhHieu(8 - 5);
// console.log(ketQua);

// arrow function
// const tinhNhan = (a, b) => {
//   return a * b;
// };

// Hoisting function
// console.log(tong(1, 3));
// function tong(a, b) {
//   return a + b;
// }

// Hàm Class
// class Car {
//   // 1. class field
//   isEngineOn = false;
//   // constructor: nhận các thông tin riêng của từng chiếc xe
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   }
// 3. Method
//   startEngine = () => {
//     this.isEngineOn = true;
//     console.log(`Dong co xe ${this.brand} da duoc khoi dong`);
//   };
//   displayInfo = () => {
//     console.log(`Day la chiec xe ${this.brand} mau ${this.color}`);
//   };
// }
// const car1 = new Car("Toyota", "Den");
// console.log(`car1 co thuoc tinh ${car1.isEngineOn}`);
// car1.displayInfo();

// const car2 = new Car("Ford", "Trang");
// car2.startEngine();
// console.log(`isEngine sai khi start ${car2.isEngineOn}`);

// class NguoiDUng {
//   constructor(email, tenHienThi = "Khach", vaiTro = "user") {
//     this.email = email;
//     this.tenHienThi = tenHienThi;
//     this.vaiTro = vaiTro;
//   }
//   gioiThieu() {
//     console.log(
//       `Ten ${this.tenHienThi}, Email: ${this.email}, Vai tro: ${this.vaiTro}`,
//     );
//   }
// }
// const user1 = new NguoiDUng("user1@gmail.com");
// user1.gioiThieu();

// const user2 = new NguoiDUng("user2@gmail.com", "User2");
// user2.gioiThieu();

class BasePage {
  constructor(page, url) {
    this.page = page;
    this.url = url;
  }
  async navigateTo() {
    console.log(`ACTION: dang diu huong toi trang ${this.url}`);
  }
}
