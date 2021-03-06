import React from 'react';
import { useDispatch } from 'react-redux';
import { addProfileForm } from 'modules/actions/profile';
import { useForm } from 'react-hook-form';
import {
  DescriptionError,
  NickNameError,
  UrlError,
} from 'library/options/errors';
import {
  FormBox,
  FilledInput,
  InputBox,
  StyledTextArea,
  MarginBox,
  BorderButton,
} from 'styles/form/styles';
import {
  AlertMessage,
  ContentTitle,
  ErrorMessage,
} from 'styles/typography/styles';

const ProfileForm = ({ next }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });

  const onSubmit = data => {
    dispatch(addProfileForm(data));
    next();
  };

  return (
    <>
      <ContentTitle>프로필 정보</ContentTitle>
      <AlertMessage>
        프로필에 표시될 정보들을 입력해주세요.
        <br /> 입력한 정보는 가입 후 마이페이지에서 수정 가능합니다.
      </AlertMessage>
      <MarginBox margin="20px 0px">
        <FormBox onSubmit={handleSubmit(onSubmit)}>
          <InputBox>
            <label
              className={errors.nickname ? 'errorTypeLabel' : null}
              htmlFor="nickname"
            >
              닉네임
            </label>
            <FilledInput
              id="nickname"
              name="nickname"
              type="text"
              className={errors.nickname ? 'errorInput' : null}
              placeholder="닉네임을 입력해주세요"
              {...register('nickname', {
                required: true,
                minLength: 2,
                maxLength: 10,
              })}
            />
            {errors.nickname && (
              <ErrorMessage>{NickNameError[errors.nickname.type]}</ErrorMessage>
            )}
          </InputBox>
          <InputBox>
            <label
              className={errors.url ? 'errorTypeLabel' : null}
              htmlFor="url"
            >
              내 사이트
            </label>
            <FilledInput
              id="url"
              name="url"
              type="url"
              className={errors.url ? 'errorInput' : null}
              placeholder="URL을 입력해주세요"
              {...register('url', {
                pattern:
                  /(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi ||
                  /(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\\/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,4}(\?[\\/a-z0-9-%#?&=\w]+)*)*/gi,
              })}
            />
            {errors.url && (
              <ErrorMessage>{UrlError[errors.url.type]}</ErrorMessage>
            )}
          </InputBox>
          <InputBox>
            <label
              className={errors.userDescription ? 'errorTypeLabel' : null}
              htmlFor="userDescription"
            >
              자기소개
            </label>
            <StyledTextArea
              id="userDescription"
              name="userDescription"
              className={errors.userDescription ? 'errorInput' : null}
              placeholder="자기소개를 입력해주세요"
              {...register('userDescription', {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.userDescription && (
              <ErrorMessage>
                {DescriptionError[errors.userDescription.type]}
              </ErrorMessage>
            )}
          </InputBox>
          <BorderButton type="submit" marginTop="40px">
            입력완료
          </BorderButton>
        </FormBox>
      </MarginBox>
    </>
  );
};

export default ProfileForm;
