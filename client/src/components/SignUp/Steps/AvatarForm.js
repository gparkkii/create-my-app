import React from 'react';
import { FormBox, UnderlinedInput } from 'styles/form/styles';
import { ContentTitle } from 'styles/typography/styles';

const AvatarForm = () => {
  return (
    <>
      <ContentTitle>내 아바타</ContentTitle>
      <FormBox>
        <UnderlinedInput type="text" />
      </FormBox>
    </>
  );
};

export default AvatarForm;
