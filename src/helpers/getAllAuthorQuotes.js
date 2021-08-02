const getAllAuthorQuotes = async (authorName, setLoading) =>{
    // Set loader
    setLoading(true)

    const url = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${authorName}`
    const res = await fetch(url)
    const data = await res.json();
    const numberOfQuotes = await data.totalQuotes;
    console.log(data.totalQuotes)

    const newUrl = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${authorName}&limit=${numberOfQuotes}`
    const newRes = await fetch(newUrl)
    const newData = await newRes.json();
    const newQuote = await newData.data

    const allQuotes = newQuote.map(quote =>(
        {
            id: quote._id,
            author: quote.quoteAuthor,
            genre: quote.quoteGenre,
            text: quote.quoteText
        }
    ))

    //Set loader
    setLoading(false)
    return allQuotes
}

export default getAllAuthorQuotes;


// const getAllAuthorQuotes = async (authorName, setLoading) =>{
//     // Set loader
//     setLoading(true)

//     const url = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${authorName}`
//     const res = await fetch(url)
//     const data = await res.json();
//     const newQuote = await data.data;
//     console.log(data.totalQuotes)

//     const allQuotes = newQuote.map(quote =>(
//         {
//             id: quote._id,
//             author: quote.quoteAuthor,
//             genre: quote.quoteGenre,
//             text: quote.quoteText
//         }
//     ))

//     //Set loader
//     setLoading(false)
//     return allQuotes
// }

// export default getAllAuthorQuotes;

