const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;

function randTime(min, max){
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.round(Math.random() * holes.length);
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
    hole.classList.remove('up');
    if(!timeUp) peep();
  }, time)
}

function startGame(){
  scoreBoard.textContent = 0;
  timeUp= false;
  peep();

setTimeout(() => timeUp = true, 10000);
}