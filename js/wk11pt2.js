let myVariable;
myVariable = 'myDog';

let myVariable2 = 'herDog';

myVariable = 'allDogs';

/* This is a multi-line
comment */

//This is a comment in js - single inline

//Variables  -- strings, numbers

let myVariable='bob'; //strings

let myNumber = 3; //numbers

let myBoolean = true; //booleans
let myBoolean = false;

// let myArray = [1, 'bob', true]; //arrays
//
// let myObject = document.querySelector('p');
// objects, but all the above are objects too

//operators

// 6 + 9; // ADDITION
// 'Hello' + 'World' //string addition or concatenation --> 'HelloWorld'

//SUBTRACTION --> -
//MULTIPLICATION--> *
//DIVISION --> /

//ASSIGNMENT --> =

//EQUALITY
// myNumber === 4; //<--- This will result in false.  Because === checks to see if (compares) it is equal to a Variables

//NOT, DOES NOT EQUALITY
// !(myNumber === 3); // !(TRUE) = false
// myVariable !== 3; //false


// CONDITIONALS

let iceCream = 'chocolate';

if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate!');
} else {
  alert('I wish it was chocolate');
}

//EVENT LISTENERS


document.querySelector('html').addEventListener('click',
function() {
  alert('Ouch');
}
