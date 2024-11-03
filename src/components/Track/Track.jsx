import React from "react";
import styles from "./Track.module.css";
function Track({ title, artist, cover, duration }) {
  return (
    <>
      <div className={styles.container}>
        <img src={cover} />
        <div>
          <p>{title}</p>
          <p>{artist}</p>
        </div>
        <div>
          <button>+</button>
          <span>{duration}</span>
        </div>
      </div>
    </>
  );
}

export default Track;
