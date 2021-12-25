/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import './post-details.css';

import PhotosPost from '../post-photos';
import { formatDate } from '../../helpers';
import BtnLike from '../btn-like/btn-like.jsx';

const flatView = (props) => {
  const { title, description, district, address, ownerPhone, price, originLink, date, photos } =
    props;

  return (
    <div>
      <div className='post-details-info'>
        <div className='flex-wrapper'>
          <div className='user-info'>
            <div className='avatar'>
              <img src='https://via.placeholder.com/500'></img>
            </div>
            <Link to='/profile'>
              <span>John Week</span>
            </Link>
          </div>
          <div>{formatDate(date)}</div>
        </div>
        <hr></hr>
        <div className='details'>
          <div className='title'>{title}</div>
          <div className='type'>
            <h4>type of post</h4>
            <span>search for liver</span>
          </div>
          <div className='description'>
            <h4>Description</h4>
            <span>{description}</span>
          </div>
          <div className='district'>
            <h4>disctrict</h4>
            <span>{district}</span>
          </div>
          <div className='address'>
            <h4>address</h4>
            <span>{address}</span>
          </div>
          <div className='phone-number'>
            <h4>tel number</h4>
            <span>{ownerPhone}</span>
          </div>
          <div className='price'>
            <h4>price</h4>
            <span>{price} &#8372;</span>
          </div>
          {(() => {
            if (originLink) {
              return (
                <div className='originLink'>
                  <h4>original link</h4>
                  <a href={originLink} target='_blank' rel='noreferrer'>
                    {originLink}
                  </a>
                </div>
              );
            }
          })()}
        </div>
      </div>
      <PhotosPost photos={photos} />
    </div>
  );
};

const groupView = (props) => {
  const { title, description, date } = props;

  console.log(date);

  return (
    <div>
      <div className='post-details-info'>
        <div className='flex-wrapper'>
          <div className='user-info'>
            <div className='avatar'>
              <img src='https://via.placeholder.com/500'></img>
            </div>
            <span>John Week</span>
          </div>
        </div>
        <hr></hr>
        <div className='details'>
          <div className='title'>{title}</div>
          <div className='type'>
            <h4>type of post</h4>
            <span>search group</span>
          </div>
          <div className='description'>
            <h4>Description</h4>
            <span>{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default class PostDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { postId, type, liked, onLike } = this.props;
    const view = type === 1 ? flatView(this.props) : groupView(this.props);
    return (
      <div className='post-details-container'>
        <div className='post-page-header'>
          <h1>full info</h1>
          <div className='btns-page'>
            <Link to={postId + '/edit'}>
              <Button className='btn btn-primary'>redact</Button>
            </Link>
            <BtnLike liked={liked} onLike={onLike} />
          </div>
        </div>
        {view}
      </div>
    );
  }
}
