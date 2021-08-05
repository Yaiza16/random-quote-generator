const getAllAuthorQuotes = async (authorName, setLoading, pageNumber) =>{
    // Set loader
    setLoading(true)
    
    const url = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${authorName}&limit=3&page=${pageNumber}`
    const res = await fetch(url)
    const data = await res.json();

    //Set loader
    setLoading(false)
    return data
}

export default getAllAuthorQuotes;
