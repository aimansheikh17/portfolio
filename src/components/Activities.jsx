import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/Activities.css';
import activitiesImg from '../images/activities1.png'; // update if needed

const Activities = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="activities-section" id="activities">
      <h2 className="section-title" data-aos="fade-up">Additional</h2>
      <div className="activities-container">
        <div className="activities-left" data-aos="fade-right">
          <div className="activity-group">
            <h3 className="activity-category">Extra Curricular</h3>
            <div className="activity-items">
              <span className="activity-badge float-animation">Participated in Quiz Competition ‘Zecode’ Conducted by Zerone MITE 08/2021</span>
              <span className="activity-badge float-animation">Participated in online Hackathon ‘Jumpstart’ Conducted by Publicis Sapient 2022</span>
              <span className="activity-badge float-animation">Participated in state level 600m Race Athletic</span>
            </div>
          </div>

          <div className="activity-group">
            <h3 className="activity-category">Languages Known</h3>
            <div className="activity-items">
              <span className="activity-badge float-animation">English</span>
              <span className="activity-badge float-animation">Hindi</span>
              <span className="activity-badge float-animation">Kannada</span>
              <span className="activity-badge float-animation">Urdu</span>
            </div>
          </div>

          <div className="activity-group">
            <h3 className="activity-category">Hobbies</h3>
            <div className="activity-items">
              <span className="activity-badge float-animation">Cricket</span>
              <span className="activity-badge float-animation">Carrom</span>
              <span className="activity-badge float-animation">Photography</span>
              <span className="activity-badge float-animation">Travelling</span>
            </div>
          </div>
        </div>

        <div className="activities-right" data-aos="zoom-in">
          <img src={activitiesImg} alt="Activities" className="activities-img float-animation" />
        </div>
      </div>
    </section>
  );
};

export default Activities;
