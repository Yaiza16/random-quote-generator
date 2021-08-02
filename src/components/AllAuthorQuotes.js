import React from 'react'
import Quote from './Quote'
import Spinner from './Spinner'

function AllAuthorQuotes({allAuthorQuotes, loading, setRandomQuotePageFocus}) {
    console.log('AllAuthorQuotes runs')
    return (
        <div>
            {
                loading 
                    ? <Spinner />
                    : allAuthorQuotes.map(quote => (
                        <Quote key={quote.id} quoteAuthor={quote}/>
                    ))
            }
            <button onClick={() => setRandomQuotePageFocus(true)}>Back to the random quote generator</button>
        </div>
    )
}

export default AllAuthorQuotes
