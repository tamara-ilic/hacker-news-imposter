import '../styles/header.css'
import Logo from '../images/Logo'
import SearchIcon from '../images/SearchIcon'

export default function Header({ props, onSearchInput }) {
    const query = props
    return (
        <header>
          <Logo />
          <div className='search-container'>
            <SearchIcon />
            <input
              type='text'
              placeholder='Search stories by title, url or author'
              value={query}
              onChange={onSearchInput}>
            </input>
          </div>
        </header>
    )
}