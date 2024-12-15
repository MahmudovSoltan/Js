///GET DATE ILE OLAN TAPSIRIQLAR
//BIRINCI TAAPSIRIQ
const day = new Date();
const year = day.getFullYear();
const manth = day.getMonth() + 1;
const daye = day.getDay() + 1;
// console.log(daye);
//IKINCI TAPSIRIQ

function differenceDayFunc(x, d) {
  const day1 = new Date(x);
  const day2 = new Date(d);
  const differenceTime = Math.abs(day1 - day2);
  const differnceDay = Math.floor(differenceTime / (1000 * 60 * 60 * 24));
  return differnceDay;
}
// console.log(differenceDayFunc("2024-12-03","2024-12-08"));

//UCUNCU TAPSIRIQ

// const userdate1 = prompt(" YYYY-MM-DD :Bir tarix yazin ")

// const userdate2 = prompt(" YYYY-MM-DD :Bir tarix yazin")

function differenceDayFunc2(x, d) {
  const userDay1 = new Date(x);

  const userDay2 = new Date(d);

  const differnceUsertime = Math.abs(userDay1 - userDay2);

  const differnceUserDay = Math.floor(
    differnceUsertime / (1000 * 60 * 60 * 24)
  );
  return differnceUserDay;
}
// console.log(differenceDayFunc2(userdate1,userdate2));

//DORDUNCU TAPSIRIQ

// Input 1: 14:30:00
// Input 2: 16:45:30

function differentTimeFunc(time1, time2) {
  const date1 = new Date(`1970-01-01T${time1}`);
  const date2 = new Date(`1970-01-01T${time2}`);
  const diffarenceTime = Math.abs(date1 - date2);
  const hours = Math.floor(diffarenceTime / (1000 * 60 * 60));
  const minute = Math.floor((diffarenceTime % (1000 * 60 * 60)) / (1000 * 60));
  const second = Math.floor((diffarenceTime % (1000 * 60)) / 1000);
  return `${hours} Hours ${minute} minute ${second} second`;
}
// console.log(differentTimeFunc("14:30:00", "16:45:30"));

//BESINCI TAPSIRIQ
function ageFunc(x, d) {
  const userDay1 = new Date(x);

  const userDay2 = new Date(d);

  const differnceUsertime = Math.abs(userDay1 - userDay2);

  const differnceUserDay = Math.floor(
    differnceUsertime / (1000 * 60 * 60 * 24 * 365)
  );
  return differnceUserDay;
}
// console.log(ageFunc("1994-04-26","2024-12-09"));
