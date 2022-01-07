import './../styles/logo.css'

export default function Logo() {
    return (
        <>
            <a href='/'>
                <img
                    src='/hn-logo.png'
                    alt='Hacker News logo'
                >
                </img>
            </a>
            <a href='/'>
                <div className='search-header-label'>
                    Search <br /> Hacker News    
                </div>
            </a>
        </>
        
        
    )
}