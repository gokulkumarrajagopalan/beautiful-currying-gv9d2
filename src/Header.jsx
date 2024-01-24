import React, { useRef, useEffect, useState } from "react";
import Namepage from "./Namepage";
import Skills from "./Skills";
import Experience from "./Experience";
import ContactComponent from "./ContactComponent";
import "./styles.css";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close the mobile menu after clicking a section
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <div className="Header">
        {isMobile && (
          <>
            <div
              className={`MobileMenuButton ${isMenuOpen ? "Open" : ""}`}
              onClick={toggleMobileMenu}
            >
              {isMenuOpen ? "✖" : "☰"}
            </div>
            <div className="MobilePortfolioLabel">PORTFOLIO</div>
            <nav>
              <ul className={`MobileNavList ${isMenuOpen ? "Open" : ""}`}>
                <li onClick={() => scrollToSection(aboutRef)}>ABOUT</li>
                <li onClick={() => scrollToSection(skillsRef)}>SKILLS</li>
                <li onClick={() => scrollToSection(experienceRef)}>
                  EXPERIENCE
                </li>
                <li onClick={() => scrollToSection(contactRef)}>CONTACT</li>
              </ul>
            </nav>
          </>
        )}
        {!isMobile && (
          <nav>
            <ul className="NavList">
              <li
                className="NavItem PortfolioItem"
                onClick={() => scrollToSection(null)}
              >
                PORTFOLIO
              </li>
              <div className="TopRightItems">
                <li
                  className="NavItem AboutItem"
                  onClick={() => scrollToSection(aboutRef)}
                >
                  ABOUT
                </li>
                <li
                  className="NavItem Skills"
                  onClick={() => scrollToSection(skillsRef)}
                >
                  SKILLS
                </li>
                <li
                  className="NavItem Experience"
                  onClick={() => scrollToSection(experienceRef)}
                >
                  EXPERIENCE
                </li>
                <li
                  className="NavItem ContactItem"
                  onClick={() => scrollToSection(contactRef)}
                >
                  CONTACT
                </li>
              </div>
            </ul>
          </nav>
        )}
      </div>

      <div ref={aboutRef}>
        <Namepage id="portfolio" />
      </div>
      <div ref={skillsRef}>
        <Skills id="skills" />
      </div>
      <div ref={experienceRef}>
        <Experience id="experience" />
      </div>
      <div ref={contactRef}>
        <ContactComponent id="contact" className="contact-section" />
      </div>
    </div>
  );
}

export default App;
