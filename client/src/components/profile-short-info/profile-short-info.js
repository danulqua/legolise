/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class ShortInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { userName, about, rating, avatar } = this.props;
    return (
      <div className='profile-page-short-info d-flex flex-column align-items-center text-center'>
        <img src={'/images/' + avatar}></img>
        <div>
          <h3 className='profile-page-username'>{userName}</h3>
        </div>
        <div>
          <h5 className='profile-page-about'>{about}</h5>
        </div>
        <div>
          <h5 className='profile-page-rating'>Рейтинг: {rating}</h5>
        </div>
        <Button color='primary'>Додати до списку друзів</Button>
        <Link to={'/editProfile'}>
          <Button className='mt-2' color='secondary'>
            Редагувати профіль
          </Button>
        </Link>
      </div>
    );
  }
}
