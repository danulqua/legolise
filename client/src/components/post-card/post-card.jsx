/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import './post-card.scss';
import { formatDate } from '../../helpers/index';

const PostCard = ({ id, img, title, date, userId }) => {
  console.log(img);
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
            Author: <Link to={`/users/${userId}`}>Vasil Kozakov</Link>
          </div>
        </div>
      </li>
    </Col>
  );
};

export default PostCard;
