const btn = document.querySelector('button');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const WIDTH = document.documentElement.clientWidth;
const HEIGHT = document.documentElement.clientHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

function random(number) {
  return Math.floor(Math.random()*number);
}

function draw() {
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  for (let i = 0; i < 120; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 192, 203, .5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
  for (let i = 0; i < 120; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(173,216,230,.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
  for (let i = 0; i < 120; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(230,230,250,.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}

btn.addEventListener('click',draw);

// -------------

const cats = ['Leopard', 'Jaguar', 'Tiger', 'Lion'];
for (const cat of cats) {
  console.log(cat);
};

// -------------
const results =
document.querySelector(#result);

function calculate () {

}

const calculateBtn = document.querySelector('#calculate');
const clearBtn = document.querySelector('#clear');

calculateBtn.addEventListener('click', () => results.textContent = '');

// -------------

const cats =
let myFavoriteCats = 'My cats are called ';
let i=o;
while
