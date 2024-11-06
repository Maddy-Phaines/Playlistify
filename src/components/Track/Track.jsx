import React from "react";
import styles from "./Track.module.css";
function Track({ track, onAddToPlaylist }) {
  return (
    <>
      <div className={styles.container}>
        <img src={track.cover} />
        <div className={styles.trackInfo}>
          <p>{track.title}</p>
          <p>{track.artist}</p>
        </div>
        <div>
          {onAddToPlaylist && (
            <button onClick={() => onAddToPlaylist(track.id)}>
              Add to Playlist
            </button>
          )}
          {onRemoveFromPlaylist && (
            <button onClick={onRemoveFromPlaylist}>-</button>
          )}
          <span>{duration}</span>
        </div>
      </div>
    </>
  );
}

export default Track;
