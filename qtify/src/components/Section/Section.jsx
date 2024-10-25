import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import axios from "axios";

function Section() {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    axios
      .get(`https://qtify-backend-labs.crio.do/albums/top`)
      .then((response) => setAlbums(response.data))
      .catch((error) => console.error(error));
  }, []);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className={styles.section}>
      <div>
        <h2>Top Albums</h2>
        <button onClick={toggleCollapse}>
          {collapsed ? "Show all" : "Collapse"}
        </button>
      </div>
      <div className={`${styles.grid} ${collapsed ? styles.collapsed : ""}`}>
        {albums.map((album) => (
          <Card
            key={album.id}
            image={album.image}
            follows={album.follows}
            title={album.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Section;
