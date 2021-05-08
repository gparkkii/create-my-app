import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'modules/actions/user';
import {
  ThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import UserAvatar from './UserAvatar';

const StyledMenu = withStyles({
  paper: {
    backgroundColor: 'transparent',
    marginTop: '2px',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const AuthHeader = () => {
  const theme = createMuiTheme();
  const dispatch = useDispatch();
  const onClickHandler = useCallback(() => {
    dispatch(logoutUser()).then(response => {
      console.log(response);
    });
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = e => {
    e.preventDefault();
    if (!anchorEl) {
      setAnchorEl(e.currentTarget);
    } else {
      setAnchorEl(null);
    }
  };
  const handleClose = e => {
    e.preventDefault();
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Button
        type="button"
        aria-controls="simple-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
      >
        <UserAvatar width="36px" fontSize="14px" />
      </Button>
      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <ContentBox>
          <StyledMenuItem onClick={handleClose}>
            <Link to="/mypage">
              <button type="button">내 프로필</button>
            </Link>
          </StyledMenuItem>
          <StyledMenuItem onClick={handleClose}>
            <Link to="/">
              <button type="submit" onClick={onClickHandler}>
                로그아웃
              </button>
            </Link>
          </StyledMenuItem>
        </ContentBox>
      </StyledMenu>
    </ThemeProvider>
  );
};

export default AuthHeader;

const ContentBox = styled.div`
  background-color: ${({ theme }) => theme.contentBox};
  box-shadow: ${({ theme }) => theme.boxShadow};
  width: 148px;
  & li {
    height: 48px;
    padding: 10px;
    border-top: ${({ theme }) => theme.borderColor};
    & a {
      & button {
        font-size: 15px;
      }
    }
  }
`;

const Button = styled.button`
  margin-right: 14px;
`;
