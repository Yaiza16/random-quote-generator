

const getQueryResult = async (query, optionValue, setLoading, pageNumber) =>{
    // Set loader
    setLoading(true)


    if (optionValue === 'text'){
        const url = `https://quote-garden.herokuapp.com/api/v3/quotes?query=${query}&limit=3&page=${pageNumber}`
        const res = await fetch(url)
        const data = await res.json();

        //Set loader
        setLoading(false)
        return data;
        
    }else{
        const url = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${query}&limit=3&page=${pageNumber}`
        const res = await fetch(url)
        const data = await res.json();

        //Set loader
        setLoading(false)
        return data;
    }
}

export default getQueryResult