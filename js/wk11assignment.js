var button = document.querySelector('button');
var box = document.getElementById('changeBox');

// button.onclick = function changeColor(){
//   box.style.background = 'blue';
// }

function changeColor(){
  if(box.style.background == 'blue'){
    box.style.background = 'white';
  }else{
    box.style.background = 'blue';
  }
}

// function changeColor(){
//     box.style.background = 'blue';
// }
