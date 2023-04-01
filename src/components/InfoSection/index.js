import React from "react";
import Experience from "../Experience";
import "./InfoSectionStyles.scss";

const InfoSection = () => {
  return (
    <>
      <div
        className="info-container"
        id="about"
      >
        <div className="info-wrapper">
          <div
            className="info-row"
          >
            <div className="column-1">
              <div className="text-rapper">
                {/* <p className="top-line">{topLine}</p> */}
                <h1 className="heading">Skills and Experience</h1>
                <p className="subtitle">
                      I am passionate about creating beautiful and intuitive websites.
                      I have a strong understanding of HTML, CSS, and JavaScript, and I am always eager to learn new 
                      technologies and techniques to improve my skills. 
                      <br/>
                      <br/>
                      As a front-end website developer I am responsible for 
                      creating the user interface and experience of a website. This
                      includes designing and coding the layout, navigation, and visual 
                      elements of a site. I have a good understanding of user experience and
                      design principles to create a site that is easy to use and visually appealing.
                      I can work closely with back-end developers and designers to bring a website to life.
                </p>
                {/* <ul className="onordered-list">{listItems}</ul> */}
              </div>
            </div>
            <div className="column-2">
              <Experience />
              {/* <div className="image-wrapper">
                <img src={img} alt={alt} className="image" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
