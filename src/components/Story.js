export default function Story({stories}) {
    return (
        <ul>
            {stories.map((story) => (
            <li key={story.objectID}>
              <a href={story.url} target="_blank" rel="noreferrer">
                {story.title}
              </a>
            </li>
          ))}
        </ul> 
    )
}