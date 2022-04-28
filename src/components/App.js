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

  const dropDownOptions = [
    {
      id: 1,
      value: 'Popularity'
    },
    {
      id: 2,
      value: 'Date'
    }
  ]

  const [loading, setLoading] = useState(true)
  const [color, setColor] = useState('orange')
  const [openMenu, setOpenMenu] = useState(false)
  const [sortResults, setSortResults] = useState(dropDownOptions[0].value)

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

  const toggleMenu = () => {
    setOpenMenu(prevState => !prevState)
  }

  const handleSort = (e, dropDownOption) => {
    if (e.target.value === 'Popularity') {
      setSortResults(dropDownOptions[0])
      const storiesSortedByPopularity = stories.sort((function(a, b) {
        return b.points -  a.points
      }))
      return storiesSortedByPopularity // default
    } else {
      setSortResults(dropDownOptions[1])
      const storiesSortedByDate = stories.sort((function(a, b) {
        return b.created_at_i -  a.created_at_i
      }))
      return storiesSortedByDate
    }
  }

  if (loading) 
    return <DotLoader color={color} size={180} />
  else {
    return (
      <div className='App'>

        <Header onSearchInput={handleSearch} />

        <div className='menu--filters'>
          <button onClick={toggleMenu} className='menu'>
            {openMenu ? 'x' : <Burger />}
          </button>
          <div className='search--filters'>
            <span>Sort by</span>
            <select onChange={(e) => handleSort(e, dropDownOptions)}>
              {dropDownOptions.map((option) => (
                <option key={option.id}>{option.value}</option>
              ))}
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