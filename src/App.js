import React, { useState, useEffect, useCallback } from "react";
import getRandomQuote from "./helpers/getRandomQuote";
import "./App.css";
import SingleQuote from "./components/SingleQuote";
import getAllAuthorQuotes from "./helpers/getAllAuthorQuotes";
import getQueryResult from "./helpers/getQueryResult"
import AllAuthorQuotes from "./components/AllAuthorQuotes";

const initialQuote = {
  author: "Johnny Depp",
  genre: "Action",
  text: "Hey, hey, hey",
  id: "29sgds257298",
};

const initialAllAuthorQuotes = [
  {
    author: "Johnny Depp",
    genre: "Action",
    text: "Hey, hey, hey",
    id: "29sgds257298dee",
  },
  {
    author: "Johnny Depp",
    genre: "Action",
    text: "Huy, huy, huy",
    id: "29sgds25dd7298gsd",
  },
];

const initialPagination = {
  currentPage: 1,
  nextPage: null,
  totalPages: 1,
};

const initialAllQuerySearchQuotes = [
  {
    author: "Johnny Depp",
    genre: "Action",
    text: "Hey, hey, hey",
    id: "29sgds257298dee",
  },
  {
    author: "Johnny Depp",
    genre: "Action",
    text: "Huy, huy, huy",
    id: "29sgds25dd7298gsd",
  },
];


function App() {
  const [quote, setQuote] = useState(initialQuote);
  const [loading, setLoading] = useState(true); //Control when a request is loading

  // Author quotes
  const [allAuthorQuotes, setAllAuthorQuotes] = useState(
    initialAllAuthorQuotes
  );

  // Value Options
  const [optionValue, setOptionValue] = useState('text')


  // Search input
  const [text, setText] = useState("")
  const [allQuerySearchQuotes, setAllQuerySearchQuotes] = useState(initialAllQuerySearchQuotes)
  const [querySearchPageFocus, setQuerySearchPageFocus] = useState(false) 
  const [querySearchQuotesNull, setQuerySearchQuotesNull] = useState(false)

  // Random quote
  const [randomQuotePageFocus, setRandomQuotePageFocus] = useState(true); // Control when we change from randomQuotePage to allAuthorQuotesPage
  const [pagination, setPagination] = useState(initialPagination);
  const [pageNumber, setPageNumber] = useState(1);

  // Pagination
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(1);



  // Update random quote once after the initial rendering
  useEffect(() => {
    updateRandomQuote();
  }, []);


  // Every time pageNumber changes, check if the new pageNumber is printed in the pagination.
  useEffect(() => {
    if (pageNumber > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }

    if (pageNumber < minPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }, [pageNumber, maxPageNumberLimit, minPageNumberLimit, pageNumberLimit]);


  // Send a request every time text changes
  useEffect(() => {
    const updateQueryResult = () =>{
      if (text==="" && !randomQuotePageFocus){
        setQuerySearchPageFocus(false)

      }
      else if (text === ""){
        setRandomQuotePageFocus(true)
        setQuerySearchPageFocus(false)
        setPageNumber(1)
      } 

      else if(text.length === 1){
        setPageNumber(1)
      }

      else{
        setRandomQuotePageFocus(false);
        setQuerySearchPageFocus(true)
        getQueryResult(text, optionValue, setLoading, pageNumber).then((data) => {
          const newArray = data.data;
          data.totalQuotes === 0 ? setQuerySearchQuotesNull(true) : setQuerySearchQuotesNull(false)

          setPagination(data.pagination);

          setAllQuerySearchQuotes(() => generateNewAllAuthorQuotesArray(newArray));
        })
      }
    }

    updateQueryResult()
  }, [text, optionValue, randomQuotePageFocus, pageNumber])



  // Receive random quote request
  const updateRandomQuote = () => {
    setPageNumber(1);
    setRandomQuotePageFocus(true);
    getRandomQuote(setLoading).then((data) => {
      setQuote(data);
    });
  };



  // Receive all author quotes request
  const updateAllAuthorQuotes = useCallback(
    () => {
     if (!querySearchPageFocus){
      setRandomQuotePageFocus(false);
      getAllAuthorQuotes(quote.author, setLoading, pageNumber).then((data) => {
        const newArray = data.data;
        setPagination(data.pagination);
        setAllAuthorQuotes(() => generateNewAllAuthorQuotesArray(newArray));
      });
     }
    },
    [quote.author, querySearchPageFocus, pageNumber]
  );



  // Generate new array with the author quotes and the right property's name
  function generateNewAllAuthorQuotesArray(array) {
    const newAllAuthorQuotesArray = array.map((quote) => ({
      id: quote._id,
      author: quote.quoteAuthor,
      genre: quote.quoteGenre,
      text: quote.quoteText,
    }));

    return newAllAuthorQuotesArray;
  }


  // Set optionValue
  const handleChangeOptionValue = e =>{
    setOptionValue(e.target.value)
  }


  return (
    <div className="App">
      <header className="header">
        <h1 className="header-title">Random Quote Generator</h1>
        <div className="query-search-container">
          <select className="query-options" value={optionValue} onChange={e => handleChangeOptionValue(e)}>
            <option value="text">Text</option>
            <option value="author">Author</option>
          </select>
          <input className="query-input" type="text" placeholder="Write your query here..." value={text} onChange={e => setText(e.target.value)} ></input>
        </div>
      </header>
      
      <section className="main">
      {randomQuotePageFocus ? (
        <SingleQuote
          quote={quote}
          loading={loading}
          randomQuotePageFocus={randomQuotePageFocus}
          updateRandomQuote={updateRandomQuote}
          updateAllAuthorQuotes={updateAllAuthorQuotes}
        />
      ) : (
        <AllAuthorQuotes
          allAuthorQuotes={allAuthorQuotes}
          loading={loading}
          setRandomQuotePageFocus={setRandomQuotePageFocus}
          pagination={pagination}
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
          updateAllAuthorQuotes={updateAllAuthorQuotes}
          maxPageNumberLimit={maxPageNumberLimit}
          minPageNumberLimit={minPageNumberLimit}
          pageNumberLimit={pageNumberLimit}
          querySearchPageFocus={querySearchPageFocus}
          allQuerySearchQuotes={allQuerySearchQuotes}
          querySearchQuotesNull={querySearchQuotesNull}
          setText={setText}
        />
      )}
      </section>
    </div>
  );
}

export default App;
