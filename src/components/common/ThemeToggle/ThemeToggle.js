import React from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import "./ThemeToggle.css";

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
    >
      <motion.div
        className="toggle-icon"
        initial={false}
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? <FiSun /> : <FiMoon />}
      </motion.div>
      <span className="toggle-tooltip">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </span>
    </motion.button>
  );
};

export default ThemeToggle;
