/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class Social extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { telegram, viber, whatsApp, phoneNumber } = this.props;
    return (
      <div className='profile-page-social-info'>
        <h3>Контакти</h3>
        <div className='profile-page-socail-rows'>
          <div className='profile-page-social-row'>
            <h5>Телефон:</h5>
            <span className='text-secondary'>{phoneNumber}</span>
          </div>
          <div className='profile-page-social-row'>
            <h5>Telegram:</h5>
            <span className='text-secondary'>{telegram}</span>
          </div>
          <div className='profile-page-social-row'>
            <h5>Viber:</h5>
            <span className='text-secondary'>{viber}</span>
          </div>
          <div className='profile-page-social-row'>
            <h5>WhatsApp:</h5>
            <span className='text-secondary'>{whatsApp}</span>
          </div>
        </div>
      </div>
    );
  }
}
