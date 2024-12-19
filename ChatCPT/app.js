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

// const products = {
//   apple: 150,
//   banana: 50,
//   orange: 100,
//   mango: 200,
// };

// const threshold = 100;
// const arrProduct =Object.entries(products)
// const  filterProduct = arrProduct.filter((item)=>item[1]>threshold)
// let result = []

// filterProduct.map((item)=>result.push(item[0])
// )
// console.log(result);

// const students = {
//     John: 85,
//     Emma: 92,
//     Sophia: 78,
//     Michael: 95,
//   };

const person = { name: "Soltan", age: 26, city: "Baku" };
const keyPerson = Object.keys(person);
// console.log(keyPerson);

const car = { brand: "Toyota", model: "Corolla", year: 2020 };
const carArr = Object.entries(car);
// carArr.map((item) => console.log(item));

const book = {
  title: "Think and Grow Rich",
  author: "Napoleon Hill",
  pages: 250,
};
book.publishedYear = 1937;
// console.log(book);

const scores = { math: 90, english: 85, history: 78 };
const scoresArr = Object.values(scores);
let sum = 0;
for (let i = 0; i < scoresArr.length; i++) {
sum+=scoresArr[i]  
}

// console.log(sum);


const user = { name: "Ali", age: 30, profession: "developer" };
user.age = user.age?user.age*2:25
// console.log(user);

const inventory = { apples: 5, oranges: 10, bananas: 15 };
inventory.apples +=2
inventory.bananas+=2
inventory.oranges+=2
// console.log(inventory);
const student = { name: "Leyla", age: 20, GPA: 3.8 };
const studentValu =Object.keys(student)
const lenghtStudentValu = studentValu.length
console.log(lenghtStudentValu);







const progressEl = document.querySelector("#progressEl");
const checkStatusBtn = document.querySelector("#checkStatusBtn");

const gozlemedeOlanData = window.navigator.getBattery();

gozlemedeOlanData.then(renderShow);

function renderShow(data) {
  console.log(data);

  const btLevel = data.level * 100; //? 98

  if (btLevel < 20) {
    alert("Zaryatkaya tax!");
  }

  progressEl.innerHTML = `${btLevel}%`;
  progressEl.style.width = `${btLevel}%`;

  if (data.charging) {
    progressEl.classList.add("progress-bar-striped", "progress-bar-animated");
  } else {
    progressEl.classList.remove(
      "progress-bar-striped",
      "progress-bar-animated"
    );
  }
}

checkStatusBtn.addEventListener("click", function () {
  window.location.reload();
});

function showLocation(data) {
  console.log("data", data);

  const lat = data.coords.latitude;
  const long = data.coords.longitude;

  const googMapStaticImg = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=14&size=600x300&maptype=roadmap&markers=color:red%7C40.3798,49.8486&style=feature:poi%7Cvisibility:off`;

  document.querySelector("#staticAddress").src = googMapStaticImg;
  console.log("lat", lat);
  console.log("long", long);
}

window.navigator.geolocation.getCurrentPosition(showLocation);









<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
  />
  <body class="bg-dark">
    <div class="w-50 mx-auto mt-5">
      <h1 class="display-2 text-center text-light">Battery Level</h1>
      <p class="lead text-center text-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni
        ipsum optio molestiae quis in cum possimus nostrum dicta aut adipisci
        reprehenderit deleniti, natus earum nihil, quos provident consequuntur
        nam?
      </p>

      <div class="progress">
        <div
          id="progressEl"
          class="progress-bar bg-warning text-dark"
          role="progressbar"
          style="width: 0%"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Loading...
        </div>
      </div>

      <div class="text-center mt-4">
        <button class="btn btn-warning" id="checkStatusBtn">
          Check Status
        </button>
      </div>
    </div>

    <!-- More detailed map -->
    <img
      id="staticAddress"
      src="https://maps.googleapis.com/maps/api/staticmap?center=40.3798,49.8486&zoom=14&size=600x300&maptype=roadmap&markers=color:red%7C40.3798,49.8486&style=feature:poi%7Cvisibility:off"
      alt="Detailed Static Map"
    />
    <script src="./index.js"></script>
  </body>
</html>