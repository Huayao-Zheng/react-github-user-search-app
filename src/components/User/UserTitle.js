import React from 'react';

const UserTitle = ({ avatar_url, name, login, created_at }) => {
  return (
    <div className="user__title-container">
      <div className="user__avatar-container">
        <img className="user__avatar" src={avatar_url} alt="avatar" />
      </div>
      <div className="user__names-container">
        <div className="user__name">{name}</div>
        <div className="user__login">{login}</div>
        <div className="user_joined-day">{created_at}</div>
      </div>
    </div>
  );
};

export default UserTitle;
