import React from "react";
import { Chip } from "@mui/material";
import styles from "./Card.module.css";

export default function Card({ image, follows, title }) {
  return (
    <div className={styles.card}>
      <img src={image} alt="img" className={styles.image} />
      <div>
        <Chip label={`${follows} follows`} className={styles.chip} />
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
}
