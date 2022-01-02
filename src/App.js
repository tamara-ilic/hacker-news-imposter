import "././styles/App.css";
import { useState, useEffect } from "react";
import Search from "./components/Search"
import Story from "./components/Story"

export default function App() {
  const [stories, setStories] = useState([])
  const [query, setQuery] = useState('microdosing')
  const url = "https://hn.algolia.com/api/v1/search?query=";

  const fetchNews = (e) => {
    fetch(`${url}${query}`)
    .then((res) => res.json())
    .then((res) => setStories(res.hits))
    .then((res) => setQuery(query))
  }

  // useEffect(() => {
  //   fetch(`${url}${query}`)
  //     .then((res) => res.json())
  //     .then((res) => setStories(res.hits))
  //     .then((res) => setQuery(query))
  // }, [query]);

  return (
    <div className="App">
      <Search query={() => setQuery(query)} />
      {/* <Search /> */}
      <Story stories={stories}/>
    </div>
  );
}
