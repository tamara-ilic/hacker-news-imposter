export default function StoryURLHost({stories}) {

    return (
        <>
            {stories.map((story) => {
                <h2>{story.url.split('/')}</h2>
            })}
        </>
    )
}