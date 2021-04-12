import React from 'react';

function ThemeToggle({ toggle, mode }) {
  return (
    <button type="button" onClick={toggle} mode={mode}>
      {mode === 'dark' ? '🌚' : '🌝'}
    </button>
  );
}

export default ThemeToggle;
