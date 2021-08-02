import React from 'react'

export default function Pagination({pagination, setPageNumber}) {
    console.log('Render pagination component')
    const pageNumbers = []

    if (pagination.totalPages > 1){
        for(let i = 1; i <= pagination.totalPages; i++){
            pageNumbers.push(i)
        }
        // console.log('PageNumbers: ' + pageNumbers)
        // console.log(pageNumbers)
    }
    return (
        <div>
            {
                pageNumbers.length>0 && 
                <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number}><a onClick={() => setPageNumber(number)} href="!#">{number}</a></li>
                ))}
            </ul>

            }
        </div>
    )
}
