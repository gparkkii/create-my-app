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
  width: 100%;
  height: 42px;
  padding: 0px 10px;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid transparent;
  border-bottom: 1px solid #ccc;
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

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 20px;
  border-radius: 20px;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.inputFilled};
  &:hover {
    border: 1px solid #4957a5;
  }
  &:focus {
    border: 1px solid #4957a5;
    box-shadow: inset 0 0 0 1px #4957a5;
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

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ImageBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 20px 0px;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #f9f9fc;
  box-shadow: 0 3px 6px 0 rgba(193, 200, 240, 0.35);
`;

export const BlankBox = styled.div`
  position: relative;
  width: ${props => (props.smallSize ? '40px' : '102px')};
  height: ${props => (props.smallSize ? '40px' : '102px')};
  font-size: ${props => (props.smallSize ? '12px' : '28px')};
  font-weight: 500;
`;

export const BlankName = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  color: ${props => props.color || '#212121'};
`;

export const ShowImage = styled.img`
  width: ${props => (props.smallSize ? '40px' : '102px')};
  height: ${props => (props.smallSize ? '40px' : '102px')};
  border-radius: ${props => (props.smallSize ? '100%' : '10px')};
  box-shadow: 0 2px 4px 0 rgba(100, 100, 100, 0.15);
  background-color: ${props => props.backgroundColor || 'transparent'};
`;

export const ImageButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  & :first-of-type {
    margin-right: 10px;
  }
  & :last-of-type {
    margin-left: 10px;
  }
`;

export const HiddenInput = styled.input`
  display: none;
  &: checked + label {
    border: 1px solid #3f51b5;
    color: #3f51b5;
    font-weight: 500;
  }
`;

export const ImageLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.3%;
  height: 48px;
  font-size: 14px !important;
  border: 1px solid #dde2fa;
  border-radius: 4px;
  &: hover {
    border: 1px solid #3f51b5;
    box-shadow: inset 0 0 0 1px #3f51b5;
  }
`;

export const UserImageTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #353535;
  font-size: 22px;
  font-weight: 500;
  margin-left: 10px;
  margin-top: 10px;
  & strong {
    color: #3f51b5;
    font-weight: 600;
    margin-left: 10px;
  }
`;
