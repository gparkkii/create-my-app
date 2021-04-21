import React from 'react';
import AppLayout from 'components/common/AppLayout';
import { FlexContainer } from 'styles/container/styles';
import Content from 'components/MyPage/Content';

const MyPage = () => {
  return (
    <AppLayout>
      <FlexContainer>
        <Content />
      </FlexContainer>
    </AppLayout>
  );
};

export default MyPage;
