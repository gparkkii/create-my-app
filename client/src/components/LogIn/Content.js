import React, { useState, useCallback } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { PasswordError, EmailError } from 'lib/options/errors';
import { ContentTitle, ErrorMessage } from 'styles/typography/styles';
import {
  FormBox,
  InputBox,
  AbsoluteBox,
  FilledInput,
  BorderButton,
  AbsoluteButton,
} from 'styles/form/styles';
import styled from 'styled-components';
import StyledCheckBox from 'styles/form/StyledCheckBox';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OAuthLogin from './OAuth/OAuthLogin';

function Content({ history }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });

  const [RememberId, setRememberId] = useState(false);

  const [ShowPassword, setShowPassword] = React.useState(false);

  const handleVisibility = () => {
    setShowPassword(!ShowPassword);
  };

  const handleChange = e => {
    setRememberId(e.target.checked);
  };

  const onSubmit = useCallback(user => {
    console.log(user);
    history.push('/');
  }, []);

  return (
    <>
      <ContentTitle>시작하기</ContentTitle>
      <FormBox onSubmit={handleSubmit(onSubmit)}>
        <InputBox>
          <label
            className={errors.email ? 'errorTypeLabel' : null}
            htmlFor="email"
          >
            이메일
          </label>
          <FilledInput
            id="email"
            name="email"
            type="text"
            placeholder="이메일을 입력해주세요"
            className={errors.email ? 'errorInput' : null}
            {...register('email', {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
          {errors.email && (
            <ErrorMessage>{EmailError[errors.email.type]}</ErrorMessage>
          )}
        </InputBox>
        <InputBox>
          <label
            className={errors.password ? 'errorTypeLabel' : null}
            htmlFor="password"
          >
            비밀번호
          </label>
          <AbsoluteBox>
            <FilledInput
              id="password"
              name="password"
              type={ShowPassword ? 'text' : 'password'}
              placeholder="비밀번호를 입력해주세요"
              className={errors.password ? 'errorInput' : null}
              {...register('password', {
                required: true,
                minLength: 8,
                validate: {
                  checkLower: value =>
                    [/[a-z]/].every(pattern => pattern.test(value)),
                  checkUpper: value =>
                    [/[A-Z]/].every(pattern => pattern.test(value)),
                  checkNumber: value =>
                    [/[0-9]/].every(pattern => pattern.test(value)),
                  checkSpec: value =>
                    [/[^a-zA-Z0-9]/].every(pattern => pattern.test(value)),
                },
              })}
            />
            <AbsoluteButton>
              <IconButton
                aria-label="toggle_password"
                onClick={handleVisibility}
              >
                {ShowPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </AbsoluteButton>
          </AbsoluteBox>
          {errors.password && (
            <ErrorMessage>{PasswordError[errors.password.type]}</ErrorMessage>
          )}
        </InputBox>
        <StyledCheckBox
          name="RememberId"
          checked={RememberId}
          onChange={handleChange}
        />
        <BorderButton type="submit" onClick={handleSubmit(onSubmit)}>
          로그인
        </BorderButton>
      </FormBox>
      <FormBox>
        <LineBox>
          <hr />
          <span>또는</span>
          <hr />
        </LineBox>
        <OAuthLogin />
        <TextBox>
          <span>아직 계정이 없으신가요?</span>
          <Link to="/signup">
            <span>회원가입</span>
          </Link>
        </TextBox>
      </FormBox>
    </>
  );
}

export default withRouter(Content);

const LineBox = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 24px 0px;
  color: #ccc;
  & span {
    font-size: 12px;
    padding: 0px 24px;
    white-space: nowrap;
  }
  & hr {
    width: 100%;
    border-top: 1px solid #eee;
  }
`;

const TextBox = styled.div`
  width: 100%;
  margin-top: 60px;
  font-size: 14px;
  text-align: center;
  color: #999;
  & span:first-of-type {
    padding-right: 16px;
  }
  & span:last-child {
    font-weight: 500;
    font-size: inherit;
    color: #2b80f2;
  }
`;
