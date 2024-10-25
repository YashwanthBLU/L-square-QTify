import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({ title, albums }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className={styles.section}>
      <div>
        <h2>{title}</h2>
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
