import React from 'react';
import styled from 'styled-components';
import { FormBox, UnderlinedInput } from 'styles/form/styles';

const CompleteForm = () => {
  return (
    <FormBox>
      <UnderlinedLabel htmlFor="name">이름</UnderlinedLabel>
      <UnderlinedInput id="name" value="박지연" readOnly />
      <UnderlinedLabel htmlFor="nickname">닉네임</UnderlinedLabel>
      <UnderlinedInput id="nickname" value="보노보노" readOnly />
      <UnderlinedLabel htmlFor="email">이메일</UnderlinedLabel>
      <UnderlinedInput id="email" value="jyp933@gmail.com" readOnly />
      <UnderlinedLabel htmlFor="url">내 사이트</UnderlinedLabel>
      <UnderlinedInput id="url" value="https://github.com/gparkkii" readOnly />
      <UnderlinedLabel htmlFor="description">자기소개</UnderlinedLabel>
      <UnderlinedInput id="description" value="박지연입니다" readOnly />
    </FormBox>
  );
};

export default CompleteForm;

const UnderlinedLabel = styled.label`
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: -4px;
`;
