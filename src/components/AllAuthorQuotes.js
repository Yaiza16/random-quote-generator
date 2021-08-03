import React, {useEffect} from 'react'
import Quote from './Quote'
import Spinner from './Spinner'
import Pagination from './Pagination'

function AllAuthorQuotes({allAuthorQuotes, loading, setRandomQuotePageFocus, pagination, setPageNumber, pageNumber, updateAllAuthorQuotes, maxPageNumberLimit, minPageNumberLimit, pageNumberLimit, querySearchPageFocus, allQuerySearchQuotes, setText}) {
    
    useEffect(() =>{
        console.log('varUsed')
    }, [])


    useEffect(() =>{
        updateAllAuthorQuotes(pageNumber)
    },[pageNumber, updateAllAuthorQuotes])

    let varUsed;
    querySearchPageFocus
                    ? varUsed = allQuerySearchQuotes
                    : varUsed= allAuthorQuotes

    return (
        <div>
            {
                loading 
                    ? <Spinner />
                    :   varUsed.map(quote => (
                        <Quote key={quote.id} quoteAuthor={quote} />
                    ))
            }
            <Pagination pagination={pagination} setPageNumber={setPageNumber} maxPageNumberLimit={maxPageNumberLimit} minPageNumberLimit={minPageNumberLimit} pageNumberLimit={pageNumberLimit}/>
            <button onClick={() => {
                setText("")
                setRandomQuotePageFocus(true)}}>Back to the random quote generator</button>
        </div>
    )
}

export default AllAuthorQuotes
