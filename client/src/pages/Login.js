import React from 'react';
import { FlexContainer } from 'styles/container/styles';
import Content from 'components/LogIn/Content';
import AuthLayout from 'components/common/AuthLayout';

const Login = () => {
  return (
    <AuthLayout>
      <FlexContainer>
        <Content />
      </FlexContainer>
    </AuthLayout>
  );
};

export default Login;
