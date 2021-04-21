import React from 'react';
import { useColorMaker } from 'hooks/useColorMaker';
import {
  FormBox,
  MarginBox,
  UnderlinedInput,
  UnderlinedLabel,
  ColumnBox,
  BlankBox,
  BlankName,
  AvatarImage,
  BigAvatar,
} from 'styles/form/styles';

const UserProfile = ({ profileData, createGravatar }) => {
  const [BlankBg, BlankColor] = useColorMaker(createGravatar);
  return (
    <>
      <FormBox>
        <ColumnBox>
          <BigAvatar>
            {profileData.profileImageType === 'blank' ? (
              <BlankBox>
                <AvatarImage
                  smallSize
                  backgroundColor={BlankBg}
                  src={profileData.profileImage}
                  alt={`${profileData.name}'s profile`}
                />
                <BlankName color={BlankColor}>
                  {profileData.nickname.substring(0, 2)}
                </BlankName>
              </BlankBox>
            ) : (
              <AvatarImage
                src={profileData.profileImage}
                alt={`${profileData.name}'s profile`}
              />
            )}
          </BigAvatar>
        </ColumnBox>
        <MarginBox margin="15px 0 0 0">
          <UnderlinedLabel htmlFor="name">이름</UnderlinedLabel>
          <UnderlinedInput id="name" value={profileData.name} readOnly />
          <UnderlinedLabel htmlFor="nickname">닉네임</UnderlinedLabel>
          <UnderlinedInput
            id="nickname"
            value={profileData.nickname}
            readOnly
          />
          <UnderlinedLabel htmlFor="email">이메일</UnderlinedLabel>
          <UnderlinedInput id="email" value={profileData.email} readOnly />
          <UnderlinedLabel htmlFor="url">내 사이트</UnderlinedLabel>
          <UnderlinedInput
            id="url"
            value={profileData.url.length === 0 ? '없음' : profileData.url}
            readOnly
          />
          <UnderlinedLabel htmlFor="description">자기소개</UnderlinedLabel>
          <UnderlinedInput
            id="description"
            value={
              profileData.userDescription.length > 25
                ? `${profileData.userDescription.substring(0, 25)}...`
                : profileData.userDescription
            }
            readOnly
          />
        </MarginBox>
      </FormBox>
    </>
  );
};

export default UserProfile;
