import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiCode,
  FiShoppingCart,
  FiUser,
  FiGlobe,
} from "react-icons/fi";
import "./Projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Crown Clothing v2",
      description:
        "A modern e-commerce application built with React featuring user authentication, shopping cart functionality, payment integration, and responsive design. Complete online clothing store with category filtering and secure checkout.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "JavaScript", "CSS3", "Firebase", "Stripe API"],
      category: "fullstack",
      githubUrl: "https://github.com/AyubBodirkhonov/crwn-clothing-v2",
      liveUrl: null,
      featured: true,
    },
    {
      id: 2,
      title: "Rolodex Monsters",
      description:
        "Interactive React application showcasing component-based architecture, state management, and API integration. Features search functionality, responsive cards, and smooth animations for displaying monster characters.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "JavaScript", "CSS3", "API Integration"],
      category: "frontend",
      githubUrl: "https://github.com/AyubBodirkhonov",
      liveUrl: "https://rolodexmonsters.netlify.app/",
      featured: true,
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description:
        "Professional portfolio website showcasing my skills, projects, and experience. Built with modern web technologies featuring responsive design, smooth animations, and interactive elements.",
      image: "/api/placeholder/400/250",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      category: "frontend",
      githubUrl: "https://github.com/AyubBodirkhonov",
      liveUrl: "https://ayubbodirkhanov.netlify.app/",
      featured: false,
    },
    {
      id: 4,
      title: "Omnifood Restaurant",
      description:
        "Modern restaurant website with elegant design, menu showcase, and reservation system. Features responsive layout, smooth scrolling, and optimized performance for excellent user experience.",
      image: "/api/placeholder/400/250",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      category: "frontend",
      githubUrl: "https://github.com/AyubBodirkhonov",
      liveUrl: "https://omnifoodrest.netlify.app/",
      featured: false,
    },
    {
      id: 5,
      title: "Web Application",
      description:
        "Full-featured web application demonstrating modern development practices, clean code architecture, and user-centered design principles. Includes interactive features and responsive layout.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "JavaScript", "CSS3", "Modern Web APIs"],
      category: "fullstack",
      githubUrl: "https://github.com/AyubBodirkhonov",
      liveUrl: "https://serene-longma-a49a7a.netlify.app/",
      featured: false,
    },
  ];

  const categories = [
    { key: "all", label: "All Projects", icon: FiGlobe },
    { key: "frontend", label: "Frontend", icon: FiCode },
    { key: "fullstack", label: "Full Stack", icon: FiShoppingCart },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <motion.p
          className="projects-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are some of the projects I've worked on, showcasing my skills in
          frontend development, React applications, and modern web technologies.
        </motion.p>

        {/* Featured Projects */}
        <motion.div
          className="featured-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="featured-title">Featured Projects</h3>
          <div className="featured-projects">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="featured-project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FiGithub />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FiExternalLink />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Filter */}
        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.key}
              className={`filter-btn ${
                filter === category.key ? "active" : ""
              }`}
              onClick={() => setFilter(category.key)}
            >
              <category.icon />
              <span>{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FiGithub />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Link */}
        <motion.div
          className="github-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p>Want to see more of my work?</p>
          <a
            href="https://github.com/AyubBodirkhonov"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary github-btn"
          >
            <FiGithub />
            <span>View All Projects on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
