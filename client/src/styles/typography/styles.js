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

export const InputAlert = styled.p`
  color: #999;
  font-size: 13px;
  margin: 8px;
  text-align: left;
  &:before {
    display: inline;
    content: '※ ';
  }
`;

export const AlertMessage = styled.p`
  color: #4957a5;
  font-size: 14px;
  width: 100%;
  text-align: center;
`;
