import React, {useState} from 'react';
import './App.css';

const initialQuote = {
  author: "Johnny Depp",
  genre: "Action",
  text: "Hey, hey, hey",
  id: "29sgds257298"
}


function App() {
  const [quote, setQuote] = useState(initialQuote)

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <p>{quote.text}</p>
      <p>{quote.author}</p>
      
    </div>
  );
}

export default App;
