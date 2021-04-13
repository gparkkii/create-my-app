import React from 'react';
import styled from 'styled-components';
import { media } from 'styles/media_query';
import GitHubLogin from './GithubLogin';
import GoogleLoginHooks from './GoogleLogin';
import NaverLogin from './NaverLogin';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  ${media.mobile`
      margin-top: 1rem;
  `}
`;

const OAuthLogin = () => {
  return (
    <Container>
      <GoogleLoginHooks />
      <GitHubLogin />
      <NaverLogin />
    </Container>
  );
};

export default OAuthLogin;
