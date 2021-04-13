import styled from 'styled-components';

export const MainTitle = styled.h2`
  font-size: 56px;
  font-weight: 500;
`;

export const ContentTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.p`
  color: #de506b;
  font-size: 13px;
  padding: 4px 0px 0px 4px;
  &:before {
    display: inline;
    content: '⚠ ';
  }
`;

export const AlertMessage = styled.p`
  color: #3f51b5;
  font-size: 13px;
  margin-top: 10px;
  &:before {
    display: inline;
    content: '※ ';
  }
`;
