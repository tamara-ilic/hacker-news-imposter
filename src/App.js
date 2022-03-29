import '././styles/App.css'
import '././styles/pagination.css'
import DotLoader from 'react-spinners/DotLoader'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import StoryList from './components/StoryList'
import Sidebar from './components/Sidebar'

export default function App(props) {
  const [stories, setStories] = useState([])
  const [query, setQuery] = useState('microdosing')
  let [pageNumber, setPageNumber] = useState(0)
  let [numberOfHits, setNumberOfHits] = useState(0)
  let [numberOfPages, setNumberOfPages] = useState(0)
  const [loading, setLoading] = useState(true)
  const [color, setColor] = useState('orange')

  const url = `https://hn.algolia.com/api/v1/search?query=${query}`;

  const fetchNews = (url, pageNumber) => {
    console.log('called with query: ', query)
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

  useEffect(() => {
    if (stories[0]) setLoading(false)
  }, [stories])

  const debounce = (func, wait) => {
    let timeout;
  
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
  
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const handleSearch = (e) => {
    setPageNumber(0)
    setQuery(e.target.value)
    debounce(fetchNews(url, pageNumber), 5000)
  }

  const handlePageChange = (e) => {
    const activePage = e.target
    // pages from API start from 0
    const newPage = parseInt(activePage.textContent) - 1
    setPageNumber(newPage)
    fetchNews(url, newPage)
  }

  const Pagination = () => {
    let pages = []
    const maxPages = numberOfPages > 10 ? 10 : numberOfPages
    for (let i = 0; i < maxPages; i++) {
      pages.push(i + 1)
    }
    return (
      <>
        <ul className='pagination'>
          {pages.map((page) => (
            <li>
              <button
                onClick={handlePageChange}
                className={`${pageNumber + 1 === page ? 'active' : ''}`}
                key={`page-${page}`}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </>
    )
  }

  if (loading) 
    return <DotLoader color={color} size={180} css='override'/>
  else {
    return (
      <div className='App'>

        <Header onSearchInput={handleSearch} />

        <StoryList stories={stories}/>
        
        <Pagination />

        <Sidebar />

      </div>
    )
  }
}
