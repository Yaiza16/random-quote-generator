const getQueryResult = async (query) =>{

    const url = `https://quote-garden.herokuapp.com/api/v3/quotes?query=${query}&limit=3`
    const res = await fetch(url)
    const data = await res.json();

    return data
}

export default getQueryResult