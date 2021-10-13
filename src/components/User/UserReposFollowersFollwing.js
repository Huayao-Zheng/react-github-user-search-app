import React from 'react';

const UserReposFollowersFollwing = ({ public_repos, followers, following }) => {
  return (
    <div className="user__repos-followers-following-container">
      <div className="user__repos">
        Repos
        <br />
        <strong>{public_repos}</strong>
      </div>
      <div className="user__followers">
        Followers
        <br />
        <strong>{followers}</strong>
      </div>
      <div className="user__following">
        Following
        <br />
        <strong>{following}</strong>
      </div>
    </div>
  );
};

export default UserReposFollowersFollwing;
