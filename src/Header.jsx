import React from "react";
import "./styles.css";

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Header">
      <nav>
        <ul className="NavList">
          <li
            className="NavItem PortfolioItem"
            onClick={() => scrollToSection("portfolio")}
          >
            PORTFOLIO
          </li>
          <div className="TopRightItems">
            <li
              className="NavItem AboutItem"
              onClick={() => scrollToSection("about")}
            >
              ABOUT
            </li>
            <li
              className="NavItem Skills"
              onClick={() => scrollToSection("skills")}
            >
              SKILLS
            </li>
            <li
              className="NavItem Experience"
              onClick={() => scrollToSection("experience")}
            >
              EXPERIENCE
            </li>
            <li
              className="NavItem ContactItem"
              onClick={() => scrollToSection("contact")}
            >
              CONTACT
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
