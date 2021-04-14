import styled from 'styled-components';
import { media } from '../media_query';

export const MarginBox = styled.div`
  margin: ${props => props.margin};
`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  transition: all 0.2s;
  width: 28em;
  margin-top: 15px;
  padding: 0px 20px;
  ${media.tablet`
    width: 26em;
  `}
  ${media.mini`
    width: 24em;     
  `}
  ${media.mobile`
    width: 18em;     
  `}
`;

export const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  margin: 4px 0px;
  color: #505050;
  & label {
    font-size: 12px;
    margin-bottom: 4px;
    margin-left: 12px;
    color: ${({ theme }) => theme.textColor};
  }
  &: focus-within {
    color: #4957a5;
  }
`;

export const AbsoluteBox = styled.div`
  position: relative;
  width: 100%;
`;

export const OutlinedInput = styled.input`
  position: relative;
  width: 100%;
  height: 48px;
  padding: 0px 14px;
  background-color: transparent;
  border: 1px solid #c1c8f0;
  border-radius: 4px;
  &:hover {
    border: 1px solid #4957a5;
  }
  &:focus {
    border: 1px solid #4957a5;
    box-shadow: inset 0 0 0 1px #4957a5;
  }
`;

export const FilledInput = styled.input`
  position: relative;
  width: 100%;
  height: 48px;
  padding: 0px 20px;
  background-color: ${({ theme }) => theme.inputFilled};
  border: none;
  border-radius: 30px;
  &:hover {
    border: 1px solid #4957a5;
  }
  &:focus {
    border: 1px solid #4957a5;
    box-shadow: inset 0 0 0 1px #4957a5;
  }
`;

export const UnderlinedInput = styled.input`
  position: relative;
  width: 100%;
  height: 48px;
  padding: 0px 14px;
  background-color: transparent;
  border: 1px solid transparent;
  border-bottom: 1px solid #c1c8f0;
  &:hover {
    border-bottom: 1px solid #4957a5;
  }
  &:focus {
    border-bottom: 1px solid #4957a5;
  }
`;

export const UnderlinedBox = styled.div`
  position: relative;
  width: 20em;
  height: 48px;
  padding: 0px 14px;
  background-color: transparent;
  border: 1px solid transparent;
  border-bottom: 1px solid #c1c8f0;
  font-size: 14px;
  line-height: 48px;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  transition: all 0.2s;
  &:hover {
    border-bottom: 1px solid #4957a5;
  }
  & strong {
    font-weight: 400;
    margin-right: 8px;
  }
  ${media.mobile`
      width: 23em;        
  `}
  ${media.tablet`
      width: 27em;     
  `}
  ${media.desktop`
      width: 29em;     
  `}
`;

export const BorderButton = styled.button`
  width: 100%;
  height: 50px;
  margin-top: ${props => props.marginTop || '10px'};
  font-size: 16px;
  color: #fff;
  background-color: #4957a5;
  border-radius: 30px;
`;

export const FilledButton = styled.button`
  width: 100%;
  height: 50px;
  margin-top: ${props => props.marginTop || '10px'};
  font-size: 16px;
  color: #fff;
  background-color: #4957a5;
  border-radius: 4px;
`;

export const OutlinedButton = styled.button`
  width: 100%;
  height: 52px;
  margin-top: ${props => props.marginTop || '10px'};
  font-size: 16px;
  color: #4957a5;
  border: 1px solid #4957a5;
  border-radius: 4px;
`;

export const AbsoluteButton = styled.div`
  position: absolute;
  top: 0;
  right: 4px;
  & button {
    color: #bababa;
  }
`;

export const SocialLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.3%;
  height: 48px;
  border-radius: 30px;
  box-shadow: 0 3px 6px 0 rgba(170, 170, 170, 0.16);
  cursor: pointer;
  color: ${props => props.color || '#757575'};
  background-color: ${props => props.backgroundColor || '#fff'};
  & :first-of-type {
    margin-right: 12px;
  }
  & :last-of-type {
    margin-left: 12px;
  }
  & img {
    width: 20px;
    height: 20px;
  }
  & span {
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    font-weight: 500;
    padding-left: 10px;
  }
`;
