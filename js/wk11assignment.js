
var mybox = document.getElementById('changeBox');

// var mybutton = document.querySelector('button');
// button.onclick = function changeColor(){
//   box.style.background = 'blue';
// }

function changeColor(){
  if(mybox.style.background == 'blue'){
    mybox.style.background = 'white';
  }else{
    mybox.style.background = 'blue';
  }
}

function changetoBlue(){
  mybox.style.background = 'blue';
}

function changetoWhite(){
  mybox.style.background = 'white';
}

function changetoBlack(){
  mybox.style.background = 'black';
}

function changetoPink(){
  mybox.style.background = 'pink';
}

function changetoGray(){
  mybox.style.background = 'gray';
}

// function changeColor(){
//     box.style.background = 'blue';
// }
