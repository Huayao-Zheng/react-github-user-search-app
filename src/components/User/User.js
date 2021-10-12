import React from 'react';
import './User.css';

const User = () => {
  return (
    <div className="user-pofile-container">
      <div className="user">
        <div className="user__avatar-container">
          <img className="user__avatar" src="" alt="avatar" />
        </div>
        <div className="user__names-container">
          <div className="user__name">The Octocat</div>
          <div className="user__login"></div>
        </div>
      </div>
    </div>
  );
};

export default User;
