import React from 'react'
import Quote from './Quote'

function SingleQuote({quote}) {
    return (
        <div>
            <Quote key={quote.id} quote={quote} />
        </div>
    )
}

export default SingleQuote
