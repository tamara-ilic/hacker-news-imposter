import './../styles/story-list.css'
import HeartIcon from '../images/HeartIcon'
import PersonIcon from '../images/PersonIcon'
import ClockIcon from '../images/ClockIcon'

export default function StoryList({stories}) {
  // const calculateTimeLapsedSinceStoryCreation = (created_at) => {
  //   let currentTime = new Date()
  //   const timeLapsed = currentTime - created_at
      
  //   return 
  // }

  // const calculateTimeline = () => {
  //   if (timeLapsed > 12) {
  //     return `${timeLapsed} years ago` 
  //   }
  //   if (timeLapsed < 1) {
  //     return `${timeLapsed} days ago`
  //   }
  //   return `${timeLapsed} months ago`
  // }

    return (
      <div className='searchResults-container'>
      {stories.map((story) => (
          <article className='story'>
            <div className='story-container'>
              <div className='story-data'>
                  <a className='story-title' href={story.url} target="_blank" rel="noreferrer">
                      {story.title}
                  </a>
                  <div className='story-meta'>
                    <span><HeartIcon /> {story.points}</span>
                    <span><PersonIcon /> {story.author}</span>
                    <span><ClockIcon /> {new Date(story.created_at).toLocaleString('en-us')}</span>
                    <span>{story.url}</span>
                  </div>
              </div>
              <div className='story-socials'></div>
            </div>
          </article>
        ))}
      </div>
    )
}