import React from "react";
import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faList } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <>
      {/* Home Icon */}
      <FontAwesomeIcon icon={faHome} className={styles["search-bar-home"]} />
      <div className={styles["search-bar-container"]}>
        {/* Search Icon */}
        <FontAwesomeIcon
          icon={faSearch}
          className={styles["search-bar-icon"]}
        />

        {/* Search Input */}
        <input
          className={styles["search-bar-input"]}
          type="text"
          placeholder="What do you want to play?"
        />

        {/* Divider */}
        <div className={styles["search-bar-divider"]}></div>

        {/* Playlist Icon */}
        <FontAwesomeIcon
          icon={faList}
          className={styles["search-bar-playlist"]}
        />
      </div>
    </>
  );
}

export default SearchBar;
