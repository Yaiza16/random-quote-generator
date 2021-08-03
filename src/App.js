import React, {useState, useEffect, useCallback} from 'react';
import getRandomQuote from './helpers/getRandomQuote';
import './App.css';
import SingleQuote from './components/SingleQuote';
import getAllAuthorQuotes from './helpers/getAllAuthorQuotes';
import AllAuthorQuotes from './components/AllAuthorQuotes';

const initialQuote = {
  author: "Johnny Depp",
  genre: "Action",
  text: "Hey, hey, hey",
  id: "29sgds257298"
}

const initialAllAuthorQuotes = [
  {
      author: "Johnny Depp",
      genre: "Action",
      text: "Hey, hey, hey",
      id: "29sgds257298dee"
  },
  {
      author: "Johnny Depp",
      genre: "Action",
      text: "Huy, huy, huy",
      id: "29sgds25dd7298gsd"
  }
]

const initialPagination = {
  "currentPage": 1,
  "nextPage": null,
  "totalPages": 1
}


function App() {
  const [quote, setQuote] = useState(initialQuote);
  const [loading, setLoading] = useState(true) //Control when a request is loading
  const [allAuthorQuotes, setAllAuthorQuotes] = useState(initialAllAuthorQuotes)
  const [randomQuotePageFocus, setRandomQuotePageFocus] = useState(true) // Control when we change from randomQuotePage to allAuthorQuotesPage
  const [pagination, setPagination] = useState(initialPagination)
  const [pageNumber, setPageNumber] = useState(1)

  const [pageNumberLimit, setPageNumberLimit] = useState(5)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(1)

  // Update random quote once after the initial rendering
  useEffect(() =>{
    updateRandomQuote()
  },[]) 

  
  // Every time pageNumber changes, check if the new pageNumber is printed in the pagination.
  useEffect(() =>{
    if (pageNumber > maxPageNumberLimit){
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }

    if (pageNumber < minPageNumberLimit){
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }

  }, [pageNumber, maxPageNumberLimit, minPageNumberLimit, pageNumberLimit])

// useEffect(() =>{
//   updateAllAuthorQuotes(pageNumber)
// }, [pageNumber])

  // Receive random quote request
  const updateRandomQuote = () =>{
    setPageNumber(1)
    setRandomQuotePageFocus(true)
    getRandomQuote(setLoading)
            .then((data) =>{
              setQuote(data)
            })
  }

  // Receive all author quotes request
  const updateAllAuthorQuotes = useCallback((pageNumber) =>{
    setRandomQuotePageFocus(false)
    getAllAuthorQuotes(quote.author, setLoading, pageNumber)
                    .then((data) =>{
                      const newArray = data.data
                      setPagination(data.pagination)
                      setAllAuthorQuotes(() => generateNewAllAuthorQuotesArray(newArray))
                    })
  }, [quote.author])


  
  // const changePageNumber = number =>{
  //   setPageNumber(number)
  //   updateAllAuthorQuotes(pageNumber)
  // }

  // Move to another page
  // const updateCurrentlyPageNumber = number =>{
  //   setPageNumber(number)
  //   updateAllAuthorQuotes(pageNumber)
  // }


  // Generate new array with the author quotes and the right property's name
  function generateNewAllAuthorQuotesArray(array){
    const newAllAuthorQuotesArray = array.map(quote =>({
      id: quote._id,
      author: quote.quoteAuthor,
      genre: quote.quoteGenre,
      text: quote.quoteText
    }))

    return newAllAuthorQuotesArray
  }



  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      {
        randomQuotePageFocus
                ? <SingleQuote quote={quote} loading={loading} randomQuotePageFocus={randomQuotePageFocus} updateRandomQuote={updateRandomQuote} updateAllAuthorQuotes={updateAllAuthorQuotes}/>
                : <AllAuthorQuotes allAuthorQuotes={allAuthorQuotes} loading={loading} setRandomQuotePageFocus={setRandomQuotePageFocus} pagination={pagination} setPageNumber={setPageNumber} pageNumber={pageNumber} updateAllAuthorQuotes={updateAllAuthorQuotes} maxPageNumberLimit={maxPageNumberLimit} minPageNumberLimit={minPageNumberLimit} pageNumberLimit={pageNumberLimit}/>    
      }

      {/* <button onClick={() => updateRandomQuote()}>Generate another random quote</button> */}
      {/* <button onClick={() => updateAllAuthorQuotes()}>Show all quotes by {quote.author}</button> */}
      
    </div>
  );
}

export default App;
