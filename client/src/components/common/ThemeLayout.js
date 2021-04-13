import React from 'react';
import { ThemeProvider } from 'context/themeProvider';
import { GlobalStyle } from 'styles/theme/GlobalStyles';

const ThemeLayout = ({ children }) => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemeLayout;
