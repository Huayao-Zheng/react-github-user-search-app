import React from 'react';

const UserReposFollowersFollwing = ({ public_repos, followers, following }) => {
  return (
    <div className="user__repos-followers-following-container">
      <div className="user__repos">
        <div className="user__repos__name">Repos</div>
        <span className="user__repos__num">{public_repos}</span>
      </div>
      <div className="user__followers">
        <div className="user__followers__name">Followers</div>
        <span className="user__followers__num">{followers}</span>
      </div>
      <div className="user__following">
        <div className="user__following__name">Following</div>
        <span className="user__following__num">{following}</span>
      </div>
    </div>
  );
};

export default UserReposFollowersFollwing;
