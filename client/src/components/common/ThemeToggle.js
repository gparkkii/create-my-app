import React from 'react';
import styled from 'styled-components';

function ThemeToggle({ toggle, mode }) {
  return (
    <ThemeButton type="button" onClick={toggle} mode={mode}>
      {mode === 'dark' ? 'dark 🌚' : '🌝 white'}
    </ThemeButton>
  );
}

export default ThemeToggle;

const ThemeButton = styled.button`
  width: 84px;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.textColor};
  border-radius: 30px;
  font-size: 15px;
  color: ${({ theme }) => theme.textColor};
`;
