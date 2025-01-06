const inputEl = document.querySelector("input");
const mainDiv = document.querySelector("#mainDiv");
const btn = document.querySelector("button");
const image = document.querySelector("img");
const apiKey = "e76951c6";
const url = `https://www.omdbapi.com/?s=Batman&apikey=${apiKey}`;
async function getdata(url) {
  try {
    const data = await fetch(url);
    const data2 = await data.json();
    console.log(data2);
    image.src = data2.Poster;
  } catch (err) {
    console.log(err);
  }
}

getdata(url);
