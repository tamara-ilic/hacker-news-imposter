import '../styles/App.css'
import '../styles/Pagination.css'
import DotLoader from 'react-spinners/DotLoader'

import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/userContext'

import Burger from '../images/Burger'
import Header from './Header'
import StoryList from './StoryList'
import Pagination from './Pagination'
import Sidebar from './Sidebar'

export default function App() {

  const { stories, setQuery, url, fetchNews, pageNumber, setPageNumber } = useContext(UserContext)

  const [loading, setLoading] = useState(true)
  const [color, setColor] = useState('orange')
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    if (stories[0]) setLoading(false)
  }, [stories])

  // let filterTimeout

  const handleSearch = (e) => {
    // clearTimeout(filterTimeout)
    // filterTimeout = setTimeout(() => {
      setPageNumber(0)
      setQuery(e.target.value)
      fetchNews(url, pageNumber)
    // }, 500)
  }

  const filterSearch = () => {
    // const option1 = stories.filter(story => story.tag === 'story')
    // const option2 = stories.filter(story => story.tag === 'story')
    // setStories(option1) when 'Stories' selected
      // setStories(option2) when 'Comments' selected
      // default to All
  }

  const toggleMenu = () => {
    setOpenMenu(prevState => !prevState)
    console.log(openMenu)
  }

  if (loading) 
    return <DotLoader color={color} size={180} />
  else {
    return (
      <div className='App'>
        <Header onSearchInput={handleSearch} />
        <div className='menu-filters'>
          <button onClick={toggleMenu} className='menu'>
            {openMenu ? 'x' : <Burger />}
          </button>
          <div className='search-filters'>
            <span>Sort by</span>
            <select className='search-dropdown'>
              <option>Popularity</option>
              <option>Date</option>
            </select>
          </div>
        </div>
        <StoryList stories={stories}/>
        <Pagination />
        <Sidebar toggleMenu={toggleMenu} openMenu={openMenu} />
      </div>
    )
  }
}