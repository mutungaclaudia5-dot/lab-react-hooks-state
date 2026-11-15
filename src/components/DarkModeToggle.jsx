import React from 'react'


function DarkModeToggle ({ darkMode, setDarkMode }) {
  // TODO: Implement dark mode toggle logic

  return (
     <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  )
}

export default DarkModeToggle
