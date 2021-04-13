import React, { useState } from 'react';

function useFormProgress() {
  const [currentStep, setCurrentStep] = useState(0);
  function goForward() {
    setCurrentStep(currentStep + 1);
  }
  function goBack() {
    setCurrentStep(currentStep - 1);
  }
  return [currentStep, goForward, goBack];
}

function Stepper() {
  const steps = ['기본 정보', '프로필 정보', '내 아바타'];

  const [currentStep, goForward, goBack] = useFormProgress();
  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      {steps[currentStep]}
      <div>
        {!isFirst && (
          <button type="button" onClick={() => goBack()}>
            Go Back
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
          {isLast ? 'Submit' : 'Next'}
        </button>
      </div>
      <div>
        Step {currentStep + 1} of {steps.length}
      </div>
    </div>
  );
}

export default Stepper;
