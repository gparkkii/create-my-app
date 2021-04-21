import React from 'react';
import { useSelector } from 'react-redux';
import UserProfile from 'components/common/UserProfile';

const CompleteForm = () => {
  const profileData = useSelector(state => state.profile);
  const createGravatar = useSelector(state => state.user.data.hashedEmail);
  return (
    <>
      <UserProfile profileData={profileData} createGravatar={createGravatar} />
    </>
  );
};

export default CompleteForm;
