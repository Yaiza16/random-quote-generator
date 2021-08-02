import React from 'react'
import Quote from './Quote'
import Spinner from './Spinner'

function SingleQuote({quote, loading, randomQuotePageFocus, updateRandomQuote, updateAllAuthorQuotes}) {
    console.log('SingleQuote runs')
    return (
        <div>
            {
                loading
                    ? <Spinner />
                    :<Quote key={quote.id} quote={quote} randomQuotePageFocus={randomQuotePageFocus} />
            }
            <button onClick={() => updateRandomQuote()}>Generate another random quote</button>
            <button onClick={() => updateAllAuthorQuotes()}>Show all quotes by {quote.author}</button>
        </div>
    )
}

export default SingleQuote
