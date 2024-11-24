const words = ['html','cst','react','javscript']
let randomNumber =Math.floor( Math.random()*words.length)
let hiddenWord = words[randomNumber] 
let guessWord = ""
for (let i = 0; i < words[randomNumber].length; i++) {
      guessWord += "_" 
}

const newGuessWordArr = guessWord.split('')
guessWord.split("")

while(newGuessWordArr.includes("_")){
      alert("Hazırkı söz: " + newGuessWordArr.join("") + "\nSözü təxmin etməyə çalışın!");
      let userWord = prompt("herifi daxil et")
      const findIndex = hiddenWord.indexOf(userWord)
      if (findIndex !==-1) {
            newGuessWordArr[findIndex] = userWord   
      }
    console.log(guessWord);
    
}
alert("Tapdiginiz soz " + newGuessWordArr.join(""))











