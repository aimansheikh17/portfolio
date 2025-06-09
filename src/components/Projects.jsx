import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/Projects.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  const projectData = [
    {
      title: 'BuyNest – E-Commerce Platform',
      description: 'BuyNest is a full-stack e-commerce web application built for a retail business, enabling users to browse, search, and purchase electronic products. The platform features a responsive user interface for customers and a secure admin dashboard for managing products, orders, and users. The backend is powered by Spring Boot REST APIs with role-based authentication, while the frontend is developed using React, with dynamic routing and state management. MySQL is used for persistent data storage, ensuring fast and reliable data access.',
      tech: 'Java, Spring Boot, React.js, MySQL',
    },
    {
      title: 'Online Quiz Exam Portal',
      description: 'An interactive web-based quiz platform designed to facilitate online examinations for students and institutions. The system includes user registration, login functionalities for both students and administrators, dynamic quiz generation, real-time score tracking, and leaderboard display. Admins can create, manage, and schedule quizzes, while users can take tests and instantly view results.',
      tech: 'HTML, CSS, JavaScript, JSP, Servlets, Hibernate, MySQL',
    },
    {
      title: 'HK-Borewell – Borewell Services Website (Client Project)',
      description: 'HK-Borewell is a responsive website built for a local borewell service provider to showcase their services online, increase visibility, and attract potential clients. The site features a professional homepage with service highlights, a contact form, image gallery, and smooth navigation. Designed with a clean UI and optimized for mobile responsiveness, it helps the client generate leads and build trust in the local community.',
      tech: 'React.js, HTML, CSS, JavaScript',
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title" data-aos="fade-up">Projects</h2>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div
            className="project-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-badge float-animation">{project.tech}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

