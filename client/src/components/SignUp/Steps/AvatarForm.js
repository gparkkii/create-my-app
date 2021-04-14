import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { FormBox } from 'styles/form/styles';

const AvatarForm = () => {
  const [Preview, setPreview] = useState(null);
  const [ImageFile, setImageFile] = useState(null);

  const handleFile = useCallback(e => {
    const content = e.target.result;
    setPreview(content);
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

  return (
    <>
      <FormBox>
        <ImageBox>
          <ShowImage src={Preview} alt="upload" />
          <label htmlFor="uploadImage">내 이미지</label>
          <HiddenInput
            type="file"
            id="uploadImage"
            name="uploadImage"
            onChange={onImageChange}
            onClick={e => {
              e.target.value = null;
            }}
            capture="user"
            accept="image/png, image/jpg, image/jpeg"
          />
        </ImageBox>
      </FormBox>
      <ContentTitle>
        <strong>__</strong>님,
        <br />
        아바타를 선택해주세요.
      </ContentTitle>
    </>
  );
};

export default AvatarForm;

const ContentTitle = styled.h2`
  font-size: 25px;
  font-weight: 600;
  width: 100%;
  text-align: center;
  margin-top: 28px;
  margin-bottom: 15px;
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

const ShowImage = styled.img`
  width: 156px;
  height: 156px;
  background-color: #eaeaea;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 100%;
`;
