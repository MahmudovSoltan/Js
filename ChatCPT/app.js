class Person {
    constructor(name,age,gender) {
        this.name = name;
        this.age = age;
        this.gender= gender;
    }

    introduce(){
      return `Hello, my name is ${this.name}  and I am ${this.age} years old ${this.gender}.`;
    }
    isAdult(){
      return this.age >= 18;
    }
}

const person1 = new Person("John",20,"male");
const person2 = new Person("John",16,"male");
// console.log(person1.introduce());
// console.log(person1.isAdult());
// console.log(person2.isAdult());


class Car {
   cuurentYear = new Date().getFullYear();

    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getCarInfo(){
        return `This is a ${this.year} ${this.brand} ${this.model}`;
    }
    isOld(){
        return this.cuurentYear - this.year >= 10;
    }

}

const newCar = new Car("Toyota","Corolla",2020);

//  console.log(newCar.getCarInfo());
//  console.log(newCar.isOld());

class BankAccount {
  accountHistory = [];
  constructor(accountHolderName,accountBalance){
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
  }
  deposit(amount){
    this.accountBalance += amount;
    this.accountHistory.push(`You deposited +$${amount}`);
    return this.accountBalance;
  }
  withdraw(amount){
    if(amount > this.accountBalance){
      return "Insufficient funds";
    }
    this.accountBalance -= amount;
    this.accountHistory.push(`You withdrew -$${amount}`);
    return this.accountBalance;
  }
  getBalance(){
    return this.accountBalance;
  }
  getHistory(){
    return this.accountHistory;
  }
}


// const bankAccount = new BankAccount("John",500);
// console.log(bankAccount.deposit(200));
// console.log(bankAccount.withdraw(300));
// console.log(bankAccount.getBalance());
// console.log(bankAccount.getHistory());


class Library {
  books = [];
  constructor(bookName,bookAuthor){
    this.bookName = bookName;
    this.bookAuthor = bookAuthor;
  }
  addBook(bookName,bookAuthor){
    this.books.push(bookName,bookAuthor);
    return this.books;
  }
 getFindBook (bookName){
   return this.books.find(book => book.title === title);
 }
}

const library1 = new Library();

library1.addBook("The Alchemist","Paulo Coelho")
console.log(library1.getFindBook("The Alchemist"));


