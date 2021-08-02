import React from 'react'
import Quote from './Quote'
import Spinner from './Spinner'

function AllAuthorQuotes({allAuthorQuotes, loading}) {
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
        </div>
    )
}

export default AllAuthorQuotes
