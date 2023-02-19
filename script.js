const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const buttonName = document.querySelector('.start-button');
let lastHole;
let timeUp = false;
let score = 0;
function randTime(min, max){
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if(hole === lastHole){
    console.log('sorry');
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randTime(200,1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    buttonName.textContent = 'Start';
    hole.classList.remove('up');
    if(!timeUp) peep();
    else startAgain();
  }, time)
}

function startGame(){
  scoreBoard.textContent = 0;
  timeUp= false;
  score = 0;
  peep();

setTimeout(() => timeUp = true, 10000);
}

function bonk(e) {
    if(!e.isTrusted) return;
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

function startAgain() {
  {
    if (timeUp === true) {
      buttonName.textContent = 'Start Again!'
    }
  }
}

moles.forEach(mole => mole.addEventListener('click', bonk));