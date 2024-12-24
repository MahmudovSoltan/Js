// const bankAccount = new BankAccount("John",500);
// console.log(bankAccount.deposit(200));
// console.log(bankAccount.withdraw(300));
// console.log(bankAccount.getBalance());
// console.log(bankAccount.getHistory());

// class Library {
//   books = [];
//   constructor(bookName,bookAuthor){
//     this.bookName = bookName;
//     this.bookAuthor = bookAuthor;
//   }
//   addBook(bookName,bookAuthor){
//     this.books.push(bookName,bookAuthor);
//     return this.books;
//   }
//  getFindBook (bookName){
//    return this.books.find(book => book.title === title);
//  }
// }

// const library1 = new Library();

// library1.addBook("The Alchemist","Paulo Coelho")
// console.log(library1.getFindBook("The Alchemist"));

// startEngine():
// Starts the car engine if it is not already running and if there is fuel in the tank.
// If the engine is already on or there's no fuel, it provides a warning message.

// class Car {
//   engineStatus = false;
//   constructor(brand, model, fuelLevel) {
//     this.brand = brand;
//     this.model = model;
//     this.fuelLevel = fuelLevel;
//   }
//   startEngine() {
//     if (this.engineStatus) {
//       return `${this.brand} ${this.model} engine is already on`;
//     } else if (this.fuelLevel > 0) {
//       this.engineStatus = true;
//       return `${this.brand} ${this.model} engine started`;
//     } else {
//       return "Car is not running";
//     }
//   }
//   stopEngine() {
//     if (this.engineStatus) {
//       this.engineStatus = false;
//       return `${this.brand} ${this.model} engine is now off`;
//     } else {
//       return `${this.brand} ${this.model} engine is already off`;
//     }
//   }

//   refuel(fuel) {
//     this.fuelLevel += fuel;
//     return `${this.brand} add ${fuel} and  ${this.fuelLevel} fuel level`;

//   }
// }

// const model1 = new Car("Kia", "Forte", 20);

// console.log(model1.startEngine());
// console.log(model1.stopEngine());
// console.log(model1.refuel(10));

// const hour = prompt("Enter the hour");
// const minute = prompt("Enter the minute");
// const second = prompt("Enter the second");

// const hour = 10
// const minute = 20
// const second = 30

// const hour_time = document.querySelector("#hour");
// const minute_time = document.querySelector("#minute");
// const second_time = document.querySelector("#second");

// function timeCalculate() {
//   second_time.innerHTML = second;
//   minute_time.innerHTML = minute;
//   hour_time.innerHTML = hour;

// }

// setInterval(timeCalculate(), 1000);

const hour = parseInt(prompt("Enter the hour"));
const minute = parseInt(prompt("Enter the minute"));
const second = parseInt(prompt("Enter the second"));

const hour_time = document.querySelector("#hour");
const minute_time = document.querySelector("#minute");
const second_time = document.querySelector("#second");

function timeCalculate(hour, minute, second) {
  second_time.innerHTML = second.toString().padStart(2, "0");
  minute_time.innerHTML = minute.toString().padStart(2, "0");
  hour_time.innerHTML = hour.toString().padStart(2, "0");
}

let currentHour = hour;
let currentMinute = minute;
let currentSecond = second;

function updateTime() {
  currentSecond--;
  if (currentSecond < 0) {
    currentMinute--;
  } else if (currentSecond === 0) {
    currentSecond = 59;
    currentMinute--;
    if (currentMinute === 0) {
      currentMinute = 59;
      currentHour--;
      if (currentHour === 0) {
        currentHour = 23;
      }
    }
  } else {
  }

  timeCalculate(currentHour, currentMinute, currentSecond);
}

timeCalculate(currentHour, currentMinute, currentSecond);
setInterval(updateTime, 1000);
