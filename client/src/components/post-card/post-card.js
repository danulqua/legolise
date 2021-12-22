/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import './post-card.css';
import groupImg from './img/group.jpg';
import flatImg from './img/flat.jpg';
import BtnLike from '../btn-like';

export default class PostCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type } = this.props;
    const view = type === 1 ? flatView(this.props) : groupView(this.props);

    return (
      <Col xl={4} lg={6}>
        <li className='post-card'>{view}</li>
      </Col>
    );
  }
}

function flatView(props) {
  let { id, title, img, price, district, date, liked, onLike } = props;
  img = img ? img : flatImg;

  return (
    <>
      <div className='post-img'>
        <img src={img}></img>
      </div>
      <div className='post-card-details'>
        <Link to={`/posts/${id}`}>
          <p className='title'>{title}</p>
        </Link>
        <div>
          <div className='price'>
            Ціна: <span>{price} &#8372;</span>
          </div>
          <div className='district'>
            Р-н <span>{district}</span>
          </div>
          <div className='date'>{date}</div>
        </div>
        <BtnLike liked={liked} onLike={onLike} />
      </div>
    </>
  );
}

function groupView(props) {
  const { id, title, date, liked, onLike } = props;

  return (
    <>
      <div className='post-img'>
        <img src={groupImg}></img>
      </div>
      <div className='post-card-details'>
        <Link to={`/posts/${id}`}>
          <p className='title'>{title}</p>
        </Link>
        <div>
          <div className='date'>{date}</div>
        </div>
        <BtnLike liked={liked} onLike={onLike} />
      </div>
    </>
  );
}
