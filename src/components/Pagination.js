import React, {useEffect} from 'react'
import './Pagination.css'

export default function Pagination({pagination, setPageNumber, maxPageNumberLimit, minPageNumberLimit, pageNumberLimit}) {
    // const [pageNumberLimit, setPageNumberLimit] = useState(5)
    // const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
    // const [minPageNumberLimit, setMinPageNumberLimit] = useState(1)
    useEffect(() =>{
        console.log('Pagination render')
    }, [])

    // console.log('Render pagination component')
    const pageNumbers = []

    if (pagination.totalPages > 1){
        for(let i = 1; i <= pagination.totalPages; i++){
            pageNumbers.push(i)
        }
    }

    const pageNumbersShowed = pageNumbers.filter(pageNumber => pageNumber <= maxPageNumberLimit && pageNumber >= minPageNumberLimit)

    // console.log(pageNumbers)
    // console.log(pagination)
    // console.log(pageNumbers.length)
    // console.log("Currente page: " + pagination.currentPage)
    // console.log(pagination.totalPages)

    return (
        <div className="pagination">
            {
                // pageNumbers.length >0 && 
                //     <ul className="pagination">
                //     {pageNumbers.map(number => (
                //         <li key={number}><a onClick={() => setPageNumber(number)} href="!#">{number}</a></li>
                //     ))}
                //     </ul>

                pageNumbers.length >0 &&
                    <div className = "pagination-numbers">
                        {pagination.currentPage > 1 &&<button className="button-pagination" onClick={() => setPageNumber(pagination.currentPage -1)}>Previous</button>}
                        {minPageNumberLimit !== 1 && <button className="button-pagination" onClick={() => setPageNumber(minPageNumberLimit -1)}> &hellip; </button>}  

                        {pageNumbersShowed.map(number => (
                            pagination.currentPage === number   
                                                            ? <p className="page-number page-number--selected" key={number}><a className="page-number-link page-number-link--selected" onClick={() => setPageNumber(number)} href="!#">{number}</a></p>
                                                            : <p className="page-number" key={number}><a className="page-number-link" onClick={() => setPageNumber(number)} href="!#">{number}</a></p>
                        ))}

                        {maxPageNumberLimit < pageNumbers.length && <button className="button-pagination" onClick={() => setPageNumber(maxPageNumberLimit +1)}> &hellip; </button> } 
                        {pagination.currentPage !== pagination.totalPages  && <button className="button-pagination" onClick={() => setPageNumber(pagination.currentPage +1)}>Next</button>}
                    </div>
                
            }
        </div>
    )
}
