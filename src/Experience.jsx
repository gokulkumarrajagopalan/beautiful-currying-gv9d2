import React from "react";
import down from "./down-chevro.png";
import "./styles.css";

function Experience() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="experiencecontainer">
      <h2 className="title">EXPERIENCE</h2>
      <div className="experience-container">
        <div className="experience-card">
          <div className="details">
            <h3>
              <strong>Software Engineer</strong>
            </h3>
            <p>
              <strong>Capgemini</strong>
            </p>
            <p>Oct 2023 - Present </p>
            <p>Pune, Maharashtra, India · Hybrid</p>
            <p>Skills: Business Intelligence - Oracle-SQL </p>
          </div>
        </div>

        <div className="experience-card">
          <div className="details">
            <h3>
              <strong>Junior Software Engineer</strong>
            </h3>
            <p>
              <strong>FormulaHR - from Icomm Technologies</strong>
            </p>
            <p>Dec 2022 - Oct 2023 · 1 yr 0 months</p>
            <p>Chennai, Tamil Nadu, India</p>
            <p>
              Skills: Visual Basic .NET (VB.NET) · Visual Basic . Databases ·
              ASP.NET · .NET Core
            </p>
          </div>
        </div>

        {/* Experience 3 */}
        <div className="experience-card">
          <div className="details">
            <h3>
              <strong>Internship Program</strong>
            </h3>
            <p>
              <strong>Gateway software solutions coimbatore</strong>
            </p>
            <p>Apr 2021 - May 2021 · 2 months</p>
            <p>Coimbatore, Tamil Nadu, India · Remote</p>
            <p>Skills: Java</p>
          </div>
        </div>
      </div>
      <div className="downarrow-container" onClick={scrollToBottom}>
        <img src={down} alt="Down Arrow" className="downarrow" />
      </div>
    </div>
  );
}

export default Experience;
