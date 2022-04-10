
//These all do the same thing, but the best choice is the third or 4th line
// because they are the most specific.
// var quoteButton = document.queryselector('button');
// var quoteButton = document.queryselector('.new-quote button');
// var quoteButton = document.getelementbyid('js-new-quote');
// var quoteButton = document.queryselector('#js-new-quote');
// let quoteButton = document.queryselector('#js-new-quote');
const quoteButton = document.querySelector('#js-new-quote');
const whoButton = document.querySelector('#who');

//What is the difference between queryselector or getelementbyid
//What is the difference between let, var, and const

quoteButton.addEventListener('click',getQuote);
quoteButton.addEventListener('click',showWho);
// whoButton.addEventListener('click',showWho);

//This function is asynchronous.
//This means means we can use the 'await' keyword below it.
//Await will pause the funtion while waiting for an operation to complete.
//More info here:  https://javascript.info/async-await
async function getQuote () {
  //This line isn't necessary, but is a debug tool.
  //We can see what's happening by viewing the log.
  console.log("quote button was clicked");

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
