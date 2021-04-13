import React from 'react';
import github from 'assets/github.png';
import { SocialLogin } from 'styles/form/styles';

const GitHubLogin = () => {
  return (
    <SocialLogin id="github" backgroundColor="#000" color="#fff">
      <img src={github} alt="github" />
      <span>Github</span>
    </SocialLogin>
  );
};

export default GitHubLogin;
