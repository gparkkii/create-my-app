import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
  NameError,
  EmailError,
  PasswordError,
  PasswordConfirmError,
} from 'lib/options/errors';
import {
  FormBox,
  FilledInput,
  InputBox,
  AbsoluteBox,
  AbsoluteButton,
  MarginBox,
} from 'styles/form/styles';
import {
  AlertMessage,
  ContentTitle,
  ErrorMessage,
  InputAlert,
} from 'styles/typography/styles';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const UserForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });

  const password = useRef();
  password.current = watch('password');

  const [ShowPassword, setShowPassword] = React.useState(false);
  const handleVisibility = () => {
    setShowPassword(!ShowPassword);
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <ContentTitle>기본 정보</ContentTitle>
      <AlertMessage>
        가입시 필요한 유저정보입니다. 입력 후 수정이 불가능합니다.
      </AlertMessage>
      <MarginBox margin="20px 0px">
        <FormBox onSubmit={handleSubmit(onSubmit)}>
          <InputBox>
            <label
              className={errors.name ? 'errorTypeLabel' : null}
              htmlFor="name"
            >
              이름
            </label>
            <FilledInput
              id="name"
              name="name"
              type="text"
              placeholder="이름을 입력해주세요"
              className={errors.name ? 'errorInput' : null}
              {...register('name', {
                required: true,
                minLength: 2,
                maxLength: 12,
              })}
            />
            {errors.name && (
              <ErrorMessage>{NameError[errors.name.type]}</ErrorMessage>
            )}
          </InputBox>
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
                  maxLength: 20,
                  validate: {
                    checkLang: value =>
                      ![/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/].every(pattern =>
                        pattern.test(value),
                      ),
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
          <InputBox>
            <label
              className={errors.passwordConfirm ? 'errorTypeLabel' : null}
              htmlFor="passwordConfirm"
            >
              비밀번호 확인
            </label>
            <FilledInput
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              placeholder="비밀번호를 확인해주세요"
              className={errors.passwordConfirm ? 'errorInput' : null}
              {...register('passwordConfirm', {
                required: true,
                validate: value => value === password.current,
              })}
            />
            {errors.passwordConfirm && (
              <ErrorMessage>
                {PasswordConfirmError[errors.passwordConfirm.type]}
              </ErrorMessage>
            )}
          </InputBox>
          <InputAlert>
            한글 제외 영문(대/소문자), 숫자, 특수문자를 조합하여 8~20자 이내로
            입력해주세요.
          </InputAlert>
        </FormBox>
      </MarginBox>
    </>
  );
};

export default UserForm;