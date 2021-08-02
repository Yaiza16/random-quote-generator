import React, {useState, useEffect} from 'react';
import randomQuote from './helpers/randomQuote';
import './App.css';
import SingleQuote from './components/SingleQuote';

const initialQuote = {
  author: "Johnny Depp",
  genre: "Action",
  text: "Hey, hey, hey",
  id: "29sgds257298"
}


function App() {
  const [quote, setQuote] = useState(initialQuote);
  const [loading, setLoading] = useState(true) //Control when a request is loading


  // Update random quote once after the initial rendering
  useEffect(() =>{
    updateRandomQuote()
  },[]) 


  // Receive random quote request
  const updateRandomQuote = () =>{
    randomQuote(setLoading)
            .then((data) =>{
              setQuote(data)
            })
  }

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <SingleQuote quote={quote} loading={loading}/>
     <button onClick={() => updateRandomQuote()}>Generate another random quote</button>
      
      
      
    </div>
  );
}

export default App;
