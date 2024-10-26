import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";
import { Tabs, Tab } from "@mui/material";

function Section({ title, albums, songs, genres, isSongsSection = false }) {
  // const [collapsed, setCollapsed] = useState(false);
  const [showCarousel, setShowCarousel] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState("All");

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };
  const filteredSongs =
    selectedGenre === "All"
      ? songs
      : songs.filter((song) => song.genre === selectedGenre);

  const toggleView = () => {
    setShowCarousel(!showCarousel);
  };
  return (
    <div className={styles.section}>
      <div>
        <h2>{title}</h2>
        {isSongsSection && (
          <Tabs value={selectedGenre} onChange={handleTabChange}>
            <Tab label="All" value="All" />
            {Array.isArray(genres) &&
              genres.map((genre) => (
                <Tab key={genre.key} label={genre.label} value={genre.key} />
              ))}
          </Tabs>
        )}
        {!isSongsSection && (
          <button onClick={toggleView}>
            {showCarousel ? "Show All" : "Collapse"}
          </button>
        )}
      </div>
      {showCarousel ? (
        <Carousel items={isSongsSection ? filteredSongs : albums} />
      ) : (
        <div className={styles.grid}>
          {!isSongsSection &&
            albums.map((album) => (
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
