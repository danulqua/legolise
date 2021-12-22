/* eslint-disable react/prop-types */
import React, { Component } from 'react';

const getAge = (dateOfBirth) => {
  const currentDate = new Date();
  const difference = currentDate - new Date(dateOfBirth);
  const age = Math.floor(difference / 31557600000);
  return age;
};

export default class FullInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { firstName, lastName, occupation, roomatesPreferences, priceRange, dateOfBirth } =
      this.props;
    return (
      <div className='profile-page-full-info'>
        <h2>Повна інформація</h2>
        <div className='profile-page-full-info-description'>
          <div className='profile-page-full-info-row'>
            <h3>Ім`я:</h3>
            <span className='col-sm-9 text-secondary'>{firstName}</span>
          </div>
          <div className='profile-page-full-info-row'>
            <h3>Прізвище:</h3>
            <span className='col-sm-9 text-secondary'>{lastName}</span>
          </div>
          <div className='profile-page-full-info-row'>
            <h3>Рід занять:</h3>
            <span className='col-sm-9 text-secondary'>{occupation}</span>
          </div>
          <div className='profile-page-full-info-row'>
            <h3>Вподобання в сусідах:</h3>
            <span className='col-sm-9 text-secondary'>{roomatesPreferences}</span>
          </div>
          <div className='profile-page-full-info-row'>
            <h3>Цінові вподобання:</h3>
            <span className='col-sm-9 text-secondary'>{priceRange}</span>
          </div>
          <div className='profile-page-full-info-row'>
            <h3>Вік:</h3>
            <span className='col-sm-9 text-secondary'>{getAge(dateOfBirth)}</span>
          </div>
        </div>
      </div>
    );
  }
}
