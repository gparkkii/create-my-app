import React from 'react';
import naver from 'assets/naver.png';
import { SocialLogin } from 'styles/form/styles';

const NaverLogin = () => {
  return (
    <SocialLogin id="naver" backgroundColor="#20c801" color="#fff">
      <img src={naver} alt="naver" />
      <span>Naver</span>
    </SocialLogin>
  );
};

export default NaverLogin;
