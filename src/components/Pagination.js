import React, {useEffect} from 'react'
import './Pagination.css'

export default function Pagination({pagination, setPageNumber, maxPageNumberLimit, minPageNumberLimit, pageNumberLimit}) {
    const updatePagination = () =>{
        const pageNumbers = []

        if (pagination.totalPages > 1){
            for(let i = minPageNumberLimit; i <= maxPageNumberLimit; i++){
                if (i <= pagination.totalPages){
                    pageNumbers.push(i)

                }
            }
        }
        return pageNumbers
    }


    return (
        <div className="pagination">
            {

                updatePagination().length >0 &&
                    <div className = "pagination-numbers">
                        {pagination.currentPage > 1 &&<button className="button-pagination" onClick={() => setPageNumber(pagination.currentPage -1)}>Previous</button>}
                        {minPageNumberLimit !== 1 && <button className="button-pagination" onClick={() => setPageNumber(minPageNumberLimit -1)}> &hellip; </button>}  

                        {updatePagination().map(number => (
                            pagination.currentPage === number   
                                                            ? <p className="page-number page-number--selected" key={number}><a className="page-number-link page-number-link--selected" onClick={() => setPageNumber(number)} href="!#">{number}</a></p>
                                                            : <p className="page-number" key={number}><a className="page-number-link" onClick={() => setPageNumber(number)} href="!#">{number}</a></p>
                        ))}

                        {maxPageNumberLimit < pagination.totalPages && <button className="button-pagination" onClick={() => setPageNumber(maxPageNumberLimit +1)}> &hellip; </button> } 
                        {pagination.currentPage !== pagination.totalPages  && <button className="button-pagination" onClick={() => setPageNumber(pagination.currentPage +1)}>Next</button>}
                    </div>
            }
        </div>
    )
}
