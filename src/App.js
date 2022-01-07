import "././styles/App.css";
import "././styles/pagination.css"
import { css } from "@emotion/react";
import DotLoader from 'react-spinners/DotLoader'
import { useState, useEffect } from "react";
import SearchIcon from "./images/SearchIcon";
import StoryList from "./components/StoryList"

/* TODO

1. Make SearchBar its own component
2. Make Pagination its own component
3. Position loader in center of page
4. Only 6 pages to be displayed at once with >> for remaining
5. Add 'Stories' and 'Comments' filter
6. Use ReactRouter for pagination
7. Shorten the links for the host name

*/

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
    fetch(`${url}&page=${pageNumber}&tags=story`)
    .then((res) => res.json())
    .then((res) => {
      setNumberOfHits(res.nbHits)
      setNumberOfPages(res.nbPages)
      setStories(res.hits)
      setPageNumber(1)
    })
  }

  const handleSearch = e => {
    setQuery(e.target.value)
    fetchNews(url, pageNumber)
  }

  const handlePageChange = e => {
    // pages from API start from 0
    const activePage = e.target
    const newPage = parseInt(activePage.textContent) - 1
    setPageNumber(newPage)
    console.log(pageNumber)
    fetchNews(url, newPage)
  }

  const Pagination = () => {
    const storiesPerPage = 20
    let pages = []
    for (let i = 0; i < numberOfPages; i++) {
      pages.push(i + 1)
    }
    return (
      <>
        <div className='pagination'>
          {pages.map((page) => (
            <a onClick={handlePageChange} className={`${pageNumber === page ? "active" : ""}`} >{page}</a>
          ))}
        </div>
      </>
    )
  }

  useEffect(() => {
    fetchNews(url, pageNumber)
  }, [])

  useEffect(() => {
    if (stories[0]) setLoading(false)
  }, [stories])

  const override = css`
    display: flex;
    justify-content: center;
    margin: auto;
    border-color: red;
  `;

  if (loading) 
    return <DotLoader color={color} size={180} css='override'/>
  else {
    return (
      <div className="App">
        <div className='search-container'>
          <SearchIcon />
          <input
            type='text'
            placeholder='Search stories by title, url or author'
            value={query}
            onChange={handleSearch}>
          </input>
        </div>
  
        <StoryList stories={stories}/>
  
        <Pagination />
      </div>
    )
  }
}
