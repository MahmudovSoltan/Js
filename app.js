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





  let result = prompt("Sen kimsen ")

  if (result== "cancel") {
   console.log("Legv edildi")
    
  }
   else if (result== "admin"){
      let password = prompt("Parolu yaz")
      if (password == 1234) {

        console.log("Xos gelmisen");
     
      }
      else if(password ==="cancel"){
        console.log("Cixa bilersiz");
        
      }
      
      else{
          console.log("sef koddur");
        }
    } 
    
    else if (result ===""){
      console.log("men sizi tanimaram");
      
    }
  


