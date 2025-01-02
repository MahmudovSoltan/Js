function converter (mpg) {
  const imperial = 4.54609188;
  const mile = 1.609344; 
  let sum = mpg * (mile / imperial);
  return Number(sum.toFixed(2));
}

console.log( converter(10));
