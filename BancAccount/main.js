const depositInput = document.querySelector("#deposit");
const withdrawInput = document.querySelector("#withdraw");
const depositAddBtn = document.querySelector("#depositAdd");
const withdrawAddBtn = document.querySelector("#withdrawAdd");
const balanceDiv = document.querySelector("#balance");
const historyDiv = document.querySelector("#history");
const history = document.querySelector("#historyBtn");
let number = 0;

function BancAccount(balance) {
  this.balance = balance;
  this.history = [];

  this.addBalance = function (money) {
    this.balance += money;
    this.history.push(`+${money}`);
    const result = ` balance is ${this.balance} ₼`;
    balanceDiv.innerHTML = `${this.balance} ₼`;
    console.log(result);
  };

  this.withdrawBalance = function (money) {
    if (this.balance >= money) {
      this.balance -= money;
      this.history.push(`-${money}`);
    } else {
      alert("Not enough balance");
    }
    if (history!=[]) {
      balanceDiv.innerHTML = `${this.balance} ₼`;
    }
  };

  this.showHistory = function () {
    historyDiv.innerHTML = this.history.join("<br>");
  };
}

const user1 = new BancAccount(0);

depositAddBtn.addEventListener("click", () => {
  number = Number(depositInput.value);
  depositInput.value = "";
  console.log(number);
  user1.addBalance(number);

  return number;
});
withdrawAddBtn.addEventListener("click", () => {
  number = withdrawInput.value;
  user1.withdrawBalance(number);
  console.log(user1.balance);
  withdrawInput.value = "";
});

history.addEventListener("click", () => {
  user1.showHistory();
});
