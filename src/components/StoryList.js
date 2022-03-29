import './../styles/story-list.css'
import HeartIcon from '../images/HeartIcon'
import PersonIcon from '../images/PersonIcon'
import ClockIcon from '../images/ClockIcon'
import StoryShareIcons from '../images/StoryShareIcons'

import Moment from 'react-moment'

export default function StoryList({stories}) {

  const calculateTimeLapsedSinceStoryCreation = (time) => {
     const dateCreated = new Date(time)
     return <Moment fromNow>{dateCreated}</Moment>
  }

  const getHost = (url) => {
    let root
    try {
      if (url) {
        root = new URL(url)
        console.log(root.host)
        return root.host
      }
    } catch (e) {
      throw new Error(`Could not extract host for the following URL: ${url}`, e)
    }
  } 

    return (
      <section className='search-results'>
        <div className='search-results-container'>
          {stories.map((story) => (
            <article className='story' key={story.objectID}>
              <div className='story-container'>
                <div className='story-data'>
                  <a className='story-title' href={story.url} target='_blank' rel='noreferrer'>
                    {story.title}
                  </a>
                  <div className='story-meta'>
                    <span>
                      <a href={`https://news.ycombinator.com/item?id=${story.objectID}`} target='_blank' rel='noreferrer'>
                        <HeartIcon />
                        {story.points}
                      </a>
                    </span>
                    <span>
                      <a href={`https://news.ycombinator.com/user?id=${story.author}`} target='_blank' rel='noreferrer'>
                        <PersonIcon />
                        {story.author}
                      </a>
                    </span>
                    <span><ClockIcon /> {calculateTimeLapsedSinceStoryCreation(story.created_at)} </span>
                    <span>
                      {story.url ? 
                        <a href={story.url} target='_blank' rel='noreferrer' className='story-url'>
                        ({getHost(story.url)})
                      </a> : ''
                    }
                    </span>
                  </div>
                </div>
                <div className='story-socials'>
                  <button className='story-comments-button'>{story.num_comments}</button>
                  <div class='story-share-dropdown'>
                    <label>
                      <StoryShareIcons />
                    </label>
                  </div>
                </div>
              </div>
            </article>
          ))}
          </div>
      </section>
    )
}