import React, {useState, useEffect} from 'react';
import randomQuote from './helpers/randomQuote';
import './App.css';

const initialQuote = {
  author: "Johnny Depp",
  genre: "Action",
  text: "Hey, hey, hey",
  id: "29sgds257298"
}


function App() {
  const [quote, setQuote] = useState(initialQuote);

  // Update random quote once after the initial rendering
  useEffect(() =>{
    updateRandomQuote()
  },[]) 


  // Receive random quote request
  const updateRandomQuote = () =>{
    randomQuote()
            .then((data) =>{
              setQuote(data)
            })
  }

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <p>{quote.text}</p>
      <p>{quote.author}</p>
      
    </div>
  );
}

export default App;
