import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { DescriptionError, NickNameError, UrlError } from 'lib/options/errors';
import {
  FormBox,
  FilledInput,
  InputBox,
  StyledTextArea,
  MarginBox,
} from 'styles/form/styles';
import {
  AlertMessage,
  ContentTitle,
  ErrorMessage,
} from 'styles/typography/styles';

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });

  const onSubmit = e => {
    e.preventDefault();
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
              className={errors.description ? 'errorTypeLabel' : null}
              htmlFor="description"
            >
              자기소개
            </label>
            <StyledTextArea
              id="description"
              name="description"
              className={errors.description ? 'errorInput' : null}
              placeholder="자기소개를 입력해주세요"
              {...register('nickname', {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.description && (
              <ErrorMessage>
                {DescriptionError[errors.description.type]}
              </ErrorMessage>
            )}
          </InputBox>
        </FormBox>
      </MarginBox>
    </>
  );
};

export default ProfileForm;
