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
  document.querySelector('#theWord').textContent = wordText;
}

function outputCategory(randNumber) {
  let wordCategory;
  wordCategory = wordCollection[randNumber].category;
  document.querySelector('#theCategory').textContent = wordCategory;
}

  console.log(randNumber);
  console.log(wordCollection[randNumber].theAnswer);
  console.log(wordCollection[randNumber].category);
console.log(document.querySelector('#theCategory').textContent);
console.log(wordCollection[randNumber].theAnswer.length);
