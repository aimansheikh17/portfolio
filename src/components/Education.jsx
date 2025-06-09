import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/Education.css';
import collegeImg from '../images/cllg.png';

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false }); // repeat animation on scroll
  }, []);

  return (
    <section className="education-section" id="education">
      <h2 className="section-title1" data-aos="fade-up">Education</h2>

      <div className="education-container">
        <div className="education-left" data-aos="fade-right">

          <div className="education-item">
            <h3>Bachelor's of Information Science and Engineering - <strong>7.41 CGPA</strong></h3>
            <div className="meta1">
              <div className="board">Visvesvaraya Technological University - 2023</div>
              <div className="college">Mangalore Institute of Technology & Engineering - 2023</div>
            </div>
          </div>

          <div className="education-item">
            <h3>12th - Science (PCMC)</h3>
            <div className="meta1">
              <div className="board">Karnataka State Pre-University Board - 2019</div>
              <div className="college">Mahatma Gandhi Memorial College Kunjibettu, Udupi - 2019</div>
            </div>
          </div>

          <div className="education-item">
            <h3>SSLC</h3>
            <div className="meta1">
              <div className="board">Karnataka State Board - 2017</div>
              <div className="college">Al - Ihsan English Medium High School Moodu, Kaup - 2017</div>
            </div>
          </div>

        </div>

        <div className="education-right" data-aos="zoom-in">
          <img src={collegeImg} alt="College Building" className="edu-img float-animation" />
        </div>
      </div>
    </section>
  );
};

export default Education;

