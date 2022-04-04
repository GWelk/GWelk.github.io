const para = document.querySelector('p');

para.addEventListener('click',updateName);

function updateName () {
  const name = prompt('Enter a new name');
  para.textContent = `Player 1: ${name}`;
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName (){
  let myName = prompt('pl snter name');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hey there, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
let storedName = localStorage.getItem('name');
myHeading
}
