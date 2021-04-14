import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from 'styles/media_query';
import { ColumnBox } from 'styles/form/styles';
import { withRouter } from 'react-router-dom';
import UserForm from './Steps/UserForm';
import ProfileForm from './Steps/ProfileForm';
import AvatarForm from './Steps/AvatarForm';
import CompleteForm from './Steps/CompleteForm';

function getSteps() {
  return ['기본 정보', '프로필 정보', '내 아바타', '시작하기'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <UserForm />;
    case 1:
      return <ProfileForm />;
    case 2:
      return <AvatarForm />;
    case 3:
      return <CompleteForm />;
    default:
      return '404 Unknown Error';
  }
}

function Stepper({ history }) {
  const steps = getSteps();

  const [currentStep, setCurrentStep] = useState(0);
  function goForward() {
    setCurrentStep(currentStep + 1);
  }
  function goBack() {
    setCurrentStep(currentStep - 1);
  }

  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;

  function handleSubmit(data) {
    console.log(data);
    history.push('/');
  }

  return (
    <Container>
      <div>
        Step {currentStep + 1} of {steps.length}
      </div>
      {steps[currentStep]}
      <ColumnBox>{getStepContent(currentStep)}</ColumnBox>
      <ColumnBox>
        {!isFirst && (
          <button type="button" onClick={() => goBack()}>
            이전
          </button>
        )}
        <button
          type="submit"
          onClick={e => {
            e.preventDefault();
            if (isLast) {
              handleSubmit();
            } else {
              goForward();
            }
          }}
        >
          {isLast ? '입력완료' : '다음'}
        </button>
      </ColumnBox>
    </Container>
  );
}

export default withRouter(Stepper);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 34em;
  min-height: 48em;
  border-radius: 12px;
  padding: 40px;
  background-color: ${({ theme }) => theme.contentBox};
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
    flex-grow: 2;
  }
  & div:nth-child(3) {
    flex-grow: 0;
  }
`;
