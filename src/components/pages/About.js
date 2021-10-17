import React from "react";
import AboutMe from "../../assets/about_me.jpg";

const About = () => {
  return (
    // <h1>About</h1>
    <div className="centerAboutElements">
      <img src={AboutMe} alt="aboutmeimg" className="aboutImg" />
      <h3 className="mb-20">@ThiagoAndradedev1</h3>
      <h3>Front End Developer</h3>
      <div className="all-center centerSocialMedia">
        <a className="blackBg" href="https://github.com/ThiagoAndradedev1">
          <i className="fab fa-github fa-3x mt-15 pr-15"></i>
        </a>
        <a
          className="blackBg"
          href="https://www.linkedin.com/in/thiago-andrade-8423ab1b8/"
        >
          <i className="fab fa-linkedin fa-3x"></i>
        </a>
      </div>
    </div>
  );
};

export default About;
