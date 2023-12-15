import React from "react";

function Experience() {
  return (
    <div className="experience-container">
      <div className="experience-card">
        <div className="details">
          <h3>Software Engineer</h3>
          <p>Capgemini </p>
          <p>Oct 2023 - Present · 3 mos</p>
          <p>Pune, Maharashtra, India · Hybrid</p>
          <p>
            Skills: Visual Basic .NET (VB.NET) · Visual Basic · Stored
            Procedures · Databases · ASP.NET · .NET Core
          </p>
        </div>
      </div>

      <div className="experience-card">
        <div className="details">
          <h3>Junior Software Engineer</h3>
          <p>FormulaHR - from Icomm Technologies </p>
          <p>Dec 2022 - Oct 2023 · 11 mos</p>
          <p>Chennai, Tamil Nadu, India</p>
          <p>
            Skills: Visual Basic .NET (VB.NET) · Visual Basic · Stored
            Procedures · Databases · ASP.NET · .NET Core
          </p>
        </div>
      </div>

      {/* Experience 3 */}
      <div className="experience-card">
        <div className="details">
          <h3>Internship Program</h3>
          <p>Gateway software solutions coimbatore </p>
          <p>Apr 2021 - May 2021 · 2 mos</p>
          <p>Coimbatore, Tamil Nadu, India · Remote</p>
          <p>Skills: Java</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
