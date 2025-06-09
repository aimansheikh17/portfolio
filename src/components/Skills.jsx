import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/Skills.css';
import skillsImg from '../images/skills.png'; // update path if needed

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  const skills = {
    "Programming Languages": ['Java', 'Python', 'SQL', 'NoSQL'],
    "Web Development": ['Html', 'Css', 'JavaScript', 'ReactJs'],
    "Tools": ['Git', 'Vs Code', 'PyCharm', 'Eclipse', 'Figma', 'Photoshop', 'Android Studio', 'Postman', 'Jira', 'Blender', 'MS Excel'],
    "Databases": ['MySQL', 'MongoDB', 'SQLiteStudio']
  };

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title" data-aos="fade-up">Skills</h2>
      <div className="skills-container">
        <div className="skills-left" data-aos="fade-right">
          {Object.entries(skills).map(([category, items], idx) => (
            <div className="skills-group" key={idx}>
              <h3 className="skills-category">{category}</h3>
              <div className="skills-items">
                {items.map((skill, index) => (
                  <span className="skill-badge float-animation" key={index}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-right" data-aos="zoom-in">
          <img src={skillsImg} alt="Skills" className="skills-img float-animation" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
