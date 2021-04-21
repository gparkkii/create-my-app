import React from 'react';
import { useSelector } from 'react-redux';
import UserProfile from './UserProfile';

const Content = () => {
  const profileData = useSelector(state => state.user.profile);
  const createGravatar = useSelector(state => state.user.profile.hashedEmail);

  return (
    <div>
      <UserProfile profileData={profileData} createGravatar={createGravatar} />
    </div>
  );
};

export default Content;
