import React from 'react'

function Quote({quote, quoteAuthor, randomQuotePageFocus}) {

    return (
        <div>
            <p>{randomQuotePageFocus 
                                ? quote.text 
                                : quoteAuthor.text}</p>

            <i>{randomQuotePageFocus 
                                ? quote.author 
                                : quoteAuthor.author}</i>
        </div>
    )
}

export default Quote
