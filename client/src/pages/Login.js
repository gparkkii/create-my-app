import React from 'react';
import { FlexContainer } from 'styles/container/styles';
import Content from 'components/LogIn/Content';
import AppLayout from 'components/common/AppLayout';

const Login = () => {
  return (
    <AppLayout>
      <FlexContainer>
        <Content />
      </FlexContainer>
    </AppLayout>
  );
};

export default Login;
