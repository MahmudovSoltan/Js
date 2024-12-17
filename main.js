//BIRINCI TAPSIRIQ

const clickBtn = document.querySelector("#clickBtn")
const text = document.querySelector("#text")
clickBtn.addEventListener("click",()=>{
text.innerHTML = "Change text"
})

//IKINCI TAPSIRIQ

const bacground = document.querySelector("#bacground")
bacground.addEventListener("mouseover", () => {
  bacground.style.backgroundColor = "red";
});
bacground.addEventListener("mouseout", () => {
  bacground.style.backgroundColor = "green";
});

//UCUNCU TAPSIRIQ

const dblClickBtn = document.querySelector("#dblClickBtn")
const text2 = document.querySelector("#text2")
dblClickBtn.addEventListener("dblclick",()=>{
  text2.innerHTML="suscipit maiores hic minima? Aliquam, molestiae!"
})

// DORDUNCU TAPSIRIQ 
const image = document.querySelector("#image")

const quotes = [
  {
    quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst."`,
    person: `Aristotle`,
  },
  {
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: ` Mahatma Gandhi`,
  },
  {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: ` Albert Einstein`,
  },
  {
    quote: `"Your time is limited, so dont waste it living someone else's life."`,
    person: ` Steve Jobs`,
  },
  {
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    person: ` Benjamin Franklin`,
  },
  {
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
    person: `Oprah Winfrey`,
  },

  {
    quote: `"It does not matter how slowly you go as long as you do not stop."`,
    person: `Confucius`,
  },
  {
    quote: `"The journey of a thousand miles begins with one step."`,
    person: `Lao Tzu`,
  },
  {
    quote: `"Our lives begin to end the day we become silent about things that matter."`,
    person: `Martin Luther King, Jr.`,
  },
  {
    quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
    person: `Dalai Lama`,
  },
];

const add = document.querySelector("#add")
const paragraf = document.querySelector("#paragraf") 
const head = document.querySelector("#head")
paragraf.innerHTML=quotes[1].person
head.innerHTML=quotes[1].quote
add.addEventListener("click",()=>{
  const index =Math.round( Math.random()*quotes.length)
  head.innerHTML=quotes[index].quote
  paragraf.innerHTML=quotes[index].person
})


