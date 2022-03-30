import '../styles/App.css'
import '../styles/pagination.css'
import DotLoader from 'react-spinners/DotLoader'

import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/userContext'

import Header from './Header'
import StoryList from './StoryList'
import Pagination from './Pagination'
import Sidebar from './Sidebar'

export default function App() {

  const { stories, setQuery, url, fetchNews, pageNumber, setPageNumber } = useContext(UserContext)

  const [loading, setLoading] = useState(true)
  const [color, setColor] = useState('orange')

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