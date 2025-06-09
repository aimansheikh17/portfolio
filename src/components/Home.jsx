import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/Home.css";

import profilePic from "../images/Aiman153.png"; // Update with actual image path

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // ensures animation repeats on scroll up/down
    });
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="home-container" data-aos="fade-up">
        <div className="home-image" data-aos="zoom-in">
          <img src={profilePic} alt="Aiman" className="profile-img" />
        </div>
        <div className="home-content" data-aos="fade-left">
          <h2 className="highlight-name">I'm Aiman</h2>
          <h4 className="subtitle">
            Passionate Software Engineer & Web Developer
          </h4>
          <p className="description">
           A Bachelor of Engineering in Information Science with a strong foundation in programming, problem-solving, and analytical thinking. I am highly motivated to work in challenging environments where I can continuously learn, improve my skills, and contribute meaningfully to the organization’s success. I thrive on mentorship and guidance that inspires me to give my best and grow both technically and professionally.
          </p>
          <div className="social-icons" data-aos="fade-up" data-aos-delay="300">
            <a href="https://www.linkedin.com/in/mohammed-aiman-036005327"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/aimansheikh17"><i className="fab fa-github"></i></a>
            <a href="https://www.instagram.com/aiman_sheikhh_17/"><i className="fab fa-instagram"></i></a>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Home;

