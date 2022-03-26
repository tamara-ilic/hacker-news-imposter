import './../styles/logo.css'

export default function Logo() {
    return (
        <div className='search-header-logo'>
            <a href='/'>
                <img
                    src={require('../images/hn-logo.png')  }
                    alt='Hacker News logo'
                >
                </img>
            </a>
            <a href='/'>
                <div className='search-header-label'>
                    Search <br /> Hacker News    
                </div>
            </a>
        </div>
        
        
    )
}