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

let areYouReady = confirm("Sual oyununa hazirsan!");

if (areYouReady === true) {
  let ruler = alert("Cavablari boyuk herifle yazin ");
  let q1 = prompt(
    "HTML-də səhifə başlığını hansı etiket ilə təyin edirik? A) <title>B) <head>C) <header>D) <heading></heading>"
  );
  let q2 = prompt(
    "CSS-də elementin rəngini dəyişmək üçün hansı xassə istifadə olunur? A) background-color B) text-style C) color  font-color "
  );
  let q3 = prompt(
    "HTML-də siyahı (list) yaratmaq üçün hansı etiketlərdən istifadə olunur? A) <list> və <li> B) <ul> və <li> C) <ol> və <list>  <ul> və <ol>"
  );
  let q4 = prompt(
    "CSS-də font ölçüsünü dəyişmək üçün hansı xassə istifadə olunur? A) font-style B) text-size C) font-size D) size"
  );
  let q5 = prompt(
    "HTML-də bir şəkil əlavə etmək üçün hansı atribut istifadə olunur? A) alt B) src C) href D) link"
  );
  let correctAnswer1 = "A";
  let correctAnswer2 = "B";
  let correctAnswer3 = "C";
  let correctAnswer4 = "C";
  let correctAnswer5 = "B";
  
  let question1 =0
  let question2 =0
  let question3 =0
  let question4 =0
  let question5 =0

  if (q1==correctAnswer1) {
    question1 = 1
    console.log("question1",question1);
    
  }else{
    question1=0
  }
  if (q2==correctAnswer2) {
    question2=1
  }else{
    question2=0
  }
  if (q3==correctAnswer3) {
    question3=1
  }else{
    question3=0
  }
  if (q4==correctAnswer4) {
    question4=1
  }else{
    question4=0
  }
  if (q5==correctAnswer5) {
    question5=1
  }else{
    question5=0
  }
  let totalCorrectAnswer=(question1+question2+question3+question4+question5)
  const netice = alert(" duz cavablarin sayi "+totalCorrectAnswer)
}
