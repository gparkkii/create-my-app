/* eslint-disable no-underscore-dangle */
import React, { useCallback } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
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
  BorderButton,
  ColumnBox,
  MarginBox,
} from 'styles/form/styles';
import { ErrorMessage, InputAlert } from 'styles/typography/styles';
import UserAvatar from '../common/UserAvatar';

const EditForm = ({ profileData, readOnly }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    defaultValues = {
      name: `${profileData.name}`,
      email: `${profileData.email}`,
      nickname: `${profileData.nickname}`,
      url: `${profileData.url}`,
      userDescription: `${profileData.userDescription}`,
    },
  } = useForm({
    mode: 'onTouched',
  });

  const _id = useSelector(state => state.user.profile?._id);

  const onSubmit = useCallback(
    data => {
      axios.post('api/user/update', { _id, data }).then(response => {
        if (response.data.success) {
          alert(`${response.data.message}`);
        } else {
          alert(`${response.data.message}`);
        }
      });
    },
    [_id],
  );

  return (
    <>
      <FormBox onSubmit={handleSubmit(onSubmit)}>
        <ColumnBox>
          <UserAvatar />
        </ColumnBox>
        <MarginBox margin="8px" />
        <InputBox>
          <label htmlFor="name">이름</label>
          <FilledInput
            id="name"
            type="text"
            defaultValue={defaultValues.name}
            readOnly
          />
        </InputBox>
        <InputBox>
          <label htmlFor="email">이메일</label>
          <FilledInput
            id="email"
            type="text"
            defaultValue={defaultValues.email}
            readOnly
          />
        </InputBox>
        {!readOnly && (
          <InputAlert>이름 및 이메일은 수정할 수 없습니다.</InputAlert>
        )}
        <InputBox>
          <label
            className={errors.nickname ? 'errorTypeLabel' : null}
            htmlFor="nickname"
          >
            닉네임
          </label>
          <FilledInput
            id="nickname"
            type="text"
            readOnly={readOnly}
            defaultValue={defaultValues.nickname}
            className={errors.nickname ? 'errorInput' : null}
            {...register('nickname', {
              minLength: 2,
              maxLength: 10,
            })}
          />
          {errors.nickname && (
            <ErrorMessage>{NickNameError[errors.nickname.type]}</ErrorMessage>
          )}
        </InputBox>
        <InputBox>
          <label className={errors.url ? 'errorTypeLabel' : null} htmlFor="url">
            내 사이트
          </label>
          <FilledInput
            id="url"
            type="url"
            readOnly={readOnly}
            className={errors.url ? 'errorInput' : null}
            defaultValue={defaultValues.url}
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
            readOnly={readOnly}
            className={errors.userDescription ? 'errorInput' : null}
            defaultValue={defaultValues.userDescription}
            {...register('userDescription', {
              maxLength: 100,
            })}
          />
          {errors.userDescription && (
            <ErrorMessage>
              {DescriptionError[errors.userDescription.type]}
            </ErrorMessage>
          )}
        </InputBox>
        {!readOnly && (
          <BorderButton type="submit" marginTop="28px">
            프로필 수정
          </BorderButton>
        )}
      </FormBox>
    </>
  );
};

export default EditForm;
