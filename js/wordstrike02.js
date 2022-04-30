
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
document.querySelector('#a').addEventListener('click', function() {
  guessaLetter("a");
});
document.querySelector('#b').addEventListener('click', function() {
  guessaLetter("b");
});
document.querySelector('#c').addEventListener('click', function() {
  guessaLetter("c");
});

function newGame() {
  // console.log("You clicked to start a new game.");
  let startingText = [];
  let wordText = '';
  let wordTextArray = [];
  document.querySelector('#theWord').textContent = '';
  getRandNumber();
}

function getRandNumber(){
  randNumber = Math.floor(Math.random() * wordCollectionLength);
  console.log(randNumber);
  console.log(wordCollection[randNumber].theAnswer);
  outputWord(randNumber);
  outputCategory(randNumber);
}

function outputWord(randNumber) {
  let wordText;
  wordText = wordCollection[randNumber].theAnswer;
  // document.querySelector('#theWord').textContent = wordText;
  let wordTextArray = new Array();
  wordTextArray = wordText.split('');
  // console.log(wordTextArray);
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

//This sort of works.  The problem is that it appends the reText to the first reText -
//so blank letters get added infinitely.
//Instead I need to keep the letters already guessed and the 'just guessed' letter.
function guessaLetter(theGuess) {
  //move the letter from unused to Used
  // usedLetters.push(theGuess);
  // console.log(usedLetters);
  //if the letter is not already in the used array,
  //add it to the used array.
  // console.log(usedLetters.length);
  // if (usedLetters.length > 0) {
  // if (usedLetters.find(theGuess) == true {
  //   "You "
  // }
  //   for (let i = 0; i < usedLetters.length; i++) {
  //       if (usedLetters[i] == theGuess) {
  //         console.log('That is a re-guess of ' + theGuess);
  //       } else {
  //         usedLetters.push = theGuess;
  //         console.log('you have this many used letters' + usedLetters.length);
  //       }
  //   }

  wordText = wordCollection[randNumber].theAnswer.toLowerCase();
  for (let i = 0; i < wordText.length; i++) {
    // console.log(wordText[i]);
      if (wordText[i] == theGuess) {
      // console.log("Match!" + wordText[i]);
      reText = reText + theGuess;
      } else if (wordText[i] == ' ') {
      reText = reText + '   ';
      } else {
      reText = reText + ' _ ';
      }
  }
  document.querySelector('#theWord').textContent = reText;
}


function outputCategory(randNumber) {
  let wordCategory;
  wordCategory = wordCollection[randNumber].category;
  document.querySelector('#theCategory').textContent = wordCategory;
}

//   console.log(randNumber);
//   console.log(wordCollection[randNumber].theAnswer);
//   console.log(wordCollection[randNumber].category);
// console.log(document.querySelector('#theCategory').textContent);
// console.log(wordCollection[randNumber].theAnswer.length);
