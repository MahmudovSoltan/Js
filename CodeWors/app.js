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

// let arrWor = words.split(",");
// arrWor.shift();
// arrWor.pop()
// let string = arrWor.toString(" ")
// console.log(string);


// console.log(arrWor);
function array(string) {
   let arrWor = string.split(",");
   arrWor.shift(); 
   arrWor.pop()
   let strings = arrWor.toString("")
   const replace = strings.replaceAll(",", " ")
   if (replace == 0) {
      return null
   } else {
      return replace
   }
  
   
}



console.log( array('A1,B2,C3,D4,E5'));
