import React from 'react';
import { withRouter } from 'react-router-dom';
import { FlexContainer } from 'styles/container/styles';
import Stepper from 'components/SignUp/Stepper';
import AuthLayout from 'components/common/AuthLayout';
import AuthHeader from 'components/common/AuthHeader';

const SignUp = () => {
  return (
    <AuthLayout>
      <FlexContainer>
        <AuthHeader />
        <Stepper />
      </FlexContainer>
    </AuthLayout>
  );
};

export default withRouter(SignUp);
