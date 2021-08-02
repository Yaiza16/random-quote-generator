const randomQuote = async (setLoading) =>{
    // Set loader
    // setLoading(true)
    const url = 'https://quote-garden.herokuapp.com/api/v3/quotes/random'
    const res = await fetch(url)
    const data = await res.json();
    const newQuote = await data.data[0]

    let {quoteAuthor:author, quoteGenre:genre, quoteText:text, _id:id} = newQuote

    const singleQuote = {
      author,
      genre,
      text,
      id
    }

    //Set loader
    // setLoading(false)
    return singleQuote
}

export default randomQuote;