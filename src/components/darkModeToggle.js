import React from "react";

function DarkModeToggle({ isDarkMode, toggleDarkMode }) {
  return (
    <div style={{ marginTop: '20px', marginRight: '20px' }}>
      <label>
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        Toggle Dark Mode
      </label>
    </div>
  );
}

export default DarkModeToggle;