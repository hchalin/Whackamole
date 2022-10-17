// define all global variables
const cells = document.querySelectorAll(".cell");
const imgs = document.querySelectorAll("img");
const startBtn = document.querySelector("#startGame");
let hole = document.createElement("img");
let mole = document.createElement("img");
mole.src = "images/mole.png";
let score = document.getElementById("score");
let playerScore = 0;
let getNewRandomCell = () => cells[Math.floor(Math.random() * 9)];
let randomCell = cells[Math.floor(Math.random() * 9)];

// let randomCell = cells[Math.floor(Math.random() * 9)];

score.textContent = `Score: ${playerScore}`;

//---------------------------

startBtn.addEventListener("click", function () {
  //get random cell on start
  getNewRandomCell();
  console.log(randomCell);
  // set gameboard on start
  for (let img of imgs) {
    console.log("game reset and generated");
    img.setAttribute("src", "images/hole.png");
    img.append(hole);
  }
  // randomCell.removeEventListener("click", moveMole, { capture: false });
  // newCell.removeEventListener("click", moveMole, { capture: false });
  //after load update random hole => mole
  imgs[randomCell.id].src = "images/mole.png";
  console.log(randomCell);
});

// when first random cell is clicked________________________
console.log(`Random cell: ${randomCell.id}`);

randomCell.addEventListener("click", moveMole);
function moveMole() {
  // add score after every click
  playerScore++;
  randomCell.removeEventListener("click", moveMole);
  score.textContent = `Score: ${playerScore}`;
  randomCell = getNewRandomCell();
  console.log(`Random cell 2: ${randomCell.id}`);
  randomCell.addEventListener("click", moveMole);
  //comment line below(rmvEventLisenter) to get back to start

  let newCell = getNewRandomCell();
  newCell.addEventListener("click", moveMole);
  // this refreshes the board every time after the initial mole click
  for (let img of imgs) {
    console.log(`Mole moved to ${newCell.id}`);
    img.setAttribute("src", "images/hole.png");
    imgs[newCell.id].src = "images/mole.png";
    platerScore++;
  }
}
