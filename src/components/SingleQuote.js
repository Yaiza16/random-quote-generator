import React from 'react'
import Quote from './Quote'
import Spinner from './Spinner'

function SingleQuote({quote, loading}) {
    console.log('SingleQuote runs')
    return (
        <div>
            {
                loading
                    ? <Spinner />
                    :<Quote key={quote.id} quote={quote} />
            }
        </div>
    )
}

export default SingleQuote
