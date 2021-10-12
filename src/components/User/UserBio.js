import React from 'react';

const UserBio = ({ bio }) => {
  return <div className="user__bio">{bio ? bio : 'Oh! Such empty...'}</div>;
};

export default UserBio;
