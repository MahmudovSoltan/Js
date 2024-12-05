const companies = [
  { name: "Whelp", category: "Development", start: 2002, end: 2021 },
  { name: "ByQr", category: "Finance", start: 1998, end: 2023 },
  { name: "Marandi", category: "Design", start: 2012, end: 2022 },
  { name: "Kapital", category: "Technology", start: 1992, end: 2015 },
  { name: "Pasha", category: "Retail", start: 1999, end: 2005 },
  { name: "Rabite", category: "Finance", start: 2006, end: 2009 },
  { name: "Irshad", category: "Development", start: 2004, end: 2021 },
  { name: "AzGranata", category: "Design", start: 1993, end: 2011 },
  { name: "AzerSun", category: "Development", start: 1997, end: 2001 },
  { name: "Veyseloglu", category: "Design", start: 1988, end: 2018 },
];
//Birinci tapsiriq

// let companyName = []
companies.forEach((item) => {
  // companyName.push(item.name)
  // console.log(item.name);
});
// console.log(companyName);

// companies.map((item,i)=>{
//     console.log(item.name);

// })

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i].name);
// }

//Ikinci tapsiriq

// const dev = companies.filter((item)=>item.category === "Development")
// console.log(dev);

//Ucuncu tapsiriq
companies.map((item, i) => {
  const compAge = item.end - item.start;
  // console.log(`${item.name} ${compAge} yasinda`);
});

//Dorduncu tapsiriq
companies.sort((a, b) => a.start - b.start);
// console.log(companies);

//Besinci tapsiriq
const yearAvarage = companies.filter(
  (item) => item.start >= 1988 && item.end < 2014
);
// console.log(yearAvarage);
// companies.filter((item)=>item.end-item.start===25&&console.log(item))

//Altinci tapsiriq
companies.sort((a, b) => a.name.localeCompare(b.name));
// console.log(companies);

const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

// console.log(first);  // Output: 1
// console.log(second); // Output: 2
// console.log(rest);

const car = {
  make: "Toyota",
  model: {
    tile: "mersedes",
  },
  year: 2020,
  color: "blue",
};

const {
  make,
  model: { tile },
  year,
} = car;
//   const {tile} = model
//   console.log(make);
//   console.log(tile);

// const user = {
//     name: "Tom",
//     age: 25
//   };

// const {name:userName,age,country="Unknown"} = user

//   console.log(userName);   // Output: Tom
//   console.log(age);    // Output: 25
//   console.log(user);

const data = {
  errors: [
    {
      status: "403",
      source: { pointer: "/data/attributes/secretPowers" },
      detail: "Editing secret powers is not authorized on Sundays.",
    },
    {
      status: "422",
      source: { pointer: "/data/attributes/volume" },
      detail: "Volume does not, in fact, go to 11.",
    },
    {
      status: "500",
      source: { pointer: "/data/attributes/reputation" },
      title: "The backend responded with an error",
      detail: "Reputation service not responding after three requests.",
    },
    {
      status: "403",
      source: { pointer: "/data/attributes/secretPowers" },
      detail: "Duplicate error with the same pointer and status.",
    },
    {
      status: "999",
      source: { pointer: "/data/attributes/invalid" },
      detail: "This is an invalid status error.",
    },
  ],
};

const res = Object.entries(data.errors);
let result = [];
let res2=[]
for (const el of res) {
  const el2 = el[0];
  const el3 = el[1];
  const obj = {
    id: el2,
    ...el3,
  };
  result.push(obj);
}

console.log(result.map((item) => item.detail.includes("secret powers")?item.detail.replaceAll("secret powers","baku"):item.detail));







// result.filter((item) => item.status == 500?console.log(item):""
// );
// output {id: '403', status: '403', source: {…}, detail: 'Duplicate error with the same pointer and status.'}
// Find 'secretPowers' and replace it with 'Baku' in the pointer