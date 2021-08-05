

const getQueryResult = async (query, optionValue, setLoading, pageNumber) =>{
    // Set loader
    setLoading(true)

    optionValue === 'text' ? console.log('Is text') : console.log('Is author')

    if (optionValue === 'text'){
        const url = `https://quote-garden.herokuapp.com/api/v3/quotes?query=${query}&limit=3&page=${pageNumber}`
        console.log(url)
        const res = await fetch(url)
        const data = await res.json();
        console.log(data.totalQuotes)

        //Set loader
        setLoading(false)
        return data;
    }else{
        const url = `https://quote-garden.herokuapp.com/api/v3/quotes?author=${query}&limit=3&page=${pageNumber}`
        const res = await fetch(url)
        const data = await res.json();
        console.log(data.pagination)

        //Set loader
        setLoading(false)
        return data;
    }

}


// const getQueryResult = async (query, optionValue) =>{

//     const url = `https://quote-garden.herokuapp.com/api/v3/quotes?query=${query}&limit=3`
//     const res = await fetch(url)
//     const data = await res.json();

//     return data
// }

export default getQueryResult