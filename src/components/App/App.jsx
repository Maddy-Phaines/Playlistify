import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Track from "../Track/Track";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playList, setPlayList] = useState([]);
  const [newSearch, setNewSearch] = useState("");
  const [query, setQuery] = useState("");
  const handleAdd = ({ target }) => {
    setPlayList((prev) => {
      [target.value, ...prev];
    });
  };
  const handleSearch = () => {
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
    setSearchResults(mockTracks);
  };

  const addToPlaylist = (trackId) => {
    // Find the track to add in searchResults by its ID
    const trackToAdd = searchResults.find((track) => track.id === trackId);
    if (trackToAdd) {
      setPlayList((prevPlaylist) => {
        // Only add the track if it's not already in the playlist
        if (!prevPlaylist.find((track) => track.id === trackId)) {
          return [...prevPlaylist, trackToAdd];
        }
        return prevPlaylist; // No change if track already present
      });
    }
  };

  const removeFromPlaylist = (trackId) => {};

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
      <Track handleAdd={handleAdd} />
    </>
  );
}

export default App;
