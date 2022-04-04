
var myGraybutton = document.getElementById('makeGray');
myGraybutton.onclick = function changeColor(){
  changeBox1.style.background = 'gray';
}

var myBluebutton = document.getElementById('makeBlue');
myBluebutton.onclick = function changeColor(){
  changeBox1.style.background = 'blue';
}

var myWhitebutton = document.getElementById('makeWhite');
myWhitebutton.onclick = function changeColor(){
  changeBox1.style.background = 'white';
}

var myPinkbutton = document.getElementById('makePink');
myPinkbutton.onclick = function changeColor(){
  changeBox1.style.background = 'pink';
}

var myMagentabutton = document.getElementById('makeMagenta');
myMagentabutton.onclick = function changeColor(){
  changeBox1.style.background = 'magenta';
}

var myPurplebutton = document.getElementById('makePurple');
myPurplebutton.onclick = function changeColor(){
  changeBox1.style.background = 'purple';
}

var Letter1 = document.getElementById('L1');
var Letter1show = document.getElementById('A');
Letter1.onmouseover = function showLetter(){
  Letter1show.style.visibility = 'visible';
}
Letter1.onmouseout = function hideLetter(){
  Letter1show.style.visibility = 'hidden';
}


var Letter2 = document.getElementById('L2');
var Letter2show = document.getElementById('B');
Letter2.onmouseover = function showLetter(){
  Letter2show.style.visibility = 'visible';
}
Letter2.onmouseout = function hideLetter(){
  Letter2show.style.visibility = 'hidden';
}


var Letter3 = document.getElementById('L3');
var Letter3show = document.getElementById('C');
Letter3.onmouseover = function showLetter(){
  Letter3show.style.visibility = 'visible';
}
Letter3.onmouseout = function hideLetter(){
  Letter3show.style.visibility = 'hidden';
}

// var guess = document.getElementById('theguess');
var buttonguess = document.getElementById('submitting');
buttonguess.onclick = function check(){
  let x = document.getElementById('theguess').value;
  let text;
  if (x == 'dog') {
    text = "That's right!";
  } else {
    text = "Hmmm...  Maybe you should review the letters again.";
  }
  document.getElementById("demo").innerHTML = text;
}
