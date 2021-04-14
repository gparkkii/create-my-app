import React from 'react';
import { FormBox, UnderlinedInput } from 'styles/form/styles';
import { ContentTitle } from 'styles/typography/styles';

const ProfileForm = () => {
  return (
    <div>
      <ContentTitle>프로필 정보</ContentTitle>
      <FormBox>
        <UnderlinedInput type="text" />
      </FormBox>
    </div>
  );
};

export default ProfileForm;
