import React from "react";
import styles from "./Track.module.css";
function Track({
  title,
  artist,
  cover,
  duration,
  onAddToPlaylist,
  onRemoveFromPlaylist,
}) {
  return (
    <>
      <div className={styles.container}>
        <img src={cover} />
        <div>
          <p>{title}</p>
          <p>{artist}</p>
        </div>
        <div>
          {onAddToPlaylist && <button onClick={handleAdd}>+</button>}
          <span>{duration}</span>
        </div>
      </div>
    </>
  );
}

export default Track;
