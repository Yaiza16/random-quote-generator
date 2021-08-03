import React, {useEffect} from 'react'

function Quote({quote, quoteAuthor, randomQuotePageFocus}) {
    useEffect(() =>{
        console.log('Quote render')
    },[])

    return (
        <div>
            <p>{randomQuotePageFocus ? quote.text : quoteAuthor.text}</p>
            <i>{randomQuotePageFocus ? quote.author : quoteAuthor.author}</i>
        </div>
    )
}

export default Quote
