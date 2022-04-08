//These all do the same thing, but the best choice is the third or 4th line
// because they are the most specific.
// var quoteButton = document.queryselector('button');
// var quoteButton = document.queryselector('.new-quote button');
// var quoteButton = document.getelementbyid('js-new-quote');
// var quoteButton = document.queryselector('#js-new-quote');
// let quoteButton = document.queryselector('#js-new-quote');
const quoteButton = document.querySelector('#js-new-quote');

//What is the difference between queryselector or getelementbyid
//What is the difference between let, var, and const

quoteButton.addEventListener('click',getQuote);

async function getQuote () {
  console.log("quote button was clicked");
  try {
    const response = await fetch(endpoint);
    if (!response.ok){
      throw Error(response.statusText);
    }

    const json = await response.json();
    console.log(json);
    displayQuote(json.fact);
  } catch(err) {
    console.log(err);
    alert('Failed');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

//const endpoint ='https://random-quote-generator.herokuapp.com/api/quotes/random'
//const endpoint = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'
//const endpoint = 'http://quotes.stormconsultancy.co.uk/random.json'
const endpoint = 'https://catfact.ninja/fact'
