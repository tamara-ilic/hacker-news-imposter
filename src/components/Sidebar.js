import '../styles/sidebar.css'
import HomeIcon from '../images/HomeIcon'
import HotIcon from '../images/HotIcon'

export default function Sidebar() {
    return (
        <aside className='sidebar'>
            <ul>
                <li>
                    <a>
                        <HomeIcon />
                        All
                    </a>
                </li> 
                <li>
                    <a>
                        <HotIcon />
                        Hot
                    </a>
                </li>  
            </ul>
        </aside>
    )
}