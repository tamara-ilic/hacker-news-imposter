import './../styles/Logo.css'

export default function Logo() {
    return (
        <div className='search--header_logo'>
            <a href='/'>
                <img
                    src={require('../images/hn-logo.png')  }
                    alt='Hacker News logo'
                >
                </img>
            </a>
            <a href='/'>
                <div className='search--header_label'>
                    Search <br /> Hacker News    
                </div>
            </a>
        </div>
        
        
    )
}