import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const AuthHeader = () => {
  return (
    <StyledHeader>
      <NavLink to="/">
        <h2>👩🏼‍💻</h2>
        <p>gparkkii</p>
      </NavLink>
    </StyledHeader>
  );
};

export default AuthHeader;

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  & a {
    display: flex;
    flex-direction: row;
    align-items: center;
    & h2 {
      font-size: 24px;
      font-weight: 600;
      margin: 0px 8px;
    }
    & p {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;
