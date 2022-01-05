import "././styles/App.css";
import "././styles/pagination.css"
import { useState, useEffect } from "react";
import StoryList from "./components/StoryList"

/* TODO

1. Make SearchBar its own component
2. Make Pagination its own component
3. Add loading screen
4. Only 6 pages to be displayed at once with >> for remaining
5. Add 'Stories' and 'Comments' filter
6. Use ReactRouter for pagination

*/

export default function App(props) {
  const [stories, setStories] = useState([])
  const [query, setQuery] = useState('microdosing')
  let [pageNumber, setPageNumber] = useState(0)

  const url = `https://hn.algolia.com/api/v1/search?query=${query}`;

  const fetchNews = (url, pageNumber) => {
    fetch(`${url}&page=${pageNumber}`)
    .then((res) => res.json())
    .then((res) => setStories(res.hits))
  }

  const handleSearch = e => {
    setQuery(e.target.value)
    fetchNews(url, pageNumber)
  }

  const handlePageChange = e => {
    const newPage = parseInt(e.target.textContent)
    fetchNews(url, newPage)
  }

  const Pagination = () => {
    let pages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]  
    return (
      <>
        <div className='pagination'>
          {pages.map((page) => (
            <a onClick={handlePageChange}>{page}</a>
          ))}
        </div>
      </>
    )
  }

  useEffect(() => {
    fetchNews(url, pageNumber)
  }, [])

  return (
    <div className="App">
      {/* <form onSubmit={handleSearchSubmit}> */}
        <input
          type='text'
          placeholder='Search stories by title, url or author'
          value={query}
          onChange={handleSearch}>
        </input>
      {/* </form> */}
      <StoryList stories={stories}/>
      <Pagination />
    </div>
  );
}
