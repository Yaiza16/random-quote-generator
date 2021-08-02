import React from 'react'
import Quote from './Quote'
import Spinner from './Spinner'

function SingleQuote({quote, loading}) {
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
