import React from 'react'

function Quote({quote}) {
    return (
        <div>
            <p>{quote.text}</p>
            <i>{quote.author}</i>
        </div>
    )
}

export default Quote
