import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/App.css";

// Common Components
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import LoadingSpinner from "./components/common/LoadingSpinner/LoadingSpinner";
import ThemeToggle from "./components/common/ThemeToggle/ThemeToggle";

// Section Components
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
import Projects from "./components/sections/Projects/Projects";
import Experience from "./components/sections/Experience/Experience";
import Education from "./components/sections/Education/Education";
import Contact from "./components/sections/Contact/Contact";

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <div className={`App ${darkMode ? "dark-theme" : "light-theme"}`}>
        <Header darkMode={darkMode} />
        <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />

        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <motion.main
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Experience />
                  <Education />
                  <Contact />
                </motion.main>
              }
            />
          </Routes>
        </AnimatePresence>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
