import React from 'react'
import Quote from './Quote'
import Spinner from './Spinner'
import Pagination from './Pagination'

function AllAuthorQuotes({allAuthorQuotes, loading, setRandomQuotePageFocus, pagination}) {
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
            <Pagination pagination={pagination}/>
            <button onClick={() => setRandomQuotePageFocus(true)}>Back to the random quote generator</button>
        </div>
    )
}

export default AllAuthorQuotes
