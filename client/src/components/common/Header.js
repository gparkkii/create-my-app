import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from 'context/themeProvider';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [ThemeMode, toggleTheme] = useTheme();
  return (
    <StyledHeader>
      <nav>
        <NavLink to="/">
          <h2>👩🏼‍💻</h2>
          <p>gparkkii</p>
        </NavLink>
      </nav>
      <nav>
        <NavLink to="/login">로그인</NavLink>
        <NavLink to="/signup">회원가입</NavLink>
        <ThemeToggle toggle={toggleTheme} mode={ThemeMode} />
      </nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 99999;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  font-size: 16px;
  font-weight: 500;
  padding: 0px 24px;
  border-bottom: ${({ theme }) => theme.borderColor};
  & nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    & a {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 20px;
      & h2 {
        font-size: 28px;
        font-weight: 600;
        margin: 0px 8px;
      }
      & p {
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
`;
