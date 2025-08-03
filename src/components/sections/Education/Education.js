import React from "react";
import { motion } from "framer-motion";
import { FiBook, FiCalendar, FiMapPin, FiAward } from "react-icons/fi";
import "./Education.css";

const Education = () => {
  const education = {
    degree: "Bachelor's Degree",
    field: "Business Administration, Management",
    university: "Chonnam National University",
    year: "2022",
    location: "South Korea",
    description:
      "Graduated with a Bachelor's degree in Business Administration with a focus on Management. Although my academic background was in business, this experience helped me develop strong analytical and problem-solving skills that I now apply to web development and system administration.",
    achievements: [
      "Completed comprehensive business management curriculum",
      "Developed analytical and problem-solving skills",
      "Gained international educational experience",
      "Built foundation for understanding business processes and automation",
    ],
  };

  return (
    <section id="education" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="education-content">
          <motion.div
            className="education-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="education-header">
              <div className="education-icon">
                <FiBook />
              </div>

              <div className="education-info">
                <h3 className="degree-title">{education.degree}</h3>
                <h4 className="field-of-study">{education.field}</h4>
                <div className="university-info">
                  <h5 className="university-name">{education.university}</h5>
                  <div className="education-meta">
                    <div className="meta-item">
                      <FiCalendar />
                      <span>Graduated {education.year}</span>
                    </div>
                    <div className="meta-item">
                      <FiMapPin />
                      <span>{education.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="education-body">
              <p className="education-description">{education.description}</p>

              <div className="achievements-section">
                <h5 className="section-subtitle">
                  <FiAward /> Key Achievements:
                </h5>
                <div className="achievements-grid">
                  {education.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="achievement-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="achievement-icon">✓</div>
                      <span className="achievement-text">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                className="education-note"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="note-content">
                  <h6>Career Transition</h6>
                  <p>
                    While my degree was in Business Administration, I discovered
                    my passion for web development during my studies. I began my
                    journey into programming in 2021 and have been continuously
                    learning and applying various tools and technologies needed
                    to work as a web developer.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
