/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
By Paul B. Walker
******************************************/

// Got quotes from different places "100 years of movie quotes" was
// one of the place. "30 Best Movie Comedy quotes" is the other.

const quotes = [
  {
    quote: 		"I am serious. And don't call me Shirley.",
    source: 	"Leslie Nielsen",
    citation:   "Movie: Airplane",
    year: 		1980,
    tag:      "Comedy"
  },
  {
    quote: 		"I'm just one stomach flu away from my goal weight.",
    source: 	"Emily Blunt",
    citation:   "Movie: The Deveil Wears Prada",
    year: 		2006,
    tag:      "Satire"
  },
  {
    quote: 		"Leave the gun. Take the cannoli.",
    source: 	"Richard Castellano",
    citation:   "Movie: The Godfather",
    year: 		1972,
    tag:      "Drama"
  },
  {
    quote: 		"It's like I have ESPN or something.",
    source: 	"Amanda Seyfried",
    citation:   "Movie: Mean Girls",
    year: 		2004,
    tag:      "Comedy"
  },
  {
    quote: 		"Toto, I've a feeling we're not in Kansas anymore.",
    source: 	"Judy Garland",
    citation:   "Movie: The Wizard of Oz",
    year: 		1939,
    tag:      ""
  },
  {
    quote: 		"All we have to decide is what to do with the time that is given to us.",
    source: 	"Ian McKellen",
    citation:   "Movie: The Fellowship of the Ring",
    year: 		2001,
    tag:      "SciFi"
  }
];

// Create a function with 2 parameter that takes the low/high numbers for the rgb
// function

const randomNum = (low, high) => {
  return Math.floor(Math.random() * high) + low;
}

// Calls the randomNum and assign the high/low rgb color value rgb is like the 
// hexidecemal color value used in CSS limit high number to 175 for darker colors

const getRandomColor = () => {
  const rgb = `rgb(
                    ${randomNum(0, 175)}, 
                    ${randomNum(0, 175)}, 
                    ${randomNum(0, 175)}
                  )`
  document.body.style.background = rgb;
}

// I use the lenth property to insure adding more quotes will not effect
// the program. Also if you add + 1 into the randomNumber you will get
// an undefined and it comes up randomly.

const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

// Use template literals which made it easier to code

const printQuote = () => {
  let getQuote = getRandomQuote();
  let displayQuote = `<p class="quote">${getQuote['quote']}</p>
                      <p class="source">${getQuote['source']}
                      <span class="citation">${getQuote['citation']}</span>
                      <span class="year">${getQuote['year']}</span>
                      <span class="tag">${getQuote['tag']}</span>
                      </p>`;
                      
                      
  document.getElementById('quote-box').innerHTML = displayQuote;
  getRandomColor();
}

setInterval(printQuote, 30000);

// This line of code came with the project. Didn't change anything to make it work.

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

