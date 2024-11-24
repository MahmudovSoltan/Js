// const arr = [1, 2, 3, 4];

// function doubleNumber(nums) {
//   nums.map((item) => console.log(item * item));
// }

// doubleNumber(arr)

// const srudenName = ["Ali", "Veli", "Aysel"];

// function uppareCaseName(names) {
//   names.map((item) => console.log(item.toUpperCase()));
// }
// uppareCaseName(srudenName)

// const books = [
//   { name: "Book1", price: 50 },
//   { name: "Book2", price: 100 },
// ];

// function discount(products) {
//     // Yeni massiv qaytarılır
//     return products.map((item) => {
//       return {
//         ...item, // Əvvəlki obyektin bütün xüsusiyyətlərini saxla
//         price: item.price - (item.price * 20) / 100, // Endirimi tətbiq et
//       };
//     });
//   }

// console.log(discount(books));

// const number = [1, 2, 3, 4, 5, 6]

// function pairNumber(num) {
//   return  num.filter((item)=>item%2==0)
// }
// console.log(pairNumber(number));

// const users = [
//   { name: "Ali", age: 17 },
//   { name: "Aysel", age: 21 },
//   { name: "Ayla", age: 18 },
//   { name: "Aysu", age: 26 },
// ];

// function adultUsers(user) {
//     return user.filter((item) => item.age>18)
// }

// console.log(adultUsers(users));

// const products = [
//   { name: "Phone", inStock: true },
//   { name: "Laptop", inStock: false },
// ];

// function product(product) {
//          return product.filter((item) => item.inStock==true)
//  }

//  console.log(product(products));

// const number = [10, 20,55, 60, 80]

// function findNumber(number) {
//     return number.find((item)=>item>50)
// }

// console.log(findNumber(number));

// const products = [
//   { name: "Book", price: 50 },
//   { name: "Laptop", price: 150 },
// ];

//  function findProduct(produc) {
//      return produc.find((item)=>item.price>=100)
//  }
//  console.log(findProduct(products));

// const numb = [1, 2, 3]

// function number(num) {
//     return num.forEach(element => {
//         console.log(element);
        
//     });
// }
//  number(numb)

// const names = ["Ali", "Aysel"]

// function nam(n) {
//     return n.forEach(element => {
//         console.log("Salam "+element);
        
//     });
// }
// nam(names)

// const productPrice = [{price: 20}, {price: 30}, {price: 30}]

// function sumProductPrice (product) {
//     let sumprice = 0
//     product.forEach(element => {
//        sumprice += element.price
//     });
//     return sumprice
// }

// console.log(sumProductPrice(productPrice));
