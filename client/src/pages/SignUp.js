import React from 'react';
import { FlexContainer } from 'styles/container/styles';
import Stepper from 'components/SignUp/Stepper';
import AppLayout from 'components/common/AppLayout';

const SignUp = () => {
  return (
    <AppLayout>
      <FlexContainer>
        <Stepper />
      </FlexContainer>
    </AppLayout>
  );
};

export default SignUp;
