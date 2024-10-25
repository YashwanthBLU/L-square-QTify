import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router } from "react-router-dom";
import Section from "./components/Section/Section";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Section />
      </div>
    </Router>
  );
}

export default App;
