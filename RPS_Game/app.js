const userImage = document.querySelector("#userImage");
const comnputerImage = document.querySelector("#comnputerImage");
const buttons = document.querySelectorAll("button");
const player = document.querySelector("#player");
const drow = document.querySelector("#drow");
const computer = document.querySelector("#computer");
const strat_btn = document.querySelector(".strat_btn");
const start_gaem = document.querySelector(".start_gaem");
const game_stop = document.querySelector(".game_stop");
const game_result_box = document.querySelector(".game_result_box")
const main_page = document.querySelector(".main_page");
const play_again = document.querySelector(".play_again");
const stop_game = document.querySelector(".stop_game");

const gameArr = ["parper", "rock", "scissors"];

let playerScore = 0;
let computerScore = 0;
let drowScore = 0;
let playerChoose = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let compoterChoose = Math.floor(Math.random() * 3);
    playerChoose = button.getAttribute("value");
    console.log(playerChoose);
    console.log(gameArr[compoterChoose]);

    userImage.src = `./images/${playerChoose}.png`;
    comnputerImage.src = `./images/${gameArr[compoterChoose]}.png`;
    if (playerChoose === gameArr[compoterChoose]) {
      drowScore++;
      drow.textContent = drowScore;
    } else if (
      playerChoose === "parper" &&
      gameArr[compoterChoose] === "rock"
    ) {
      playerScore++;
      player.textContent = playerScore;
    } else if (
      playerChoose === "rock" &&
      gameArr[compoterChoose] === "scissors"
    ) {
      playerScore++;
      player.textContent = playerScore;
    } else if (
      playerChoose === "scissors" &&
      gameArr[compoterChoose] === "parper"
    ) {
      playerScore++;
      player.textContent = playerScore;
    } else {
      computerScore++;
      computer.textContent = computerScore;
    }
    if (playerScore === 5) {
      game_stop.classList.add("game_acrtive");
      game_result_box.innerHTML = '<p class="player_win">Victory!</p><img src="https://img.freepik.com/premium-vector/victory-minimalist-logo-vector-silhouette-design_1137316-1184.jpg" <p class="desc_player">You Win!</p>';
    }
    else if (computerScore === 5) {
      game_stop.classList.add("game_acrtive");
      game_result_box.innerHTML = '<p class="computer_win">Game Over</p> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gfgCuXdu7asgcIIPVya1np_d1WkGbUx55g&s" <p class="desc_comp">Your Lose</p>';
    }
  });
});

strat_btn.addEventListener("click", () => {
  start_gaem.style.display = "none";
  strat_btn.style.display = "none";
});

main_page.addEventListener("click", () => {
  location.reload();
 })
 play_again.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  drowScore = 0;
  player.textContent = playerScore;
  computer.textContent = computerScore;
  drow.textContent = drowScore;
  game_stop.classList.remove("game_acrtive");
  userImage.src = `./images/parper.png`;
  comnputerImage.src = `./images/parper.png`;
 });
 stop_game.addEventListener("click", () => {
window.close();
 })
