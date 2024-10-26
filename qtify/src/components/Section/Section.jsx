import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";

function Section({ title, albums }) {
  // const [collapsed, setCollapsed] = useState(false);
  const [showCarousel, setShowCarousel] = useState(true);

  const toggleView = () => {
    setShowCarousel((prev) => !prev);
    setTimeout(() => {}, 500); // Give the DOM some buffer time.
  };
  return (
    <div className={styles.section}>
      <div>
        <h2>{title}</h2>
        <button onClick={toggleView}>
          {showCarousel ? "Show All" : "Collapse"}
        </button>
      </div>
      {showCarousel ? (
        <Carousel items={albums} />
      ) : (
        <div className={styles.grid}>
          {albums.map((album) => (
            <Card
              key={album.id}
              image={album.image}
              follows={album.follows}
              title={album.title}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;
