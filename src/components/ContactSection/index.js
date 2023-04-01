import React from "react";
import ContactForm from "../ContactForm";
import Experience from "../Experience";
import "./ContactSectionStyles.scss";

const ContactSection = () => {
  return (
    <>
      <div
        className="info-container-contact"
        id="contact"
      >
        <div className="info-wrapper-contact">
          <div
            className="info-row-contact"
          >
            <div className="column-1-contact">
              <div className="text-rapper-contact">
                {/* <p className="top-line">{topLine}</p> */}
                <h1 className="heading-contact">Contact Me</h1>
                <p className="subtitle-contact">
                I am excited about the possibility of new career opportunities and am open to hearing about potential job openings.
                As a job seeker, I am open to considering a diverse range of positions and industries.
                </p>
                {/* <ul className="onordered-list">{listItems}</ul> */}
              </div>
            </div>
            <div className="column-2-contact">
              <ContactForm />
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

export default ContactSection;
