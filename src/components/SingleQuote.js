import React from 'react'
import Quote from './Quote'
import Spinner from './Spinner'
import './SingleQuote.css'

function SingleQuote({quote, loading, randomQuotePageFocus, updateRandomQuote, updateAllAuthorQuotes}) {
    return (
        <>
            {
                loading
                    ? <Spinner />
                    :<Quote key={quote.id} quote={quote} randomQuotePageFocus={randomQuotePageFocus} />
            }
            <button className="general-button" onClick={() => updateRandomQuote()}>Generate another random quote</button>
            <button className="general-button" onClick={() => updateAllAuthorQuotes()}>Show all quotes by {quote.author}</button>
        </>
    )
}

export default SingleQuote
