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
  ]

const wordCollectionLength = (wordCollection.length);
let randNumber = Math.floor(Math.random() * wordCollectionLength);

document.querySelector('#newGame').addEventListener('click',getRandNumber);


function getRandNumber(){
  console.log("You clicked to start a new game.");
  randNumber = Math.floor(Math.random() * wordCollectionLength);
  console.log(randNumber);
  console.log(wordCollection[randNumber].theAnswer);
  outputWord(randNumber);
}

function outputWord(randNumber) {
   wordText = document.querySelector('#theWord').textContent;
  wordText = wordCollection[randNumber].theAnswer;
}

  console.log(randNumber);
  console.log(wordCollection[randNumber].theAnswer);
