import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTheme } from 'context/themeProvider';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';
import AuthHeader from './AuthHeader';

const Header = () => {
  const isAuth = useSelector(state => state.user.data.isAuth);
  const [ThemeMode, toggleTheme] = useTheme();

  return (
    <StyledHeader>
      <nav>
        <Link to="/">
          <h2>👩🏼‍💻</h2>
          <p>gparkkii</p>
        </Link>
      </nav>
      <nav>
        {!isAuth && (
          <>
            <Link to="/login">로그인</Link>
            <Link to="/signup">회원가입</Link>
          </>
        )}
        {isAuth && (
          <>
            <AuthHeader />
          </>
        )}
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
  font-size: 15px;
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
