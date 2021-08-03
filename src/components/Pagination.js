import React from 'react'

export default function Pagination({pagination, setPageNumber, maxPageNumberLimit, minPageNumberLimit, pageNumberLimit}) {
    // const [pageNumberLimit, setPageNumberLimit] = useState(5)
    // const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
    // const [minPageNumberLimit, setMinPageNumberLimit] = useState(1)

    console.log('Render pagination component')
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
    console.log("Currente page: " + pagination.currentPage)
    // console.log(pagination.totalPages)

    return (
        <div>
            {
                // pageNumbers.length >0 && 
                //     <ul className="pagination">
                //     {pageNumbers.map(number => (
                //         <li key={number}><a onClick={() => setPageNumber(number)} href="!#">{number}</a></li>
                //     ))}
                //     </ul>

                pageNumbers.length >0 &&
                    <ul className = "pagination">
                        {pagination.currentPage > 1 &&<button onClick={() => setPageNumber(pagination.currentPage -1)}>Previous</button>}
                        {minPageNumberLimit !== 1 && <button onClick={() => setPageNumber(minPageNumberLimit -1)}> &hellip; </button>}  

                        {pageNumbersShowed.map(number => (
                            <li key={number}><a onClick={() => setPageNumber(number)} href="!#">{number}</a></li>
                        ))}

                        {maxPageNumberLimit < pageNumbers.length && <button onClick={() => setPageNumber(maxPageNumberLimit +1)}> &hellip; </button> } 
                        {pagination.currentPage !== pagination.totalPages  && <button onClick={() => setPageNumber(pagination.currentPage +1)}>Next</button>}
                    </ul>
                
            }
        </div>
    )
}
