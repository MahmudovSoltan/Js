// let  numberOne=5
// let numberTwo = 10

// if (numberOne<numberTwo) {
//     console.log("The little number of 5 and 10 is 5.");

// }
// if(numberTwo>numberOne){
//     console.log("The greater number of 5 and 10 is 10.");
// }

// let lenguage = "de"

// if (lenguage=="en") {
//     console.log("Hello world");

// } else if (lenguage == "de"){
//     console.log("Bonjour, le monde!");

// }
//  else if (lenguage == "es"){
//     console.log("¡Hola, mundo!");

// }

// takes 1 variable, a number score.
// show a grade for the score, either "A", "B", "C", "D", or "F"

// let score = 75

// if (score>=90) {
//     console.log("A");

// }
// else if (score>=80) {
//     console.log("B");

// }
// else if (score>=70) {
//     console.log("C");

// }
// else if (score>=60) {
//     console.log("D");

// }
// else if (score>=51) {
//     console.log("F");

// }

//takes 2 variables, a "noun" and a "number".
//show the number and pluralized form, like "5 cats" or "1 dog".

// let noumber = 1
// let noun = "book"

// if (noumber>1) {
//     console.log(`${noumber} ${noun}s`);

// }
// else if (noumber===1){
//     console.log(`${noumber} ${noun}`);
// }

// let result = prompt("Sen kimsen ")

// if (result== "cancel") {
//  console.log("Legv edildi")

// }
//  else if (result== "admin"){
//     let password = prompt("Parolu yaz")
//     if (password == 1234) {

//       console.log("Xos gelmisen");

//     }
//     else if(password ==="cancel"){
//       console.log("Cixa bilersiz");

//     }

//     else{
//         console.log("sef koddur");
//       }
//   }

//   else if (result ===""){
//     console.log("men sizi tanimaram");

//   }

// QUESTION GAME HOME WORK

// let areYouReady = confirm("Sual oyununa hazirsan!");

// if (areYouReady === true) {
//   let ruler = alert("Cavablari boyuk herifle yazin ");
//   let q1 = prompt(
//     "HTML-də səhifə başlığını hansı etiket ilə təyin edirik? A) <title>B) <head>C) <header>D) <heading></heading>"
//   );
//   let q2 = prompt(
//     "CSS-də elementin rəngini dəyişmək üçün hansı xassə istifadə olunur? A) background-color B) text-style C) color  font-color "
//   );
//   let q3 = prompt(
//     "HTML-də siyahı (list) yaratmaq üçün hansı etiketlərdən istifadə olunur? A) <list> və <li> B) <ul> və <li> C) <ol> və <list>  <ul> və <ol>"
//   );
//   let q4 = prompt(
//     "CSS-də font ölçüsünü dəyişmək üçün hansı xassə istifadə olunur? A) font-style B) text-size C) font-size D) size"
//   );
//   let q5 = prompt(
//     "HTML-də bir şəkil əlavə etmək üçün hansı atribut istifadə olunur? A) alt B) src C) href D) link"
//   );
//   let correctAnswer1 = "A";
//   let correctAnswer2 = "B";
//   let correctAnswer3 = "C";
//   let correctAnswer4 = "C";
//   let correctAnswer5 = "B";

//   let question1 =0
//   let question2 =0
//   let question3 =0
//   let question4 =0
//   let question5 =0

//   if (q1==correctAnswer1) {
//     question1 = 1
//     console.log("question1",question1);

//   }else{
//     question1=0
//   }
//   if (q2==correctAnswer2) {
//     question2=1
//   }else{
//     question2=0
//   }
//   if (q3==correctAnswer3) {
//     question3=1
//   }else{
//     question3=0
//   }
//   if (q4==correctAnswer4) {
//     question4=1
//   }else{
//     question4=0
//   }
//   if (q5==correctAnswer5) {
//     question5=1
//   }else{
//     question5=0
//   }
//   let totalCorrectAnswer=(question1+question2+question3+question4+question5)
//   const netice = alert(" duz cavablarin sayi "+totalCorrectAnswer)
// }

///BIRINCI GUNUN SINIF TAPSIRIQLARI

//BIRNICI TAPSIRIQ
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];

// var array3 = array1.concat(array2)
// console.log(array3);
// output: [1, 2, 3, 2, 30, 1]

//IKINCI TAPSIRIQ

// var list1 = [7, 9, 0, -2]
// var list2 = [[1],3]
// var resultList1=list1.slice(0,1)
// var resultList2 = list2.slice(0,1)
// console.log(resultList1);
// console.log(resultList2);
// Expected Output :
// 7
// [1]

//UCNCU TAPSIRIQ
// var list = [9,9,9,4,6,2]
// result :"9-9-9-4-6-2"
// var listJoin = list.join("-")
// console.log(listJoin); belede olur
// console.log(list.join("-")); belede

//DORDUNCU TAPSIRIQ
// var student_list =["Marry","Ali","Sophia","John"]
// var studentName = student_list.indexOf("John")
// console.log(studentName);
// var result = `${student_list[studentName]} is a student`
// console.log(result);
// result: "John is a student"

//BESINCI TAPSIRIQ
// let array = [1, 2, 3, 4, 5];
// Output: [5, 4, 3, 2, 1]
// let arr= array.reverse()
// console.log(arr);

// ALTINCI TAPSIRIQ

// let arrayFlat = [[1, 2], [3, 4], [5, 6]];
// Output: [1, 2, 3, 4, 5, 6]
// let arrayFlat2 = arrayFlat.flat(1)
// console.log(arrayFlat2);

//YEDDINCI TAPSIRIQ
// var list = [1,2,3,4,5,2]
// result: 2
// var listSlice = list.splice(1,1)
// console.log(listSlice);

// let wordLenght = "Hello world"

// // console.log(wordLenght.length);
// var elementCount = 4
// var element = 11

// var result =Array(elementCount).fill(element)
// console.log(result);

// Result : [11, 11, 11, 11]

// let text = "javascript";
// result: "Javascript"

// let text2 = text[0].toUpperCase()
// let text3 = text.slice(2)
// let text4 = text2.concat(text3)

// console.log(text4);

// let user = "john doe";

// let user_Name = user.toLocaleUpperCase()
// console.log(user_Name);
// let weather = "Today is a sunny day";
// Expected Result: "Today is a rainy day"

// let nowWeather = weather.replace("sunny","rainy")
// console.log(nowWeather);
// let sentence = "JavaScript is a funny language"
// Output: ["JavaScript", "is", "a", "funny", "language"]

//let arrWords = sentence.split(" ")
// console.log(arrWords);

// let str = "JavaScript is a funny language"
// let arrWords =str.split(" ")
// console.log(arrWords)

// Add the fruit "Orange" to the fruits array.
// Given: let fruits = ["Apple", "Banana", "Mango"];
// Expected Result: ["Apple", "Banana", "Mango", "Orange"]
// Searched fruit: let searchedFruit = "Orange"
// let fruits = ["Apple", "Banana", "Mango"];
// fruits.push("Orange")
// console.log(fruits);
// let searchedFruit = "Orange"
// if (fruits.includes(searchedFruit)) {
//     // console.log(`axtardiginiz meyve ${searchedFruit} tapildi`);

// }else{
//     // console.log("Axtardiginiz meyve yoxdur");

// }

// let firstNames = ["John", "Jane"];
// let lastNames = ["Doe", "Smith"];
// Expected Result: ["John", "Jane", "Doe", "Smith"]
// Alinan neticedeki arrayden ilk ve son element silinmelidir.
// ["Jane", "Doe"]
// let fullName = firstNames.concat(lastNames)
// console.log(fullName);
// fullName.shift()
// fullName.pop()
// console.log(fullName);

// let word = "JavaScript"
// let arrWord =word.split("").reverse().join("")

// console.log(arrWord);

// let fruits2 = ["Apple", "Banana", "Mango", "Orange"];

// console.log(fruits2.indexOf("Banana"));

//---------------------------///

//AYIN 11 OLAN SINIF TAPSIRIQLARI
//
//  let ar = [1, 2, 3, 4];
// let total_arr = 0
// for (let i = 0; i < ar.length; i++) {
//     total_arr += ar[i]
// }
// console.log(total_arr);

// let number = 5
// let factorial =2

// for (let i = 1; i < 5; i++) {
//   factorial += factorial*i
// }
// console.log(factorial);

// let arr = [3, 7, 2, 8, 5];

// for (let i = 0; i < arr.length; i++) {
//   if ( max >arr[i] ) {
//       let max = arr[i];
//     console.log( max );
//   }
// }

// let word = "hello"
// let r_word =[]
// let reverce
// for (let i = word.length; i>=0; i--) {
//     r_word.push(word[i])
// }

// let prime = 7
// for (let i = 2; i < prime; i++) {
//     if (prime % i == 0) {
//         console.log("prime is true");
//         break
//     }
//     console.log("prime is false");
//  }

//  let pet = "golden retriever";

//  console.log(pet.toUpperCase());    // toUpperCase vasitesi ile stringin butun heriflerinboyuduruk

//  let question = "Can you solve this problem?";
//  let length = question.length   //length vasitesi ile stringin uzunlugun tapiriq ve basqa variable ye menimsedirik
//  console.log(length);

//  let activity = "This game is boring"
//  let newActivity = activity.replace("boring","exciting") // replace  stringde olan bir herifin ve ya sozun tekrar edilmesi ucndur birnci yerde yazilan soz deyisdirmek istediyimiz ikinci soz ise yazmaq istediyimiz sozdur

//  console.log(newActivity);

//   let headline = "Choose Your Adventure!";

//   let result = headline.split(" ") // burda stringi arr ye cevirik
//  let result2 = result.indexOf("Adventure!") // burda axtardigimiz soun indeksin tapiriq
//  let  chooseWord = result[result2] // burdada hemen indeksde olan sozu chooseWord -e menimsedirik
//  console.log(chooseWord);

//  let desserts = ["Ice Cream", "Pie", "Pudding"];
//  desserts.pop()  // arryin axirinci elementin silen method
//  console.log(desserts);

// //  . Check if the cities array includes "Paris".//
//  let cities = ["London", "New York", "Tokyo"];
// let check = cities.includes("Paris")
// console.log(check); // cavab false dur cunki bu soz burda yoxdu

// let cars = ["Sedan", "Coupe"];
// let trucks = ["Pickup", "SUV"];

// let trafic = cars.concat(trucks)// concat vasitesi ile iki arr birlesdirilir
// console.log(trafic); //[ 'Sedan', 'Coupe', 'Pickup', 'SUV' ]

// // Find the index of "Pie" in the desserts array.
//  let desserts2 = ["Ice Cream", "Pie", "Pudding", "Cake"];
//  let checkDesserts2 = desserts2.indexOf("Pie") //indexOf vasitesiyle axtardigimiz sozun arr in necenci indeksdeki element oldugun bilirik
//  console.log(checkDesserts2);

//   let word = "Technology";
//   let word2 = word.split("") // burda stringi arr ceviririk
//   let reverceWord = [] // burdaki arr yuxaridaki herifleri yigmaq ucun saxlayiriq
//   for (let i = word2.length; i >=0; i--) {
//     reverceWord.push(word2[i]) // burda arr in indexlerin tersine yazdiririq ve menin indexsdeolan herifleri push metodu vasitesiyle bos olan arr qoyuruq

//   }
//   console.log(reverceWord.join("")); // burda herifleri birlesdiririk

// const number = [1,2,8,2,5]
// let arr2 =8
// for (let i = 0; i < number.length; i++) {
//   maxArr = number[i]
//   if (maxArr>arr2) {
//     arr2 = maxArr
//   }

// }
// console.log(arr2);

// let arr = [3, 7, 2, 8, 5, 10];
//       let el = 0;
//       for (let i = 0; i < arr.length; i++) {
//         let maxNum = arr[i];
//         if (maxNum > el) {
//           el = maxNum;
//         }
//       }
//       console.log(el);

//tapsiriq 1

// function square(num) {
//   return num = num*num
// }

// let result = square(4)
// console.log(result);
//tapsiriq 2
// function meet(name) {
//   return "hello "+name+"!"
// }
// let meetName = meet("Soltan")

// console.log(meetName);

//tapsiriq 3

// function totalSum(a,b) {
//   return a+b
// }

// console.log(totalSum(5,6));

// tapsiriq 4

// function totalSum(a,b) {
//   if (a>b) {
//     return a
//   } else{
//     return b
//   }

// }

// console.log(totalSum(5,6));

//tapsiriq 5

// function isEvenOrOdd(number) {
//   if (number%2==0) {
//     return "cut"
//   }else{
//      return "tek"
//   }
// }

// console.log(isEvenOrOdd(4));

//tapsiriq 6

// function upperCaseWord(word) {
//   return word.toUpperCase()
// }
// console.log(upperCaseWord("Hello World"));

//tapsiriq 7

// let arr = [1,2,3,4]
// function sumArr(ar) {
//   let sumArr = 0
//    for (let i = 0; i < ar.length; i++) {
//     sumArr += arr[i]

//   }
//   return sumArr
// }
// let sum =  sumArr(arr)
// console.log(sum);

//tapsiriq 1

// const arr = [1, 2, 3, 4, 5, 6]

// function cutEde(p) {
//   let cutEde = []
//   for (let i = 0; i < p.length; i++) {
//     if (p[i]%2==0) {
//       cutEde.push(p[i])
//     }

//   }
//   return cutEde
// }
// console.log(cutEde(arr));

// assert.strictEqual(check([66, 101], 66), true);
// assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true);
// assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
// assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);

// function check(a, x) {
//  if (a.includes(x)) {
//   return true
//  } else{
//   return false
//  }
// }
// console.log(check(['what', 'a', 'great', 'kata'], 'kat'));

// function sumArr(ar) {
//   let sum =0
//   for (let i = 0; i < ar.length; i++) {
//     sum += ar[i]

//   }
//   return console.log(sum);

// }
// sumArr(arr)

// const number = 5
// function factorial(num) {
//   let sumNumber =1
//   for (let i = 2; i <num; i++) {
//     sumNumber = sumNumber *i

//   }
//   return sumNumber
// }
// console.log(factorial(number));

// const arr = [1,4,11,7]
// function findMaxNumber(number) {
//   let num = 0
//   for (let i = 0; i < number.length; i++) {
//     if (number[i]>num) {
//       num = number[i]

//     }

//   }

//   return num
// }

// console.log(findMaxNumber(arr));

//  const word = 'Helloo'
//   function reverseString(str) {
//     let reverseStr= []
//  for (let i = str.length-1; i >=0; i--) {
//    str.split(" ")
//   reverseStr.push(str[i])

//  }
//      return reverseStr.join("")
//   }
//   console.log(reverseString(word));

function isPrime(number) {
  if (number <= 1) {
    return false;
  } else if (number % 2 == 0) {
    return false;
  } else {
    for (let i = 0; i < number; i++) {
      if (number % i == 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}

console.log(isPrime(7));
