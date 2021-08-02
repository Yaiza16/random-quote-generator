import React, {useState, useEffect} from 'react';
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


function App() {
  const [quote, setQuote] = useState(initialQuote);
  const [loading, setLoading] = useState(true) //Control when a request is loading
  const [allAuthorQuotes, setAllAuthorQuotes] = useState(initialAllAuthorQuotes)
  const [randomQuotePageFocus, setRandomQuotePageFocus] = useState(true)


  // Update random quote once after the initial rendering
  useEffect(() =>{
    updateRandomQuote()
  },[]) 


  // Receive random quote request
  const updateRandomQuote = () =>{
    setRandomQuotePageFocus(true)
    getRandomQuote(setLoading)
            .then((data) =>{
              setQuote(data)
            })
  }

  // Receive all author quotes request
  const updateAllAuthorQuotes = () =>{
    setRandomQuotePageFocus(false)
    getAllAuthorQuotes(quote.author, setLoading)
                    .then((data) =>{
                      setAllAuthorQuotes(data)
                      console.log(data)
                    })
  }

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      {
        randomQuotePageFocus
                ? <SingleQuote quote={quote} loading={loading} randomQuotePageFocus={randomQuotePageFocus}/>
                : <AllAuthorQuotes allAuthorQuotes={allAuthorQuotes} randomQuotePageFocus={randomQuotePageFocus}/>    

      }

      <button onClick={() => updateRandomQuote()}>Generate another random quote</button>
      <button onClick={() => updateAllAuthorQuotes()}>Show all quotes by {quote.author}</button>
      
    </div>
  );
}

export default App;
