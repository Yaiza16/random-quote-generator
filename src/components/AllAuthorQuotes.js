import React, {useEffect} from 'react'
import Quote from './Quote'
import Spinner from './Spinner'
import Pagination from './Pagination'

function AllAuthorQuotes({allAuthorQuotes, loading, setRandomQuotePageFocus, pagination, setPageNumber, pageNumber, updateAllAuthorQuotes, maxPageNumberLimit, minPageNumberLimit, pageNumberLimit, querySearchPageFocus, allQuerySearchQuotes, setText, querySearchQuotesNull}) {
    
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
        <>
            {
                loading 
                    ? <Spinner />
                    :   varUsed.map(quote => (
                        <Quote key={quote.id} quoteAuthor={quote} querySearchPageFocus={querySearchPageFocus} querySearchQuotesNull={querySearchQuotesNull} />
                    ))
            }
            <Pagination pagination={pagination} setPageNumber={setPageNumber} maxPageNumberLimit={maxPageNumberLimit} minPageNumberLimit={minPageNumberLimit} pageNumberLimit={pageNumberLimit}/>
            <button className="general-button" onClick={() => {
                setText("")
                setRandomQuotePageFocus(true)}}>Back to the random quote generator</button>
        </>
    )
}

export default AllAuthorQuotes
