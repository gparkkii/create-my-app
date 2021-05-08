import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAvatarForm } from 'modules/actions/profile';
import { useColorMaker } from 'hooks/useColorMaker';
import {
  FormBox,
  BorderButton,
  MarginBox,
  ColumnBox,
  BlankBox,
  BlankName,
  Avatar,
  AvatarImage,
  AvatarLabelBox,
  HiddenInput,
} from 'styles/form/styles';
import { ProfileTitle, ContentTitle } from 'styles/typography/styles';
import axios from 'axios';

const AvatarForm = ({ next }) => {
  const dispatch = useDispatch();
  const HiddenRef = React.useRef(null);

  const ProfileData = useSelector(state => state.profile);
  const createGravatar = useSelector(state => state.user.data.hashedEmail);
  const [BlankBg, BlankColor] = useColorMaker(createGravatar);

  const GravatarUrl = `https://www.gravatar.com/avatar/${createGravatar}?&d=retro&s=100`;
  const BlankUrl = `https://www.gravatar.com/avatar/${createGravatar}?&d=blank&s=100`;

  const [Preview, setPreview] = useState(null);
  const [ImageFile, setImageFile] = useState(null);
  const [CheckedLabel, setCheckedLabel] = React.useState('blank');

  const handleFile = useCallback(e => {
    const content = e.target.result;
    setPreview(content);
    setCheckedLabel('upload');
  }, []);

  const onImageChange = useCallback(
    e => {
      const fileData = new FileReader();
      if (e.currentTarget.files[0]) {
        setImageFile(e.currentTarget.files[0]);
        fileData.onloadend = handleFile;
        fileData.readAsDataURL(e.currentTarget.files[0]);
      }
    },
    [handleFile],
  );

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      console.log(ImageFile);
      console.log(CheckedLabel);
      if (CheckedLabel === 'blank') {
        dispatch(
          addAvatarForm({
            profileImage: BlankUrl,
            profileImageType: CheckedLabel,
            hashedEmail: createGravatar,
          }),
        );
        next();
      } else if (CheckedLabel === 'upload') {
        const config = { header: { 'content-type': 'multipart/form-data' } };
        const formData = new FormData();
        formData.append('uploadImage', ImageFile);
        axios.post('/api/uploads', formData, config).then(response => {
          console.log(response.data);
          dispatch(
            addAvatarForm({
              profileImage: `http://localhost:5000/${response.data.filePath}`,
              profileImageType: CheckedLabel,
            }),
          );
          next();
        });
      } else {
        dispatch(
          addAvatarForm({
            profileImage: GravatarUrl,
            profileImageType: CheckedLabel,
          }),
        );
        next();
      }
    },
    [CheckedLabel, BlankUrl, GravatarUrl, ImageFile],
  );

  return (
    <>
      <ContentTitle>내 아바타</ContentTitle>

      <FormBox onSubmit={onSubmit}>
        <MarginBox margin="20px 0 0 0" />
        <ColumnBox>
          <Avatar
            onClick={() => {
              HiddenRef.current.click();
            }}
          >
            {CheckedLabel === 'gravatar' && (
              <AvatarImage
                src={GravatarUrl}
                alt={`${ProfileData.name}'s gravatar`}
              />
            )}
            {CheckedLabel === 'blank' && (
              <BlankBox>
                <AvatarImage
                  backgroundColor={BlankBg}
                  src={BlankUrl}
                  alt={`${ProfileData.name}'s blank`}
                />
                <BlankName color={BlankColor}>
                  {ProfileData.nickname.substring(0, 2)}
                </BlankName>
              </BlankBox>
            )}
            {CheckedLabel === 'upload' && (
              <AvatarImage src={Preview} alt="upload" />
            )}
          </Avatar>
          <HiddenInput
            type="radio"
            id="gravatar"
            value="gravatar"
            name="profileImage"
            onChange={e => setCheckedLabel(e.currentTarget.value)}
            checked={CheckedLabel === 'gravatar'}
          />
          <HiddenInput
            type="radio"
            id="blank"
            value="blank"
            name="profileImage"
            onChange={e => setCheckedLabel(e.currentTarget.value)}
            checked={CheckedLabel === 'blank'}
          />
          <HiddenInput
            type="file"
            id="uploadImage"
            name="uploadImage"
            onChange={onImageChange}
            onClick={e => {
              e.target.value = null;
            }}
            ref={HiddenRef}
            capture="user"
            accept="image/png, image/jpg, image/jpeg"
          />
        </ColumnBox>
        <ProfileTitle>
          <strong>{ProfileData.nickname}</strong> 님,
          <br />
          아바타를 선택해주세요.
        </ProfileTitle>
        <AvatarLabelBox>
          <label
            htmlFor="blank"
            className={CheckedLabel === 'blank' ? 'focusedLabel' : undefined}
          >
            기본 아바타
          </label>
          <label
            htmlFor="gravatar"
            className={CheckedLabel === 'gravatar' ? 'focusedLabel' : undefined}
          >
            그라바타
          </label>
          <label
            htmlFor="uploadImage"
            className={CheckedLabel === 'upload' ? 'focusedLabel' : undefined}
          >
            내 아바타
          </label>
        </AvatarLabelBox>

        <BorderButton type="submit" marginTop="60px">
          입력완료
        </BorderButton>
      </FormBox>
    </>
  );
};

export default AvatarForm;
