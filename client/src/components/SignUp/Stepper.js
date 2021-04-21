import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signupUser } from 'modules/actions/user';
import { media } from 'styles/media_query';
import { ColumnBox, BorderButton, FormBox } from 'styles/form/styles';
import { resetProfileForm } from 'modules/actions/profile';
import styled from 'styled-components';
import UserForm from './Steps/UserForm';
import ProfileForm from './Steps/ProfileForm';
import AvatarForm from './Steps/AvatarForm';
import CompleteForm from './Steps/CompleteForm';
import AuthHeader from '../common/AuthHeader';

function Stepper({ history }) {
  const dispatch = useDispatch();
  const profileData = useSelector(state => state.profile);

  const [currentStep, setCurrentStep] = useState(0);

  const handleReset = () => {
    setCurrentStep(0);
  };
  const goForward = () => {
    setCurrentStep(currentStep + 1);
  };

  const getSteps = () => {
    return ['기본 정보', '프로필 정보', '내 아바타', '시작하기'];
  };
  const getStepContent = step => {
    switch (step) {
      case 0:
        return <UserForm next={goForward} />;
      case 1:
        return <ProfileForm next={goForward} />;
      case 2:
        return <AvatarForm next={goForward} />;
      case 3:
        return <CompleteForm reset={handleReset} />;
      default:
        return '404 Unknown Error';
    }
  };

  const steps = getSteps();
  const isLast = currentStep === steps.length - 1;

  const onSubmit = () => {
    dispatch(signupUser(profileData)).then(response => {
      if (response.payload.success) {
        dispatch(resetProfileForm());
        history.push('/login');
      } else {
        alert(response.payload.message);
        console.log(response.payload);
      }
    });
  };

  return (
    <Container>
      <StepViewer>
        Step {currentStep + 1} of {steps.length}
      </StepViewer>
      <ColumnBox>{getStepContent(currentStep)}</ColumnBox>
      {isLast && (
        <FormBox>
          <BorderButton
            onClick={e => {
              e.preventDefault();
              onSubmit();
            }}
            type="button"
            marginTop="24px"
          >
            가입하기
          </BorderButton>
          <ResetButton
            type="button"
            onClick={e => {
              e.preventDefault();
              handleReset();
            }}
          >
            처음으로
          </ResetButton>
        </FormBox>
      )}
    </Container>
  );
}

export default withRouter(Stepper);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 32em;
  max-height: 46em;
  height: 100%;
  border-radius: 30px;
  padding: 40px;
  background-color: ${({ theme }) => theme.contentBox};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: all 0.2s ease;
  ${media.tablet`
    width: 26em;
  `}
  ${media.mini`
    width: 22em;
  `}
  ${media.mobile`
    width: 20em;        
  `}
  & div:nth-child(1) {
    flex-grow: 0;
  }
  & div:nth-child(2) {
    flex-grow: 1;
  }
  & div:nth-child(3) {
    flex-grow: 0;
  }
`;

const StepViewer = styled.div`
  font-size: 14px;
`;

const ResetButton = styled.button`
  width: 100%;
  margin-top: 15px;
  font-size: 14px;
  text-align: center;
  text-decoration: underline;
  color: #c1c8f0;
`;
