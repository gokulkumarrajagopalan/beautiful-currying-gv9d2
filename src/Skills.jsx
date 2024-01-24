import React from "react";
import HtmlIcon from "./htmlIcon.png";
import CssIcon from "./cssIcon.png";
import JavascriptIcon from "./javascriptIcon.png";
import SqlServerIcon from "./sqlServerIcon.png";
import OracleSqlIcon from "./oracleSqlIcon.png";
import DotnetIcon from "./dotnetIcon.png";
import NodejsIcon from "./nodejsIcon.png";
import ReactIcon from "./reactIcon.png";

function Skills() {
  return (
    <div className="skills-container">
      <h2 className="title ">SKILLS</h2>

      <div className="technology-section">
        <h3>Front-end Technologies</h3>
        <div className="skills-list">
          <div className="skill">
            <img src={HtmlIcon} alt="HTML" />
            <span>HTML</span>
          </div>
          <div className="skill">
            <img src={CssIcon} alt="CSS" />
            <span>CSS</span>
          </div>
          <div className="skill">
            <img src={JavascriptIcon} alt="JavaScript" />
            <span>JavaScript</span>
          </div>
        </div>
      </div>

      {/* Database Section */}
      <div className="technology-section">
        <h3>Database</h3>
        <div className="skills-list">
          <div className="skill">
            <img src={SqlServerIcon} alt="SQL Server" />
            <span>SQL Server</span>
          </div>
          <div className="skill">
            <img src={OracleSqlIcon} alt="Oracle SQL/PLSQL" />
            <span>Oracle SQL/PLSQL</span>
          </div>
          {/* Add more database skills here */}
        </div>
      </div>

      {/* Backend/Frameworks Section */}
      <div className="technology-section">
        <h3>Back-end & Frameworks</h3>
        <div className="skills-list">
          <div className="skill">
            <img src={DotnetIcon} alt=".NET" />
            <span>.NET</span>
          </div>
          <div className="skill">
            <img src={NodejsIcon} alt="Node.js" />
            <span>Node.js</span>
          </div>
          <div className="skill">
            <img src={ReactIcon} alt="React" />
            <span>React</span>
          </div>
          {/* Add more back-end or framework skills here */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
