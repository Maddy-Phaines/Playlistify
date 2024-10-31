import React from "react";
import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faList } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <div className="search-bar-container">
      <FontAwesomeIcon icon={faHome} className="search-bar-home" />
      <FontAwesomeIcon icon={faSearch} className="search-bar-icon" />
      <input
        className="search-bar-input"
        type="text"
        placeholder="What do you want to play?"
      />
      <div className="search-bar-divider"></div>
      <FontAwesomeIcon icon={faList} className="search-bar-playlist" />
    </div>
  );
}

export default SearchBar;
