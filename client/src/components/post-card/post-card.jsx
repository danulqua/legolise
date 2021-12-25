/* eslint-disable react/prop-types */
import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import './post-card.scss';
import { formatDate } from '../../helpers/index';
import UserService from '../../services/user-service';

const PostCard = ({ id, img, title, date, userId }) => {
  const userService = new UserService();
  const [userName, setUsername] = useState('');

  useEffect(() => {
    userService.getUserInfoById(userId).then((res) => {
      console.log(res._doc.username);
      return setUsername(res._doc.username);
    });
  }, []);

  return (
    <Col sm={6} lg={4} xl={3}>
      <li className='post-card'>
        <Link to={`/posts/${id}`}>
          <div className='post-img'>
            <img src={process.env.PUBLIC_URL + img}></img>
          </div>
        </Link>
        <div className='post-card-details'>
          <div className='title'>
            <Link to={`/posts/${id}`}>{title}</Link>
          </div>
          <div>Created on {formatDate(date)}</div>
          <div className='author'>
            Author: <Link to={`/users/${userName}`}>{userName}</Link>
          </div>
        </div>
      </li>
    </Col>
  );
};

export default PostCard;
