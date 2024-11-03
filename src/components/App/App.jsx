import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Track from "../Track/Track";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playList, setPlayList] = useState([]);
  const [newSearch, setNewSearch] = useState("");
  const [query, setQuery] = useState("");
  const handleSearch = (query) => {
    const mockTracks = [
      {
        id: 1,
        title: "Taste",
        artist: "Sabrina Carpenter",
        cover: "cover1.jpg",
        duration: "2:37",
      },
      {
        id: 2,
        title: "Please Please Please",
        artist: "Sabrina Carpenter",
        cover: "cover2.jpg",
        duration: "3:06",
      },
      {
        id: 3,
        title: "Bad Chem",
        artist: "Sabrina Carpenter",
        cover: "cover3.jpg",
        duration: "2:51",
      },
    ];
    setSearchResults(mockResults);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.value === "") return;
    setNewSearch("What would you like to listen to?");
  };

  return (
    <>
      <h1>PlayListify</h1>
      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
        handleSumbit={handleSubmit}
      />
      <Track />
    </>
  );
}

export default App;
