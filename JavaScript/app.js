// function greet(name) {
//       function retrunGree() {
//         return "Hello " + name
//       }

//     return  retrunGree()
// }

// console.log(greet("Soltan"));

// console.log(greet("Ali"));

// console.log(greet("Ahmet"));

// function createCounter(num) {
//   let count = 2;
//   return function increMent() {
//      count = count *num

//      return count
//   };
// }
// let a = createCounter(5);
// let b =  createCounter(10);

// console.log(a());
// console.log(b());


// console.log(vowels.includes("a"));


// function countVowels (str){
//     let vowels = "aeiouAEIOU"
//     let count =0
//     str.split("").forEach((item) => {
//         if (vowels.includes(item)) {
//             count += 1;
//         }
//     });
// return count
// }
// console.log(countVowels("JavaScript"));



function isPalindrome(str) {
    let a = ""
    for (let i = str.length-1; i >= 0; i--) {
        a+=str[i]   
    }
   return a==str?true:false
    
}

// console.log(isPalindrome("amma"));


