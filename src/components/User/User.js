import React from 'react';
import './User.css';
import UserTitle from './UserTitle';
import UserBio from './UserBio';
import UserReposFollowersFollwing from './UserReposFollowersFollwing';
import UserLinks from './UserLinks/UserLinks';

const User = ({ userProfile }) => {
  if (!userProfile) {
    return <></>;
  }

  return (
    <div className="user-background">
      <div className="user">
        <UserTitle {...userProfile} />
        <UserBio {...userProfile} />
        <UserReposFollowersFollwing {...userProfile} />
        <UserLinks {...userProfile} />
      </div>
    </div>
  );
};

export default User;
