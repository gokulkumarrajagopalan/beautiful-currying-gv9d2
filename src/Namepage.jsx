import React from "react";
import img1 from "./backgroundimg.jpg";
import Linkedin from "./linkedin.png";
import Insta from "./instagram.png";
import fb from "./facebook.png";
import google from "./google.png";

function Namepage() {
  return (
    <div>
      <img src={img1} alt="Background" className="background-img" />
      <div className="content">
        <h1>GOKUL KUMAR</h1>{" "}
        <p>
          I received my Bachelors degree in computer engineering from Anna
          University College of Engineering in Tamil Nadu in 2022.
        </p>
        <span className="movingwords">
          Passionate about changing the world with technology.
        </span>
        <p>I enjoy working on open-source projects in my spare time.</p>
        <a
          href="https://www.facebook.com/gokulkumarrajagopalan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fb} alt="fb" className="facebookicon" />
        </a>
        <a
          href="https://www.instagram.com/gokulk_rajagopal/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Insta} alt="Insta" className="Instaicon" />
          {""}
        </a>
        <a
          href=" https://www.linkedin.com/in/gokulkumar-rajagopal-197055232/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Linkedin} alt="Linkedin" className="Linkedinicon" />
          {""}
        </a>
        <a href="mailto:gokulkumarrajagopalan@gmail.com">
          <img src={google} alt="gmail" className="googleicon" />
        </a>
      </div>
    </div>
  );
}

export default Namepage;
