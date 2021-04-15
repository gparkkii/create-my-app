import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAvatarForm } from 'modules/actions/profile';
import { useColorMaker } from 'hooks/useColorMaker';
import { FormBox, BorderButton, MarginBox } from 'styles/form/styles';
import { ContentTitle } from 'styles/typography/styles';
import styled from 'styled-components';
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
        <ImageBox>
          <ImageContainer
            onClick={() => {
              HiddenRef.current.click();
            }}
          >
            {CheckedLabel === 'gravatar' && (
              <ShowImage
                src={GravatarUrl}
                alt={`${ProfileData.name}'s gravatar`}
              />
            )}
            {CheckedLabel === 'blank' && (
              <BlankBox>
                <ShowImage
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
              <ShowImage src={Preview} alt="upload" />
            )}
          </ImageContainer>
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
        </ImageBox>
        <ProfileTitle>
          <strong>{ProfileData.nickname}</strong> 님,
          <br />
          아바타를 선택해주세요.
        </ProfileTitle>
        <AvatarLabel>
          <label
            htmlFor="blank"
            className={CheckedLabel === 'blank' && 'focusedLabel'}
          >
            기본 아바타
          </label>
          <label
            htmlFor="gravatar"
            className={CheckedLabel === 'gravatar' && 'focusedLabel'}
          >
            그라바타
          </label>
          <label
            htmlFor="uploadImage"
            className={CheckedLabel === 'upload' && 'focusedLabel'}
          >
            내 아바타
          </label>
        </AvatarLabel>

        <BorderButton type="submit" marginTop="60px">
          입력완료
        </BorderButton>
      </FormBox>
    </>
  );
};

export default AvatarForm;

const ProfileTitle = styled.h2`
  font-size: 25px;
  font-weight: 600;
  width: 100%;
  text-align: center;
  margin: 28px 0px;
  & strong {
    color: #4957a5;
  }
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const HiddenInput = styled.input`
  display: none;
`;

const ImageContainer = styled.div`
  width: 156px;
  height: 156px;
  background-color: #eaeaea;
  border-radius: 100%;
`;

const ShowImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: ${props => props.backgroundColor || 'transparent'};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const AvatarLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  & label:first-of-type {
    margin-right: 8px;
  }
  & label:last-of-type {
    margin-left: 8px;
  }
  & label {
    width: 33.3%;
    height: 48px;
    border: 1px solid #c1c8f0;
    border-radius: 30px;
    font-size: 15px;
    line-height: 48px;
    text-align: center;
    &: hover {
      border: 1px solid #4957a5;
    }
  }
`;

const BlankBox = styled.div`
  position: relative;
  width: 156px;
  height: 156px;
  border-radius: 100%;
  font-size: 28px;
  font-weight: 500;
`;

const BlankName = styled.div`
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
