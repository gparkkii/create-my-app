import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'context/themeProvider';
import { GlobalStyle } from 'styles/theme/GlobalStyles';
import Header from './Header';
import Footer from './Footer';

const ThemeLayout = ({ children }) => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Header />
      <WrapContainer>{children}</WrapContainer>
      <Footer />
    </ThemeProvider>
  );
};

export default ThemeLayout;

const WrapContainer = styled.main`
  min-height: 100%;
  position: relative;
  padding-top: 60px;
  padding-bottom: 80px;
`;
