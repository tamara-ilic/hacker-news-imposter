import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {

    const [stories, setStories] = useState([])
    const [query, setQuery] = useState('microdosing')
    let [pageNumber, setPageNumber] = useState(0)
    let [numberOfHits, setNumberOfHits] = useState(0)
    let [numberOfPages, setNumberOfPages] = useState(0)

    const url = `https://hn.algolia.com/api/v1/search?query=${query}`

    const fetchNews = (url, pageNumber) => {
      console.log(`called with query: ${query} at ${new Date().getSeconds()}`)
      fetch(`${url}&page=${pageNumber}&tags=story`)
      .then((res) => res.json())
      .then((res) => {
        setNumberOfHits(res.nbHits)
        setNumberOfPages(res.nbPages)
        setStories(res.hits)
        setPageNumber(pageNumber)
      })
    }
  
    useEffect(() => {
      fetchNews(url, pageNumber)
    }, [])

    const handlePageChange = (e) => {
        const activePage = e.target
        // pages from API start from 0
        const newPage = parseInt(activePage.textContent) - 1
        setPageNumber(newPage)
        fetchNews(url, newPage)
    }
  
    return (
        <UserContext.Provider value={{ 
            stories,
            query,
            setQuery,
            url,
            fetchNews,
            pageNumber,
            setPageNumber,
            numberOfHits,
            numberOfPages,
            handlePageChange
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider