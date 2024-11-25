const words = ['html','cst','react','javscript']
let randomNumber =Math.floor( Math.random()*words.length)
let hiddenWord = words[randomNumber] 
let guessWord = ""
for (let i = 0; i < words[randomNumber].length; i++) {
      guessWord += "_" 
}
const newGuessWordArr = guessWord.split('')
guessWord.split("")
let chance = 4
while(newGuessWordArr.includes("_")){
if (chance == 0) {
      alert("Sizin cavab sansiniz itdi")
      if (chance == 0) {
       newGuessWordArr=""  
      }
} else {
      alert("Hazırkı söz: " + newGuessWordArr.join("") + "\nSözü təxmin etməyə çalışın!");
      let userWord = prompt("herifi daxil et"+"\n"+chance+"defe sehv etme sansiniz var!")
      const findIndex = hiddenWord.indexOf(userWord)
      if (findIndex !==-1) {
            newGuessWordArr[findIndex] = userWord   
      }
      if (findIndex == -1) {
            alert("Yazdiginiz herif duz deyil")
            chance-=1  
      } 
}

    
}
alert("Tapdiginiz soz " + newGuessWordArr.join(""))











