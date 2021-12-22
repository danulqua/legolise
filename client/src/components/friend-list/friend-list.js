/* eslint-disable react/prop-types */
import React from 'react';

const FriendList = (props) => {
  const { userId, friendList } = props;
  return (
    <div className='profile-page-friend-list'>
      <div className='profile-page-friend-list-menu'>
        <h2>Your subscribers</h2>
        <a href={'profile/' + userId + '/friends'}>Check all</a>
      </div>
      <div className='profile-page-friend-list-container'>
        {friendList.map((profile) => (
          <div key={profile.id} className='profile-page-friend'>
            <a href={'profile/' + profile.id}>
              <img src={'/images/' + profile.avatar}></img>
            </a>
            <h4>{profile.userName}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendList;
