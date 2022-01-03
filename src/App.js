import "././styles/App.css";
import "././styles/pagination.css"
import { useState, useEffect } from "react";
import Story from "./components/Story"

/* TODO

1. Make SearchBar its own component
2. Make Pagination its own component
3. Add loading screen
4. Add 'Stories' and 'Comments' filter
5. Use ReactRouter for pagination

*/

export default function App(props) {
  const [stories, setStories] = useState([])
  const [query, setQuery] = useState('microdosing')
  const [pageNumber, setPageNumber] = useState(1)
  const url = "https://hn.algolia.com/api/v1/search?query=";

  const fetchNews = () => {
    fetch(`${url}${query}&page=${pageNumber}`)
    .then((res) => res.json())
    .then((res) => setStories(res.hits))
    .then((res) => setQuery(query))
    .then(() => setQuery(''))
    .then((res) => setPageNumber(pageNumber))
  }

  const handleSearchSubmit = e => {
    e.preventDefault()
    fetchNews()
  }

  const Pagination = () => {
    let pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    return (
      <>
        <div className='pagination'>
          {pages.map((page) => (
            <a onClick={(e) => setPageNumber(e.target.value)}>{page}</a>
          ))}
        </div>
      </>
    )
  }

  // const handlePagination = e => {
  //   // should add page number to API call when page number is clicked
  // }

  useEffect(() => {
    fetchNews()}, [])

  return (
    <div className="App">
      <form onSubmit={handleSearchSubmit}>
        <input
          type='text'
          placeholder='Search stories by title, url or author'
          value={query}
          onChange={(e) => setQuery(e.target.value)}>
        </input>
      </form>
      <Story stories={stories}/>
      <Pagination />
    </div>
  );
}
