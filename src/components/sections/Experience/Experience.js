import React from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiMapPin, FiUsers, FiTool } from "react-icons/fi";
import "./Experience.css";

const Experience = () => {
  const experience = {
    company: "Afsonalar Vodiysi",
    website: "afsonaland.uz",
    position: "Frontend Developer & System Administrator",
    duration: "June 2023 - Present",
    period: "2 years 2 months",
    location: "Uzbekistan",
    description:
      "Afsonalar Vodiysi (NIB) LLC is a mini-city and entertainment park with numerous facilities including theme parks, water parks, shopping centers, restaurants, fitness centers, residential complexes, mosques, bazaars, and shopping streets. Each facility has specific automated financial applications (systems) operating mainly locally and in the cloud, and the park owns its own IT infrastructure.",
    responsibilities: [
      "Planning, implementing, supporting, improving, monitoring, scaling, and controlling business process automation systems and IT infrastructure",
      "Developing internal applications - our team of software engineers developed internal applications for general financial, warehouse, and procurement processes",
      "Creating user interfaces for internal applications such as ERP systems responsible for internal financial and warehouse operations",
      "Developing and maintaining the company's official website",
      "Managing IT infrastructure and ensuring system reliability",
    ],
    team: [
      "2 Network Administrators",
      "1 Network Engineer",
      "1 System Administrator",
      "2 IT Mechanics",
      "Frontend Developer & System Administrator (Me)",
    ],
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "ReactJS",
      "Sass",
      "Git",
      "REST API",
      "GitLab",
      "ERP Systems",
    ],
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>

        <div className="experience-content">
          <motion.div
            className="experience-timeline"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>

              <motion.div
                className="timeline-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="company-info">
                      <h3 className="position-title">{experience.position}</h3>
                      <div className="company-details">
                        <h4 className="company-name">{experience.company}</h4>
                        <a
                          href={`https://${experience.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="company-website"
                        >
                          {experience.website}
                        </a>
                      </div>
                    </div>

                    <div className="experience-meta">
                      <div className="meta-item">
                        <FiCalendar />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="meta-item">
                        <FiMapPin />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="experience-body">
                    <p className="experience-description">
                      {experience.description}
                    </p>

                    <div className="responsibilities-section">
                      <h5 className="section-subtitle">
                        Key Responsibilities:
                      </h5>
                      <ul className="responsibilities-list">
                        {experience.responsibilities.map(
                          (responsibility, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.4,
                                delay: 0.6 + index * 0.1,
                              }}
                              viewport={{ once: true }}
                            >
                              {responsibility}
                            </motion.li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="team-section">
                      <h5 className="section-subtitle">
                        <FiUsers /> Team Structure:
                      </h5>
                      <div className="team-grid">
                        {experience.team.map((member, index) => (
                          <motion.div
                            key={index}
                            className="team-member"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.8 + index * 0.05,
                            }}
                            viewport={{ once: true }}
                          >
                            {member}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="technologies-section">
                      <h5 className="section-subtitle">
                        <FiTool /> Technologies Used:
                      </h5>
                      <div className="tech-tags">
                        {experience.technologies.map((tech, index) => (
                          <motion.span
                            key={tech}
                            className="tech-tag"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 1 + index * 0.05,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
