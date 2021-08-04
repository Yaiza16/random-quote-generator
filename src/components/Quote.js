import React from 'react'
import './Quote.css'


function Quote({quote, quoteAuthor, randomQuotePageFocus, querySearchQuotesNull}) {
    
    querySearchQuotesNull ? console.log('is true') : console.log('is false')

    return (
        <div className="card">
            <p className="card-quote">{randomQuotePageFocus 
                                ? quote.text 
                                : quoteAuthor.text}</p>

            <i className="card-author">~ {randomQuotePageFocus 
                                ? quote.author 
                                : quoteAuthor.author}</i>
        </div>
    )
}

export default Quote
