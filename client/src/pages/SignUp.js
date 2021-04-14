import React from 'react';
import { withRouter } from 'react-router-dom';
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

export default withRouter(SignUp);
