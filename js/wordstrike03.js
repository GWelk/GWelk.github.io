
const wordCollection = [
    {
    "theAnswer": "Academic Scholarship",
    "category": "CollegeLife",
    "source": "Wheel of Fortune"
    },
    {"theAnswer": "Bringing Laundry Home To Mom And Dad",
    "category": "CollegeLife",
    "source": "Wheel of Fortune"
    },
    {"theAnswer": "Course Catalog",
    "category": "CollegeLife",
    "source": "Wheel of Fortune"
    },
    {"theAnswer": "A Fox in a Box",
    "category": "Rhyme Time",
    "source": "Wheel of Fortune"
    },
    {"theAnswer": "A Friend To The Bitter End",
    "category": "Rhyme Time",
    "source": "Wheel of Fortune"
    },
    {"theAnswer": "An Attitude Of Gratitude",
    "category": "Rhyme Time",
    "source": "Wheel of Fortune"
    },
    {"theAnswer": "Chicken Wings & Onion Rings",
    "category": "Rhyme Time",
    "source": "Wheel of Fortune"
    },
    {"theAnswer": "Frankly My Dear I Don't Give A Damn",
    "category": "Movie Quotes",
    "source": "Wheel of Fortune"
    },
    {"theAnswer": "Lions And Tigers And Bears Oh My",
    "category": "Movie Quotes",
    "source": "Wheel of Fortune"
    },
    {"theAnswer": "Keep The Change Ya Filthy Animal",
    "category": "Movie Quotes",
    "source": "Wheel of Fortune"
    }
  ]

  let startingAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z']

  let usedLetters =[]

  // Phrases come from:  https://wheeloffortuneanswer.com/

const wordCollectionLength = (wordCollection.length);
let randNumber = Math.floor(Math.random() * wordCollectionLength);

document.querySelector('#newGame').addEventListener('click',newGame);


function newGame() {
  // console.log("You clicked to start a new game.");
  let startingText = [];
  let wordText = '';
  let wordTextArray = [];
  document.querySelector('#theWord').textContent = '';
  document.querySelector('#unusedLetters').textContent = '';
  getRandNumber();
  console.log(randNumber);
  console.log(wordCollection[randNumber].theAnswer);
  outputWord(randNumber);
  outputCategory(randNumber);
  printStartingAlpha();
}

function getRandNumber(){
  randNumber = Math.floor(Math.random() * wordCollectionLength);
}

var letterUL = document.getElementById('unusedLetters');
function printStartingAlpha() {
  let availableLetters = "";
  for (const x of startingAlphabet) {
    availableLetters = "<li class='simple' id='" + x+ "'> " + x+ " </li>";
    letterUL.innerHTML += availableLetters;
    document.querySelectorAll('li').forEach(item => {
      item.addEventListener('click', callLetter);
    })
  }
}

function callLetter(event) {
  let target = event.target || event.srcElement;
  guessaLetter(event.target.innerHTML);

}


function outputWord(randNumber) {
  let wordText;
  wordText = wordCollection[randNumber].theAnswer;
  let WordTextArray = new Array();
  wordTextArray = wordText.split('');
  printStartingWord(wordTextArray);
}

//This function prints the correct number of underlines on the screen
//Each represents an unguessed letter.
function printStartingWord(openingText) {
  startingText = document.querySelector('#theWord').textContent;
  for (let i = 0; i < openingText.length; i++) {
    // console.log(openingText[i]);
  if (openingText[i] != ' ') {
    // console.log(openingText[i]);
    document.querySelector('#theWord').textContent = document.querySelector('#theWord').textContent+"_ ";
    // console.log(startingText);
  } else {
    document.querySelector('#theWord').textContent = document.querySelector('#theWord').textContent + '   ' ;
  }
}
}

let reText = [];
function rebuildWGuess () {

  // for each letter in the phrase, check to see if
  // the letter is in the used array.
  //If no, add a _ to that position in the array.
  //If yes, add add the letter to that position in the Array.
  //Show the new phrase with the guessed and unguessed letters - by printing to innerHTML.

// console.log(wordTextArray);

      for (let i = 0; i < wordTextArray.length; i++) {
        for (let j = 0; j < usedLetters.length; j++) {
            console.log('you got here' + usedLetters);
            console.log('you got here' + wordTextArray);
            if (wordTextArray[i] === usedLetters[j]) {
              console.log("Match!" + j);
      }
    }
}
}







function guessaLetter(theGuess) {
    //if the letter is already in the usedLetters array, exit function.

  // let includesGuess = usedLetters.includes(theGuess);
  // console.log(includesGuess);

  if (usedLetters.includes(theGuess) == true) {
    return;
  }

  //(otherwise continue)
  //move the letter from unused to Used - or deactivate it
  usedLetters.push(theGuess);
  console.log(usedLetters);
  printUsedAlpha();
  rebuildWGuess();
}


var usedLettersList = document.getElementById('usedLetters');
function printUsedAlpha() {
  usedLettersList.innerHTML = "";
  for (const x of usedLetters) {
    //show the used letters on screen
    uUsedLetters = "<li class='simple' id='" + x+ "'> " + x+ " </li>";
    usedLettersList.innerHTML += uUsedLetters;
  }
}


function outputCategory(randNumber) {
  let wordCategory;
  wordCategory = wordCollection[randNumber].category;
  document.querySelector('#theCategory').textContent = wordCategory;
}
