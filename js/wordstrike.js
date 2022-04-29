// alert("This is the right file");
let wordCollection = [
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

  // Phrases come from:  https://wheeloffortuneanswer.com/

const wordCollectionLength = (wordCollection.length);
let randNumber = Math.floor(Math.random() * wordCollectionLength);

document.querySelector('#newGame').addEventListener('click',getRandNumber);
document.querySelector('#a').addEventListener('click', function() {
  guessaLetter("a");
});
document.querySelector('#b').addEventListener('click', function() {
  guessaLetter("b");
});
document.querySelector('#c').addEventListener('click', function() {
  guessaLetter("c");
});


function getRandNumber(){
  console.log("You clicked to start a new game.");
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
  console.log(wordTextArray);
  printStartingWord(wordTextArray);
}


function printStartingWord(openingText) {
  let startingText = document.querySelector('#theWord').textContent;
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

function printNewText(openingText) {
  startingText = document.querySelector('#theWord').textContent;
  //for each letter in the openingText, if it matches the guessed letter, change it to guessed letter.
  //if it doesn't match, then let it stay '_'
  console.log("the printNew Text function was called for letter " + openingText);
  console.log(startingText);
}

function guessaLetter(theGuess) {
  console.log(theGuess);
  // let wordText;
  wordText = wordCollection[randNumber].theAnswer.toLowerCase();
  for (let i = 0; i < wordText.length; i++) {
    console.log(wordText[i]);
    // console.log(wordText[i].toUpperCase);
  if (wordText[i] == theGuess) {
    console.log("Match!" + wordText[i]);
    printNewText(wordText[i]);
    //This works!  Now I need to replace the _ with the guessed letter in the phrase as it is printed on the screen
} else {
  wordText[i] = wordText[i];
}
}
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
