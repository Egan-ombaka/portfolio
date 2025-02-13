import React, { useState } from "react";
import "../css/Workex.css";
import { TiArrowRight } from "react-icons/ti";

const Workex = () => {

    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="workXp">
      <h1 className="workxp">Work Exprience</h1>

      <div className="mac">
        <img
          className="work-logo"
          src="images/mac.jpg"
          alt="Mac E. Electricals"
        />
        <div className="job-cont">
          <h6 className="Job">Mac E. Electricals</h6>
          <h6 className="Job">
            Frond-end web Developer
            <i className="more-icon"
                              onMouseEnter={() => setIsHovered(true)} 
                              onMouseLeave={() => setIsHovered(false)}>
              <TiArrowRight />
            </i>
            <p className="job-description">
              Developed and maintained the front-end of the company's website
              using React and other modern web technologies.
            </p>
          </h6>
        </div>

        <div className="work-period">
          <h6>August 2024 - Present</h6>
        </div>
      </div>
    </div>
  );
};

export default Workex;
