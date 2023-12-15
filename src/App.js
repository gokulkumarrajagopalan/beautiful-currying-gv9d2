import React from "react";
import "./styles.css"; // Make sure to import your CSS file
import Header from "./Header";
import Namepage from "./Namepage";
import Skills from "./Skills";
import Experience from "./Experience";
import ContactComponent from "./ContactComponent";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Namepage id="portfolio" />
      <Skills id="skills" />
      <Experience id="experience" />
      <ContactComponent id="contact" />
    </div>
  );
}
