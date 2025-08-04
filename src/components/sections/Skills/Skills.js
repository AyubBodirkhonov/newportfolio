import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiLayers,
  FiGitBranch,
  FiServer,
  FiDatabase,
  FiTool,
} from "react-icons/fi";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: FiCode,
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 88 },
        { name: "ReactJS", level: 80 },
        { name: "Sass", level: 75 },
      ],
    },
    {
      title: "Development Tools",
      icon: FiTool,
      skills: [
        { name: "Git", level: 80 },
        { name: "GitLab", level: 75 },
        { name: "REST API", level: 78 },
        { name: "Responsive Design", level: 85 },
        { name: "Cross-browser Compatibility", level: 80 },
      ],
    },
    {
      title: "System Administration",
      icon: FiServer,
      skills: [
        { name: "IT Infrastructure", level: 85 },
        { name: "Business Process Automation", level: 80 },
        { name: "ERP Systems", level: 75 },
        { name: "Network Administration", level: 70 },
        { name: "System Monitoring", level: 78 },
      ],
    },
  ];

  const languages = [
    { name: "Uzbek", level: "Native", flag: "🇺🇿" },
    {
      name: "English",
      level: "B2 - Upper Intermediate (IELTS 6.5)",
      flag: "🇺🇸",
    },
    { name: "Russian", level: "B2 - Upper Intermediate", flag: "🇷🇺" },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="skills-content">
          <div className="technical-skills">
            <motion.h3
              className="skills-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Technical Skills
            </motion.h3>

            <div className="skills-grid">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  className="skill-category"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + categoryIndex * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="category-header">
                    <div className="category-icon">
                      <category.icon />
                    </div>
                    <h4 className="category-title">{category.title}</h4>
                  </div>

                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="skill-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.5 + skillIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="skill-bar">
                          <motion.div
                            className="skill-progress"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: 0.7 + skillIndex * 0.1,
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="language-skills">
            <motion.h3
              className="skills-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Languages
            </motion.h3>

            <div className="languages-grid">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  className="language-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="language-flag">{language.flag}</div>
                  <div className="language-info">
                    <h4 className="language-name">{language.name}</h4>
                    <p className="language-level">{language.level}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
