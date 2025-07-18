import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/Experience.css";
import devImage from "../images/experience.png"; // Replace with your actual image

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title" data-aos="fade-down">Experience</h2>
      <div className="experience-container">
        <div className="experience-left" data-aos="fade-right">
          <div className="experience-item">
            <h3>Kodnest Technologies</h3>
            <div className="meta">
              <span className="role">Full Stack Developer Intern</span>
              <span className="date">August 2024 – April 2025</span>
              <span className="type onsite">Onsite</span>
            </div>
            <ul className="desc">
              <li>Developed web apps using Java, Spring Boot, React.js, and MySQL.</li>
              <li>Secured backend services with Spring Security.</li>
              <li>Built and deployed “BuyNest” - a full-stack e-commerce app.</li>
              <li>Integrated RESTful APIs for frontend-backend communication.</li>
              <li>Designed MySQL schema for users, orders, and transactions.</li>
            </ul>
          </div>

          <div className="experience-item" data-aos="fade-right">
            <h3>JumpWhere Solutions</h3>
            <div className="meta">
              <span className="role">IT Support Intern</span>
              <span className="date">December 2023 – March 2024</span>
              <span className="type hybrid">Onsite</span>
            </div>
            <ul className="desc">
              <li>Trained on installing operating systems, configuring user desktops/laptops, and setting up new hardware 
devices (printers, routers, etc.). 
</li>
              <li>Learned how to create, manage, and secure user accounts and permissions using basic admin tools. </li>
              <li>Gained practical knowledge in diagnosing and resolving common hardware, software, and network-related 
issues. </li>
<li>Learned to assist users remotely using tools like AnyDesk for real-time troubleshooting.</li>
              

            </ul>
          </div>
        </div>

        <div className="experience-right" data-aos="fade-left">
          <img src={devImage} alt="Developer at work" className="dev-img" />
        </div>
      </div>
    </section>
  );
};

export default Experience;

