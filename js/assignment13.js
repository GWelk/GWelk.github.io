const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
//In the result function
//create a new variable called newStory
//set the value of newStory to storyText
  // var newStory = ` It was 94 fahrenheit outside, so ${randomValueFromArray(insertX)} went for a walk.
  // When they got to ${randomValueFromArray(insertY)}, they stared in horror for a few moments, then ${randomValueFromArray(insertZ)}.
  // Bob saw the whole thing, but was not surprised —
  // ${randomValueFromArray(insertX)} weighs 300 pounds, and it was a hot day.
  // `

  // var newStory = storyText.replace(":insertx:",${randomValueFromArray(insertX)});
  // var newStory = storyText.replace(`{${":insertx:"}}`,randomValueFromArray(insertX));
  //please help - I need to replace multiple instances of insertX ---  ???
  //Aha!  the /g flag replaces all instances.  See https://www.w3schools.com/js/js_string_methods.asp
  var newStory = storyText.replace(/:insertx:/g,randomValueFromArray(insertX));
  newStory = newStory.replace(":inserty:",randomValueFromArray(insertY));
  newStory = newStory.replace(":insertz:",randomValueFromArray(insertZ));
  // console.log(randomValueFromArray(insertX));

//This link will help figure out how to replace Bob with the custom input
//https://www.freecodecamp.org/news/javascript-string-replace-example-with-regex/
  if(customName.value !== '') {
    // const name = async() => customName.value;
    const name = customName.value;
    // console.log(name);
    // const name2 = name.replace("Bob",name);
    // console.log(name2);
    newStory = newStory.replace('Bob',name)
  }

  if(document.getElementById("uk").checked) {
    // original line:   const weight = Math.round(300);
    //1 pound (lb) is equal to 0.0714286 stones (st)
    const weight = Math.round(300*0.0714286) + ' stone';
    // console.log(weight);
    newStory = newStory.replace("300 pounds",weight);
    // const temperature =  Math.round((94-32)*5/9);
    const temperature = Math.round((94-32)*5/9) + ' centigrade';
    // console.log(temperature);
    newStory = newStory.replace("94 fahrenheit",temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
