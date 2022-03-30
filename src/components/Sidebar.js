import '../styles/Sidebar.css'
import HomeIcon from '../images/HomeIcon'
import HotIcon from '../images/HotIcon'
import SpeakerIcon from '../images/SpeakerIcon'
import SpeechBubbleIcon from '../images/SpeechBubbleIcon'
import QuestionMarkIcon from '../images/QuestionMarkIcon'
import EyeIcon from '../images/EyeIcon'

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
                <li>
                    <a>
                        <SpeakerIcon />
                        Show HN
                    </a>
                </li>
                <li>
                    <a>
                        <SpeechBubbleIcon />
                        Ask HN
                    </a>
                </li>
                <li>
                    <a>
                        <QuestionMarkIcon />
                        Polls
                    </a>
                </li>
                <li>
                    <a>
                        <EyeIcon />
                        Jobs
                    </a>
                </li>
            </ul>
        </aside>
    )
}