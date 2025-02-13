import React, { useState } from "react";
import { TiArrowRight } from "react-icons/ti";
import "../css/Education.css";

const Education = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="education">
      <h1 className="education-text">Education</h1>

      <div className="zetech">
        <img
          className="zetech-logo"
          src="images/zetech.jpg"
          alt="Zetech Logo"
        />

        <div className="edu-cont">
          <h6 className="edu">Zetech University</h6>
          <h6 className="edu">BSc Software Engineering</h6>
          <i
            className="more-icon"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <TiArrowRight />
          </i>

          <p className="edu-description">
            Currently studying at Zetech University, building expertise in
            software development, problem-solving, and system design
          </p>
        </div>

        <div className="edu-period">
          <h6>May 2024 - Present</h6>
        </div>
      </div>

      <div className="zetech">
        <img className="zetech-logo" src="images/alx.jpg" alt="alx Logo" />

        <div className="edu-cont">
          <h6 className="edu">African Leadership Academy</h6>
          <h6 className="edu">Front-end Web Development</h6>
          <i
            className="more-icon"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <TiArrowRight />
          </i>

          <p className="edu-description">
            Front-end developer skilled in HTML, CSS, and JavaScript, currently
            advancing my expertise while honing leadership skills at Africa
            Leadership Academy
          </p>
        </div>

        <div className="edu-period">
          <h6>March 2025 - Present</h6>
        </div>
      </div>
    </div>
  );
};

export default Education;
