import React from 'react';
import './User.css';

const User = ({ userProfile }) => {
  if (!userProfile) {
    return <></>;
  }

  const {
    name,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    avatar_url,
  } = userProfile;

  return (
    <div className="user">
      <div className="user_header-container">
        <div className="user__avatar-container">
          <img className="user__avatar" src={avatar_url} alt="avatar" />
        </div>
        <div className="user__names-container">
          <div className="user__name">{name}</div>
          <div className="user__login">{login}</div>
          <div className="user_joined-day">{created_at}</div>
        </div>
      </div>

      <div className="user__bio">{bio ? bio : 'Oh! Such empty...'}</div>

      <div className="user_repos-followers-following-contianer">
        <div className="user_repos">
          Repos
          <br />
          <strong>{public_repos}</strong>
        </div>
        <div className="user_followers">
          Followers
          <br />
          <strong>{followers}</strong>
        </div>
        <div className="user_following">
          Following
          <br />
          <strong>{following}</strong>
        </div>
      </div>
    </div>
  );
};

export default User;
