import React, { useState, useEffect } from "react";

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.setAttribute("data-theme", savedTheme); // Apply saved theme to the root
    } else {
      // Default to light theme if no preference is saved
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme); // Save to localStorage
    document.documentElement.setAttribute("data-theme", newTheme); // Apply theme
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          padding: "10px",
          background: isDarkMode ? "yellow" : "gray",
          color: "white",
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        {isDarkMode ? "🌙" : "🌞"}
      </button>

      {children}
    </div>
  );
};

export default ThemeProvider;
