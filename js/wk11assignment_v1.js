
var basketball = document.getElementById('BBall');
var targetDiv = document.getElementsByClassName('a')
basketball.onmouseover = function hello() {
  alert("Hello, from bball");
  targetDiv.style.background = 'blue';
}

// var mybutton = document.querySelector('button');
// button.onclick = function changeColor(){
//   box.style.background = 'blue';
// }

// function changeColor(){
//   if(change_box.style.background == 'blue'){
//     mybox.style.background = 'white';
//   }else{
//     mybox.style.background = 'blue';
//   }
// }

var change_box = document.getElementById('changeBox1');

function changetoBlue(){
  change_box.style.background = 'blue';
}

function changetoWhite(){
  change_box.style.background = 'white';
}

function changetoBlack(){
  change_box.style.background = 'black';
}

function changetoPink(){
  change_box.style.background = 'pink';
}

function changetoGray(){
  change_box.style.background = 'gray';
}

// function changeColor(){
//     box.style.background = 'blue';
// }

var change_box2nd = document.getElementById('changeBox2');
function changeto2Blue(){
  change_box2nd.style.background = 'blue';
}

function changeto2White(){
  change_box2nd.style.background = 'white';
}

function changeto2Black(){
  change_box2nd.style.background = 'black';
}

function changeto2Pink(){
  change_box2nd.style.background = 'pink';
}

function changeto2Gray(){
  change_box2nd.style.background = 'gray';
}



var change_box3rd = document.getElementById('changeBox3');
function changeto3Blue(){
  change_box3rd.style.background = 'blue';
}

function changeto3White(){
  change_box3rd.style.background = 'white';
}

function changeto3Black(){
  change_box3rd.style.background = 'black';
}

function changeto3Pink(){
  change_box3rd.style.background = 'pink';
}

function changeto3Gray(){
  change_box3rd.style.background = 'gray';
}



var change_box4th = document.getElementById('changeBox4');
function changeto4Blue(){
  change_box4th.style.background = 'blue';
}

function changeto4White(){
  change_box4th.style.background = 'white';
}

function changeto4Black(){
  change_box4th.style.background = 'black';
}

function changeto4Pink(){
  change_box4th.style.background = 'pink';
}

function changeto4Gray(){
  change_box4th.style.background = 'gray';
  // alert("hi");
  check_for_match();
}



function check_for_match(){
  if (((change_box3rd.style.background) == (change_box4th.style.background)) &&
      ((change_box3rd.style.background) == (change_box2nd.style.background)) &&
      ((change_box3rd.style.background) == (change_box1st.style.background))) {
    alert ("match");
  } else {
    alert ("no match");
  }
}
