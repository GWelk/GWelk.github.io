
//These all do the same thing, but the best choice is the third or 4th line
// because they are the most specific.
// var quoteButton = document.queryselector('button');
// var quoteButton = document.queryselector('.new-quote button');
// var quoteButton = document.getelementbyid('js-new-quote');
// var quoteButton = document.queryselector('#js-new-quote');
// let quoteButton = document.queryselector('#js-new-quote');
const quoteButton = document.querySelector('#js-new-quote');
// const whoButton = document.querySelector('#who');
const ChandBtn = document.querySelector('#Chandler');
const JoeBtn = document.querySelector('#Joey');
const MonBtn = document.querySelector('#Monica');
const PhoebBtn = document.querySelector('#Phoebe');
const RaBtn = document.querySelector('#Rachel');
const RossBtn = document.querySelector('#Ross');

document.querySelector('#Right').style.display = "none";
document.querySelector('#Wrong').style.display = "none";
document.querySelector('.friendButtons').style.display = "none";

//What is the difference between queryselector or getelementbyid
//What is the difference between let, var, and const

quoteButton.addEventListener('click',getQuote);
// quoteButton.addEventListener('click',showWho);
// whoButton.addEventListener('click',showWho);
ChandBtn.addEventListener('click',selectChandler);
JoeBtn.addEventListener('click',selectJoey);
MonBtn.addEventListener('click',selectMonica);
PhoebBtn.addEventListener('click',selectPhoebe);
RaBtn.addEventListener('click',selectRachel);
RossBtn.addEventListener('click',selectRoss);

//This function is asynchronous.
//This means means we can use the 'await' keyword below it.
//Await will pause the funtion while waiting for an operation to complete.
//More info here:  https://javascript.info/async-await
async function getQuote () {
  //This line isn't necessary, but is a debug tool.
  //We can see what's happening by viewing the log.
  console.log("quote button was clicked");
  clearOld();
  document.querySelector('.friendButtons').style.display = "block";
  // The `try` block executes the statements within.
  // If an exception is thrown (if the variable 'response' is not ok,
  //it will throw an error - I am not exactly sure what response.statusText is),
  //the statements defined in
  // the `catch` block will be executed.
  // More info is here: https://javascript.info/try-catch
  try {
    const response = await fetch(endpoint,
      // {credentials: 'include'}
    );
    // If the response is not 200 OK...
      if (!response.ok){
        // ...throw an error. This causes control flow
        // to skip to the `catch` block below.
        throw Error(response.statusText);
      }
    const json = await response.json();
    console.log(json);
    displayQuote(json.quote);
    var whosaidit = (json.character);
    console.log(whosaidit);
    // printCharacter(whosaidit);
    document.querySelector('#whichFriend').textContent = whosaidit;
    document.querySelector('#whichFriend').style.display = "none";
    // document.querySelector('#whichFriend').style.display = "block";
  } catch(err) {
      console.log(err);
      alert('Failed');
    }
  }



// function displayQuote(quote) {
//   const quoteText = document.querySelector('#js-quote-text');
//   quoteText.textContent = quote;
// }

function displayQuote(quote) {
  document.querySelector('#js-quote-text').textContent = quote;
}

function showWho() {
  document.querySelector('#whichFriend').style.display = "block";
  // document.querySelector('#whichFriend').textContent = whosaidit;
}

function clearOld() {
  document.querySelector('#Right').style.display = "none";
  document.querySelector('#Wrong').style.display = "none";
  document.querySelector('#whichFriend').style.display = "none";
}

function selectChandler() {
  // console.log('Chandler was clicked');
  var wwho = document.querySelector('#whichFriend').textContent;
  // console.log(wwho);
  if (wwho == 'Chandler') {
    // console.log('match');
    document.querySelector('#Right').style.display = "block";
    showWho();
  } else {
    console.log('not a match');
    document.querySelector('#Wrong').style.display = "block";
    showWho();
  }
}

function selectJoey() {
  var wwho = document.querySelector('#whichFriend').textContent;
  if (wwho == 'Joey') {
    document.querySelector('#Right').style.display = "block";
    showWho();
  } else {
    console.log('not a match');
    document.querySelector('#Wrong').style.display = "block";
    showWho();
  }
}

function selectMonica() {
  var wwho = document.querySelector('#whichFriend').textContent;
  if (wwho == 'Monica') {
    document.querySelector('#Right').style.display = "block";
    showWho();
  } else {
    console.log('not a match');
    document.querySelector('#Wrong').style.display = "block";
    showWho();
  }
}

function selectPhoebe() {
  var wwho = document.querySelector('#whichFriend').textContent;
  if (wwho == 'Phoebe') {
    document.querySelector('#Right').style.display = "block";
    showWho();
  } else {
    console.log('not a match');
    document.querySelector('#Wrong').style.display = "block";
    showWho();
  }
}

function selectRachel() {
  var wwho = document.querySelector('#whichFriend').textContent;
  if (wwho == 'Rachel') {
    document.querySelector('#Right').style.display = "block";
    showWho();
  } else {
    console.log('not a match');
    document.querySelector('#Wrong').style.display = "block";
    showWho();
  }
}

function selectRoss() {
  var wwho = document.querySelector('#whichFriend').textContent;
  if (wwho == 'Ross') {
    document.querySelector('#Right').style.display = "block";
    showWho();
  } else {
    console.log('not a match');
    document.querySelector('#Wrong').style.display = "block";
    showWho();
  }
}



//const endpoint ='https://random-quote-generator.herokuapp.com/api/quotes/random'
//const endpoint = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'
//const endpoint = 'http://quotes.stormconsultancy.co.uk/random.json'
// const endpoint = 'https://catfact.ninja/fact';
//use displayQuote(json.fact)
// const endpoint = 'https://randommarvelquoteapi.herokuapp.com/';
//use displayQuote(json.quote)
// const endpoint = 'https://zenquotes.io/api/quotes/';
const endpoint = 'https://friends-quotes-api.herokuapp.com/quotes/random';
// displayQuote(json.quote);
