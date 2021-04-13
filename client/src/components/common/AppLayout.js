import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <WrapContainer>{children}</WrapContainer>
      <Footer />
    </>
  );
};

export default AppLayout;

const WrapContainer = styled.main`
  min-height: 100%;
  position: relative;
  padding-top: 60px;
  padding-bottom: 80px;
`;
