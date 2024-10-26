import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router } from "react-router-dom";
import Section from "./components/Section/Section";
import axios from "axios";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenre] = useState([]);

  useEffect(() => {
    const fetchTopAlbums = async () => {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top",
      );
      setTopAlbums(response.data);
    };

    const fetchNewAlbums = async () => {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/new",
      );
      setNewAlbums(response.data);
    };

    const fetchSongs = async () => {
      const response = await axios.get(
        `https://qtify-backend-labs.crio.do/songs`,
      );
      setSongs(response.data);
    };

    const fetchGenre = async () => {
      const response = await axios.get(
        `https://qtify-backend-labs.crio.do/genres`,
      );
      console.log(response.data);
      setGenre(response.data.data);
    };
    fetchTopAlbums();
    fetchNewAlbums();
    fetchSongs();
    fetchGenre();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Section title="Top Albums" albums={topAlbums} />
        <Section title="New Albums" albums={newAlbums} />
        <Section
          title="Songs"
          songs={songs}
          genres={genres}
          isSongsSection={true}
        />
      </div>
    </Router>
  );
}

export default App;
