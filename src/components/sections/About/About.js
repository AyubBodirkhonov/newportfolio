import React from "react";
import { motion } from "framer-motion";
import { FiUser, FiMapPin, FiCalendar, FiGlobe } from "react-icons/fi";
import "./About.css";

const About = () => {
  const personalInfo = [
    { icon: FiUser, label: "Age", value: "27 years old" },
    { icon: FiMapPin, label: "Location", value: "Namangan, Uzbekistan" },
    { icon: FiCalendar, label: "Born", value: "May 24, 1998" },
    { icon: FiGlobe, label: "Languages", value: "Uzbek, English, Russian" },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="about-intro">
              Hello! I'm <strong>Ayub Bodirkhonov</strong>, a passionate
              Frontend Developer and System Administrator from Uzbekistan.
            </p>

            <p>
              Although I graduated from Chonnam National University with a
              degree in Business Administration, I discovered my true passion
              lies in web development. The field appeared very interesting and
              promising for a future career, so I began my journey in 2021 and
              continue to learn various tools necessary to work as a web
              developer.
            </p>

            <p>
              Currently, I work at Afsonalar Vodiysi, a mini-city and
              entertainment park with numerous facilities including theme parks,
              water parks, shopping centers, restaurants, fitness centers,
              residential complexes, mosques, bazaars, and shopping streets.
              Each facility has specific automated financial applications
              (systems) operating mainly locally and in the cloud.
            </p>

            <p>
              My role involves planning, implementing, supporting, improving,
              monitoring, scaling, and controlling business process automation
              systems and IT infrastructure. I'm responsible for creating user
              interfaces for internal applications, including ERP systems that
              handle internal financial and warehouse operations, as well as the
              company's official website.
            </p>
          </motion.div>

          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="info-grid">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="info-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="info-icon">
                    <info.icon />
                  </div>
                  <div className="info-content">
                    <span className="info-label">{info.label}</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="about-cta"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <a href="#contact" className="btn btn-primary">
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
