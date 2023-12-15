import React from "react";
//import "./styles.css"; // Import your CSS file

function Header() {
  return (
    <div className="Header">
      <nav>
        <ul className="NavList">
          <li className="PortfolioItem">PORTFOLIO</li>
          <div className="TopRightItems">
            <li className="AboutItem">
              ABOUT
              <div className="Tooltip">
                <p className="Skills">Skill</p>
                <p className="Experience">Experience</p>
                <p className="Education">Education</p>
              </div>
            </li>
            <li className="ContactItem">CONTACT</li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
