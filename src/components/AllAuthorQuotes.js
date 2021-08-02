import React from 'react'
import Quote from './Quote'

function AllAuthorQuotes({allAuthorQuotes}) {
    console.log('AllAuthorQuotes runs')
    return (
        <div>
            {
                allAuthorQuotes.map(quote => (
                    <Quote id={quote.id} quoteAuthor={quote}/>
                ))
            }
        </div>
    )
}

export default AllAuthorQuotes
