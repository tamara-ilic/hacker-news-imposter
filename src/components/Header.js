import '../styles/header.css'
import Logo from '../images/Logo'
import SearchIcon from '../images/SearchIcon'
import SettingsIcon from '../images/SettingsIcon'

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
            <div className='powered-by'><span>Search by</span><a href="https://www.algolia.com/?utm_source=hn_search&amp;amp;utm_medium=link&amp;amp;utm_term=logo&amp;amp;utm_campaign=hn_algolia" title="Realtime Search Engine" target="_blank" rel="noreferrer"><img src="//d1sz9gun5ag95e.cloudfront.net/packs/media/images/logo-algolia-blue-35c461b6.svg" alt="Algolia Logo"></img></a></div>
          </div>
          <div className='search-settings'>
            <a>
              <SettingsIcon />
              <span>Settings</span>
            </a>
          </div>
        </header>
    )
}