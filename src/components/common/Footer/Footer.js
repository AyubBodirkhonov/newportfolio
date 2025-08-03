import React from "react";
import { motion } from "framer-motion";
import {
  FiHeart,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
} from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: FiGithub,
      url: "https://github.com/ayubbodirkhonov",
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://linkedin.com/in/ayub-bodirkhonov",
    },
    {
      name: "Twitter",
      icon: FiTwitter,
      url: "https://twitter.com/ayubbodirkhonov",
    },
    { name: "Email", icon: FiMail, url: "mailto:ayub.bodirkhonov98@gmail.com" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              Made with <FiHeart className="heart-icon" /> by Ayub Bodirkhonov
            </p>
            <p className="copyright">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                aria-label={link.name}
              >
                <link.icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="footer-note"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            Frontend Developer & System Administrator based in Namangan,
            Uzbekistan. Open to new opportunities and ready to relocate.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
