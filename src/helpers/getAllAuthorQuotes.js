const getAllAuthorQuotes = async (authorName, setLoading, pageNumber) =>{
    // Set loader
    console.log(pageNumber)
    setLoading(true)
    
    const url = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${authorName}&limit=3&page=${pageNumber}`
    console.log(pageNumber)
    const res = await fetch(url)
    const data = await res.json();

    //Set loader
    setLoading(false)
    return data
}

export default getAllAuthorQuotes;
