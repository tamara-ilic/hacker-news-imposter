import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [stories, setStories] = useState([]);
  const url = "https://hn.algolia.com/api/v1/search?query=...";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setStories(res.hits));
  }, []);

  return (
    <div className="App">
      <ul>
        {stories.map((story) => (
          <li>
            <a href={story.url} target="_blank" rel="noreferrer">
              {story.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
