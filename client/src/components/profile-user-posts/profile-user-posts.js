/* eslint-disable react/prop-types */
import React from 'react';

const UserPosts = ({ userPosts }) => {
  return (
    <div className='profile-page-liked-posts'>
      <h2>Users Posts</h2>
      <div className='profile-page-liked-posts-container'>
        {userPosts.map((post) => (
          <div key={post.id} className='profile-page-post'>
            <h4>{post.title}</h4>
            <a href={'post/' + post.id.toString()}>Check all</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
