import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FlexContainer } from 'styles/container/styles';
import styled from 'styled-components';
import Stepper from 'components/SignUp/Stepper';
import AuthLayout from 'components/common/AuthLayout';

const SignUp = () => {
  return (
    <AuthLayout>
      <StyledHeader>
        <Link to="/">
          <h2>👩🏼‍💻</h2>
          <p>gparkkii</p>
        </Link>
      </StyledHeader>
      <FlexContainer>
        <Stepper />
      </FlexContainer>
    </AuthLayout>
  );
};

export default withRouter(SignUp);

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  & a {
    display: flex;
    flex-direction: row;
    align-items: center;
    & h2 {
      font-size: 24px;
      font-weight: 600;
      margin: 0px 8px;
    }
    & p {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;
