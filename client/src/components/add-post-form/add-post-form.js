/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PostService from '../../services/post-service';
import { withRouter } from 'react-router-dom';
import './add-post-form.css';

class AddPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 1,
      title: '',
      description: '',
      district: 'Голосіївський',
      address: '',
      ownerPhone: '',
      price: null,
      originLink: ''
    };
    this.postService = new PostService();

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    const target = e.target;

    this.setState((state) => {
      const newState = state;
      newState[target.name] = target.name === 'type' ? +target.value : target.value;
      return newState;
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const body =
      this.state.type === 1
        ? {
            ...this.state,
            originLink: this.state.originLink ? this.state.originLink : null
          }
        : {
            ...this.state,
            district: null,
            address: null,
            ownerPhone: null,
            price: null,
            originLink: null
          };

    this.postService.createPost(body).then((data) => {
      this.props.history.replace(`/posts/${data.postId}`);
    });
  }

  render() {
    const view = this.state.type === 1 ? this.flatView() : this.groupView();

    return (
      <form id='add-post' method='POST'>
        <div className='post-input-block'>
          <h4>Тип оголошення</h4>
          <div className='form-radio'>
            <input
              type='radio'
              id='type-1'
              name='type'
              value='1'
              defaultChecked
              onChange={this.onInputChange}
            />
            <label htmlFor='type-1'>Пошук співмешканця</label>
          </div>
          <div className='form-radio'>
            <input type='radio' id='type-2' name='type' value='2' onChange={this.onInputChange} />
            <label htmlFor='type-2'>Пошук групи</label>
          </div>
        </div>
        {view}
        <button className='button action' type='submit' onClick={this.onSubmit}>
          Створити
        </button>
      </form>
    );
  }

  flatView() {
    return (
      <>
        <div className='post-input-block'>
          <h4>Назва</h4>
          <input
            type='text'
            name='title'
            placeholder='Назва оголошення...'
            maxLength='255'
            required
            onChange={this.onInputChange}
          ></input>
        </div>
        <div className='post-input-block'>
          <h4>Опис</h4>
          <textarea
            name='description'
            placeholder='Опис оголошення...'
            onChange={this.onInputChange}
            required
          ></textarea>
        </div>
        <div className='post-input-block'>
          <h4>Район</h4>
          <select name='district' onChange={this.onInputChange} required>
            <option>Голосіївський</option>
            <option>Дарницький</option>
            <option>Деснянський</option>
            <option>Дніпровський</option>
            <option>Оболонський</option>
            <option>Печерський</option>
            <option>Подільский</option>
            <option>Святошинський</option>
            <option>Солом'янський</option>
            <option>Шевченківський</option>
          </select>
        </div>
        <div className='post-input-block'>
          <h4>Адреса</h4>
          <input
            type='text'
            name='address'
            placeholder='Адреса...'
            maxLength='255'
            onChange={this.onInputChange}
            required
          ></input>
        </div>
        <div className='post-input-block'>
          <h4>Номер телефону власника квартири</h4>
          <input
            type='tel'
            name='ownerPhone'
            placeholder='+380952225566'
            maxLength='13'
            onChange={this.onInputChange}
          ></input>
        </div>
        <div className='post-input-block'>
          <h4>Ціна</h4>
          <input
            type='number'
            name='price'
            placeholder='Ціна...'
            maxLength='13'
            onChange={this.onInputChange}
            required
          ></input>
        </div>
        <div className='post-input-block'>
          <h4>Оригінальне оголошення</h4>
          <input
            type='text'
            name='originLink'
            placeholder='Посилання на оголошення...'
            onChange={this.onInputChange}
          ></input>
        </div>
      </>
    );
  }

  groupView() {
    return (
      <>
        <div className='post-input-block'>
          <h4>Назва</h4>
          <input
            type='text'
            name='title'
            placeholder='Назва оголошення...'
            maxLength='255'
            onChange={this.onInputChange}
            required
          ></input>
        </div>
        <div className='post-input-block'>
          <h4>Опис</h4>
          <textarea
            name='description'
            placeholder='Опис оголошення...'
            onChange={this.onInputChange}
            required
          ></textarea>
        </div>
      </>
    );
  }
}

// removed export with router as React v. > 5
export { AddPostForm };
export default withRouter(AddPostForm);
