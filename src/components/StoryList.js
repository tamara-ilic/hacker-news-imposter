import './../styles/story-list.css'

export default function StoryList({stories}) {
  const calculateTimeLapsedSinceStoryCreation = (created_at) => {
    let currentTime = new Date()
    const timeLapsed = currentTime - created_at
      
    return 
  }

  const calculateTimeline = () => {
    if (timeLapsed > 12) {
      return `${timeLapsed} years ago` 
    }
    if (timeLapsed < 1) {
      return `${timeLapsed} days ago`
    }
    return `${timeLapsed} months ago`
  }

    return (
      <>
        {stories.map((story) => (
            <article className='story'>
              <div className='story-container'>
                <div className='story-data'>
                  <a href={story.url} target="_blank" rel="noreferrer">
                    {story.title}
                  </a>
                  <div className='story-meta'>{story.points} {story.author} {new Date(story.created_at).toLocaleString('en-us')}</div>
                </div>
                <div className='story-socials'></div>
              </div>
            </article>
        ))}
      </>
    )
}