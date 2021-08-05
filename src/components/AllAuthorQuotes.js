import React, {useEffect} from 'react'
import Quote from './Quote'
import Spinner from './Spinner'
import Pagination from './Pagination'
import './AllAuthorQuotes.css';

function AllAuthorQuotes({allAuthorQuotes, loading, setRandomQuotePageFocus, pagination, setPageNumber, pageNumber, updateAllAuthorQuotes, maxPageNumberLimit, minPageNumberLimit, pageNumberLimit, querySearchPageFocus, allQuerySearchQuotes, setText, querySearchQuotesNull}) {
    useEffect(() =>{
        updateAllAuthorQuotes(pageNumber)
    },[pageNumber, updateAllAuthorQuotes])

    
    let varUsed;
    querySearchPageFocus
                    ? varUsed = allQuerySearchQuotes
                    : varUsed= allAuthorQuotes


    if (querySearchQuotesNull){
        return (
            <>
                <i className="no-data-message">No data found</i>
                <button className="general-button" onClick={() => {
                    setText("")
                    setRandomQuotePageFocus(true)}}>Back to the random quote generator</button>
            </>)
    }

    else{
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
                    setRandomQuotePageFocus(true)
                    setPageNumber(1)}}>Back to the random quote generator</button>
            </>
        )
}
    
}

export default AllAuthorQuotes
