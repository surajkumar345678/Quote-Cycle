const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
let apiQuotes = [];

// show new quote
function newQuote() {
    // select random quote
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // empty author field
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }

    quoteText.textContent = quote.text;
}

// quotes api
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {

    }
}

// Tweet quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// new quote button
newQuoteBtn.addEventListener('click', newQuote);
// tweetQuote button
twitterBtn.addEventListener('click', tweetQuote);

getQuotes();