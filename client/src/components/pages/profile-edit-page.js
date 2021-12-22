import React, { Component } from 'react';
import './profile-edit-page.css';

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: '',
      occupation: '',
      about: '',
      priceRange: '',
      avatar: ''
    };
    this.handlerInput = this.handlerInput.bind(this);
    this.finishEditing = this.finishEditing.bind(this);
  }

  handlerInput(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  finishEditing() {
    console.log(this.state);
  }

  render() {
    return (
      <div className='edit-profile-menu'>
        <form className='edit-profile-menu-container' method='PUT'>
          <h1>Редагувати профіль</h1>
          <div className='edit-firstname edit-page-row'>
            <h4>Ім`я</h4>
            <input
              name='firstname'
              type='text'
              value={this.state.firstName}
              onChange={this.handlerInput}
            ></input>
          </div>
          <div className='edit-lastname edit-page-row'>
            <h4>Прізвище</h4>
            <input
              name='lastname'
              type='text'
              value={this.state.lastName}
              onChange={this.handlerInput}
            ></input>
          </div>
          <div className='username-input edit-page-row'>
            <h4>Ваш Username</h4>
            <input
              name='username'
              type='text'
              value={this.state.userName}
              onChange={this.handlerInput}
            ></input>
          </div>
          <hr></hr>
          <div className='edit-avatar edit-page-row'>
            <h4>Виберіть аватар</h4>
            <input
              name='avatar'
              type='file'
              value={this.state.avatar}
              onChange={this.handlerInput}
            ></input>
            <img src={'/images/' + this.state.avatar}></img>
          </div>
          <hr></hr>
          <div className='edit-occupation edit-page-row'>
            <h4>Рід занять</h4>
            <input
              name='occupation'
              placeholder='Введіть Ваш рід занять'
              type='text'
              value={this.state.occupation}
              onChange={this.handlerInput}
            ></input>
          </div>
          <div className='edit-about-input edit-page-row'>
            <h4>Про Вас</h4>
            <input
              name='about'
              placeholder='Розкажіть дещо про себе'
              type='text'
              value={this.state.about}
              onChange={this.handlerInput}
            ></input>
          </div>
          <div className='edit-roomates-preferences-input edit-page-row'>
            <h4>Вподобання в сусідах</h4>
            <input
              name='rommatesPreferences'
              placeholder='Розкажіть про Ваші вподобання в сусідах'
              type='text'
              value={this.state.roommatesPreferences}
              onChange={this.handlerInput}
            ></input>
          </div>
          <div className='price-input edit-page-row'>
            <h4>Цінові вподобання</h4>
            <input
              name='priceRange'
              placeholder='Розкажіть про Ваші цінові вподобання'
              type='text'
              value={this.state.priceRange}
              onChange={this.handlerInput}
            ></input>
          </div>
          <div className='submit-btn'>
            <button className='btn-primary btn' type='reset' onClick={this.finishEditing}>
              Зберегти
            </button>
          </div>
        </form>
      </div>
    );
  }
}
