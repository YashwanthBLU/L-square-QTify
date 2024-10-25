import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button"; // Ensure this component exists or create it
import Logo from "../Logo/LogoQt";
import Search from "../Search/Search"; // Ensure this component exists or create it
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button text="Give Feedback" />
    </nav>
  );
}

export default Navbar;
