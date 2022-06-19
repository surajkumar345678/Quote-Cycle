let apiQuotes=[];

// show new quote
function newQuote() {
    // select random quote
    const quote=apiQuotes[Math.floor(Math.random() *apiQuotes.length)];
    console.log(quote);
}

// quotes api
async function getQuotes(){
    const apiUrl='https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes=await response.json();
        newQuote();
    } catch(error){
        
    }
}

getQuotes();