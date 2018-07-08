import React from 'react';
import './User.css';

const Avatar = ({ user }) => (
  <div className="user">
    <img className="avatar" src={user.avatar_url} alt=""/>
    <a href={user.profile_url}>{user.username}</a>
  </div>
);

export default Avatar;
