import React from "react";

import "./ExperienceStyles.scss";

const Experience = () => {


  return (
    <section className="experience-section" id="about">
        <div className="container">
            
            <div className="experience-items">
                
                <div className="experience-item">
                    <div className="experience-info">
                        <p>Front-end</p>
                    </div>
                    <div className="progress-line" data-percent="90%">
                        <span style={{width: "90%"}}>

                        </span>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="experience-info">
                        <p>ReactJS</p>
                    </div>
                    <div className="progress-line" data-percent="80%">
                        <span style={{width: "80%"}}>

                        </span>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="experience-info">
                        <p>Back-end</p>
                    </div>
                    <div className="progress-line" data-percent="60%">
                        <span style={{width: "60%"}}>

                        </span>
                    </div>
                </div>
            </div>
        </div>

    </section>
  );
};

export default Experience;