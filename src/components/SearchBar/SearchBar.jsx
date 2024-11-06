import React from "react";
import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faList } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ query, setQuery, onSearch }) {
  return (
    <>
      <div className={styles.searchContainer}>
        <div className={styles.homeContainer}>
          {/* Home Icon */}
          <FontAwesomeIcon
            icon={faHome}
            className={styles["search-bar-home"]}
          />
        </div>
        <div className={styles["search-bar-container"]}>
          <form>
            {/* Search Input */}
            <input
              className={styles["search-bar-input"]}
              type="text"
              placeholder="What do you want to play?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
          {/* Divider */}
          <div className={styles["search-bar-divider"]}></div>

          {/* Search Icon */}
          <button onClick={onSearch}>
            <FontAwesomeIcon
              icon={faSearch}
              className={styles["search-bar-icon"]}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
