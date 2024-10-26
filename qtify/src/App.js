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

    fetchTopAlbums();
    fetchNewAlbums();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Section title="Top Albums" albums={topAlbums} />
        <Section title="New Albums" albums={newAlbums} />
      </div>
    </Router>
  );
}

export default App;
