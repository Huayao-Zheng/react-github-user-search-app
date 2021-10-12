import React from 'react';
import UserLinkLocation from './UserLinkLocation';
import UserLinkBlog from './UserLinkBlog';
import UserLinkTwitter from './UserLinkTwitter';
import UserLinkCompany from './UserLinkCompany';

const UserLinks = ({ location, blog, twitter_username, company }) => {
  return (
    <div className="user__links-container">
      <UserLinkLocation location={location} />
      <UserLinkBlog blog={blog} />
      <UserLinkTwitter twitter_username={twitter_username} />
      <UserLinkCompany company={company} />
    </div>
  );
};

export default UserLinks;
