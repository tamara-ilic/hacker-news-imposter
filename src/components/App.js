import '../styles/App.css'
import '../styles/pagination.css'
import DotLoader from 'react-spinners/DotLoader'

import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/userContext'

import Header from './Header'
import StoryList from './StoryList'
import Sidebar from './Sidebar'
import Pagination from './Pagination'

export default function App() {

  const { stories, setQuery, url, fetchNews, pageNumber, setPageNumber } = useContext(UserContext)

  const [loading, setLoading] = useState(true)
  const [color, setColor] = useState('orange')

  useEffect(() => {
    if (stories[0]) setLoading(false)
  }, [stories])

  // Revisit
  const debounce = (func, wait) => {
    let timeout
  
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
  
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  const handleSearch = (e) => {
    setPageNumber(0)
    setQuery(e.target.value)
    debounce(fetchNews(url, pageNumber), 5000)
  }

  if (loading) 
    return <DotLoader color={color} size={180} />
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