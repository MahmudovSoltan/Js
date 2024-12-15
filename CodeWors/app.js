// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

// function sumMul(n,m){
//     // console.log(n);
//     let sum = 0
//   for (let i=n; i <m; i++) {
//      if (i%n==0) {
//       sum += i
//      }
//     }
//     if (sum>0) {
//         return sum
//     }else{
//         return "INVALID"
//     }
// }

// console.log(sumMul(3, 13));

// assert.strictEqual(litres(2), 1, 'should return 1 litre');
// assert.strictEqual(litres(1.4), 0, 'should return 0 litres');
// assert.strictEqual(litres(12.3), 6, 'should return 6 litres');
// assert.strictEqual(litres(0.82), 0, 'should return 0 litres');
// assert.strictEqual(litres(11.8), 5, 'should return 5 litres');
// assert.strictEqual(litres(1787), 893, 'should return 893 litres');
// assert.strictEqual(litres(0), 0, 'should return 0 litres');

// function litres(time) {
//   let rselte = Math.floor(time);
//   let rselte2 = rselte / 2;
//   return Math.floor(rselte2);
// }

// console.log(litres(1787));
// assert.deepEqual(createArray(1),[1]);
// assert.deepEqual(createArray(2),[1,2]);
// assert.deepEqual(createArray(3),[1,2,3]);
// assert.deepEqual(createArray(4),[1,2,3,4]);
// assert.deepEqual(createArray(5),[1,2,3,4,5]);

// function createArray(number){
//    var newArray = [];

//    for(var counter = 1; counter <= number; counter++){
//      newArray.push(counter);
//    }
//    return newArray;
//  }

//  console.log(createArray(5));

// test('', null);
// test('1', null);
// test('A1,B2', null);
// test('1,2,3', '2');
// test('1,2,3,4', '2 3');
// test('A1,B2,C3,D4,E5', 'B2 C3 D4');
// test('A,1,23,456,78,9,Z', '1 23 456 78 9');

let words = "A1,B2,C3,D4,E5";
// words.recerce()
// console.log(words);

// let arrWor = words.split(",");
// arrWor.shift();
// arrWor.pop()
// let string = arrWor.toString(" ")
// console.log(string);

// console.log(arrWor);
function array(string) {
  let arrWor = string.split(",");
  arrWor.shift();
  arrWor.pop();
  let strings = arrWor.toString("");
  const replace = strings.replaceAll(",", " ");
  if (replace == 0) {
    return null;
  } else {
    return replace;
  }
}

// console.log( array('A1,B2,C3,D4,E5'));

// assert.strictEqual(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
// assert.strictEqual(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
// assert.strictEqual(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
// assert.strictEqual(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
// assert.strictEqual(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
// assert.strictEqual(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
// assert.strictEqual(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
// assert.strictEqual(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");

function getDrinkByProfession(param) {
  let string = "";
  let word = param.toLocaleLowerCase();
  console.log(word);

  switch (word) {
    case "jabroni":
      string = "Patron Tequila";
      break;
    case "school counselor":
      string = "Anything with Alcohol";
      break;
    case "programmer":
      string = "Hipster Craft Beer";
      break;
    case "bike gang member":
      string = "Moonshine";
      break;
    case "politician":
      string = "Your tax dollars";
      break;
    case "pundit":
      string = "Beer";
      break;
    case "pug":
      string = "Beer";
      break;
    case "rapper":
      string = "Cristal";
      break;
    default:
      string = "Beer";
      break;
  }
  return string;
}

// console.log(getDrinkByProfession("poLiTiCian"));
// assert.strictEqual(billboard("Jeong-Ho Aristotelis"), 600);
// assert.strictEqual(billboard("Abishai Charalampos"), 570);
// assert.strictEqual(billboard("Idwal Augustin"), 420);
// assert.strictEqual(billboard("Hadufuns John",20), 260);
// assert.strictEqual(billboard("Zoroaster Donnchadh"), 570);
// assert.strictEqual(billboard("Claude Miljenko"), 450);
// assert.strictEqual(billboard("Werner Vígi",15), 165);
// assert.strictEqual(billboard("Anani Fridumar"), 420);
// assert.strictEqual(billboard("Paolo Oli"), 270);
// assert.strictEqual(billboard("Hjalmar Liupold",40), 600);
// assert.strictEqual(billboard("Simon Eadwulf"), 390);

function billboard(name, price = 30) {
  let number = 0;

  for (let i = 0; i < name.length; i++) {
    number += price;
  }
  return number;
}

// console.log(billboard("Werner Vígi",15));

// assert.strictEqual(calculateAge(2012, 2016),"You are 4 years old.");
// assert.strictEqual(calculateAge(1989, 2016),"You are 27 years old.");
// assert.strictEqual(calculateAge(2000, 2090),"You are 90 years old.");
// assert.strictEqual(calculateAge(2000, 1990),"You will be born in 10 years.");
// assert.strictEqual(calculateAge(3400, 3400),"You were born this very year!");
// assert.strictEqual(calculateAge(900, 2900),"You are 2000 years old.");
// assert.strictEqual(calculateAge(2010, 1990),"You will be born in 20 years.");
// assert.strictEqual(calculateAge(2010, 1500),"You will be born in 510 years.");
// assert.strictEqual(calculateAge(2011, 2012),"You are 1 year old.");
// assert.strictEqual(calculateAge(2000, 1999),"You will be born in 1 year.");
function calculateAge(a, b) {
  let age = 0;

  if (b - a == 1) {
    age = b - a;
    let result = "You are 1 year old.";
    return result;
  } else if (b - a == -1) {
    age = b - a;
    let abs = Math.abs(age);
    let result2 = `You will be born in ${abs} year.`;
    return result2;
  } else if (b - a > 1) {
    age = b - a;
    let result = `You are ${age} years old.`;
    return result;
  } else if (b - a < 0) {
    age = b - a;
    let abs = Math.abs(age);
    let result2 = `You will be born in ${abs} years.`;
    return result2;
  } else if (b - a == 0) {
    age = b - a;
    let result3 = "You were born this very year!";
    return result3;
  }
}

// console.log(calculateAge(2011, 2012));

// assert.strictEqual(getASCII('A'),65)
// assert.strictEqual(getASCII(' '),32)
// assert.strictEqual(getASCII('!'),33)
// function getASCII(c){
//   const carAt = c.charCodeAt()
//   return carAt
//  }

//  console.log(getASCII('!'));

// assert.strictEqual(isOrthogonal([1,2],[2,1]),false);
// assert.strictEqual(isOrthogonal([1,-2],[2,1]),true);
// assert.strictEqual(isOrthogonal([7,8],[7,-6]),false);
// assert.strictEqual(isOrthogonal([-13,-26],[-8,4]),true);
// assert.strictEqual(isOrthogonal([1,2,3],[0,-3,2]),true);
// assert.strictEqual(isOrthogonal([3,4,5],[6,7,-8]),false);
// assert.strictEqual(isOrthogonal([3,-4,-5],[-4,-3,0]),true);
// assert.strictEqual(isOrthogonal([1,-2,3,-4],[-4,3,2,-1]),true);
// assert.strictEqual(isOrthogonal([2,4,5,6,7],[-14,-12,0,8,4]),true);
// assert.strictEqual(isOrthogonal([5,10,1,20,2],[-2,-20,-1,10,5]),false);
function isOrthogonal(u, v) {
  let sum = 0;
  for (let i = 0; i < u.length; i++) {
    sum += u[i] * v[i];
  }
  if (sum == 0) {
    return true;
  } else {
    return false;
  }
}
//  console.log(isOrthogonal([5,10,1,20,2],[-2,-20,-1,10,5]));

// assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god', `Input: "The quick brown fox jumps over the lazy dog."`);
// assert.strictEqual(reverseWords('apple'), 'elppa', `Input: "apple"`);
// assert.strictEqual(reverseWords('a b c d'), 'a b c d', `Input: "a b c d"`);
// assert.strictEqual(reverseWords('  double  spaced  words  '), '  elbuod  decaps  sdrow  ', `Input: "  double  spaced  words  "`);

function reverseWords(str) {
  let strArr = str.split("").join("");
  let rcerseWord = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rcerseWord += strArr[i];
  }
  let ar = rcerseWord.split(" ");
  let arr2 = [];
  for (let i = ar.length - 1; i >= 0; i--) {
    arr2.push(ar[i]);
  }
  return arr2.join(" ");
}

// console.log(reverseWords('apple'));
var arr = [1, 2];

// Test.assertEquals(arr[0], 2, "Failed swapping numbers")
// Test.assertEquals(arr[1], 1, "Failed swapping numbers")
function swapValues() {
  var args = Array.prototype.slice.call(arguments);
}
// console.log(swapValues(arr[0]));

// assert.strictEqual(isPronic(0),true,'0 is a Pronic Number');
// assert.strictEqual(isPronic(1),false,'1 is not a Pronic Number');
// assert.strictEqual(isPronic(2),true,'2 is a Pronic Number');
// assert.strictEqual(isPronic(3),false,'3 is not a Pronic Number');
// assert.strictEqual(isPronic(4),false,'4 is not a Pronic Number');
// assert.strictEqual(isPronic(5),false,'5 is not a Pronic Number');
// assert.strictEqual(isPronic(6),true,'6 is a Pronic Number');
// assert.strictEqual(isPronic(-3),false,'-3 is not a Pronic Number');
// assert.strictEqual(isPronic(-27),false,'-27 is not a Pronic Number');

function isPronic(n) {
  let result = false;
  for (let i = 0; i <= n; i++) {
    if (i * (i + 1) == n) {
      result = true;
      return result;
    }
  }
  return result;
}

// console.log(isPronic(1));
// assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
// assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
// assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
// assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])

// function friend(friends){

//  let arr = friends.filter((item)=>{
//     return item.length == 4
//   })
// return arr
// }

// console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));

// let a = [1,2,3,4]

// let a2 = []
// a2.push(a)
// console.log(a2);
//  a=[3]
//  console.log(a);

// assert.strictEqual(toCsvText([
//   [ 0, 1, 2, 3, 45 ],
//   [ 10,11,12,13,14 ],
//   [ 20,21,22,23,24 ],
//   [ 30,31,32,33,34 ]
//  ] ), '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34');

// assert.strictEqual(toCsvText([
//   [ -25, 21, 2, -33, 48 ],
//   [ 30,31,-32,33,-34 ]
//  ] ), '-25,21,2,-33,48\n30,31,-32,33,-34');

// assert.strictEqual(toCsvText([
//   [ 5,55,5,5,55 ],
//   [ 6,6,66,23,24 ],
//   [ 666,31,66,33,7 ]
//  ] ), '5,55,5,5,55\n6,6,66,23,24\n666,31,66,33,7');
// });
// 'Testing №2 for "Q♠"', () => assert.strictEqual(defineSuit('Q♠'), 'spades'));
//   it('Testing №3 for "9♦"', () => assert.strictEqual(defineSuit('9♦'), 'diamonds'));
//   it('Testing №4 for "J♥"', () => assert.strictEqual(defineSuit('J♥'), 'hearts'))

// let candidate1 = { minSalary: 120000 },
//     job1 = { maxSalary: 130000 },
//     job2 = { maxSalary: 80000 };

// Test.assertEquals(match(candidate1, job1), true);
// Test.assertEquals(match(candidate1, job2), false);
//   });

let candidate1 = { minSalary: 120000 };
let job1 = { maxSalary: 130000 };
let job2 = { maxSalary: 80000 };
function match(candidate, job) {
  if (job.maxSalary ===0||candidate.minSalary===0) {
    return false
  }
  else if (candidate.minSalary >= 190000) {
    if (job.maxSalary - (candidate.minSalary * 10) / 100 >= 0) {
      return true;
    } else {
      return false;
    }
  } else if (job.maxSalary - candidate.minSalary > 0) {
    return true;
  } else {
    return false;
  }
}
// console.log(match(candidate1, job2));
function Counter(value) {
  this.value = value; 
}

Counter.prototype.increase = function() {
return  this.value = this.value+1
};

Counter.prototype.getValue = function() {
  return this.value;
};

Counter.prototype.reset = function () {
  this.value = 0;
};
const coun1 = new Counter(-1)


