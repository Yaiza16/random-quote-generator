import React, {useEffect} from 'react'
import Quote from './Quote'
import Spinner from './Spinner'
import Pagination from './Pagination'

function AllAuthorQuotes({allAuthorQuotes, loading, setRandomQuotePageFocus, pagination, setPageNumber, pageNumber, updateAllAuthorQuotes, maxPageNumberLimit, minPageNumberLimit, pageNumberLimit}) {
    // console.log('AllAuthorQuotes runs')

    useEffect(() =>{
        updateAllAuthorQuotes(pageNumber)
    },[pageNumber, updateAllAuthorQuotes])

    return (
        <div>
            {
                loading 
                    ? <Spinner />
                    : allAuthorQuotes.map(quote => (
                        <Quote key={quote.id} quoteAuthor={quote}/>
                    ))
            }
            <Pagination pagination={pagination} setPageNumber={setPageNumber} maxPageNumberLimit={maxPageNumberLimit} minPageNumberLimit={minPageNumberLimit} pageNumberLimit={pageNumberLimit}/>
            <button onClick={() => setRandomQuotePageFocus(true)}>Back to the random quote generator</button>
        </div>
    )
}

export default AllAuthorQuotes
