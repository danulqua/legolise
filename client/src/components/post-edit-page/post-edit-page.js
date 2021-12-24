/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { Component, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PostService from '../../services/post-service';
import { EditPost } from '../pages';
import Spinner from '../spinner/spinner.jsx';
import './post-edit-page.css';

// const flatView = () => {
//   return (
//     <>
//       <div className='post-input-block'>
//         <h4>Назва</h4>
//         <input
//           value={this.state.title}
//           type='text'
//           name='title'
//           placeholder='Назва оголошення...'
//           maxLength='255'
//           required
//           onChange={this.onInputChange}
//         ></input>
//       </div>
//       <div className='post-input-block'>
//         <h4>Опис</h4>
//         <textarea
//           value={this.state.description}
//           name='description'
//           placeholder='Опис оголошення...'
//           onChange={this.onInputChange}
//           required
//         ></textarea>
//       </div>
//       <div className='post-input-block'>
//         <h4>Район</h4>
//         <select name='district' onChange={this.onInputChange} required>
//           <option>Голосіївський</option>
//           <option>Дарницький</option>
//           <option>Деснянський</option>
//           <option>Дніпровський</option>
//           <option>Оболонський</option>
//           <option>Печерський</option>
//           <option>Подільский</option>
//           <option>Святошинський</option>
//           <option>Солом'янський</option>
//           <option>Шевченківський</option>
//         </select>
//       </div>
//       <div className='post-input-block'>
//         <h4>Адреса</h4>
//         <input
//           value={this.state.address === null ? '' : this.state.address}
//           type='text'
//           name='address'
//           placeholder='Адреса...'
//           maxLength='255'
//           onChange={this.onInputChange}
//           required
//         ></input>
//       </div>
//       <div className='post-input-block'>
//         <h4>Номер телефону власника квартири</h4>
//         <input
//           value={this.state.ownerPhone === null ? '' : this.state.ownerPhone}
//           type='tel'
//           name='ownerPhone'
//           placeholder='+380952225566'
//           maxLength='13'
//           onChange={this.onInputChange}
//         ></input>
//       </div>
//       <div className='post-input-block'>
//         <h4>Ціна</h4>
//         <input
//           value={this.state.price === null ? '' : this.state.price}
//           type='number'
//           name='price'
//           placeholder='Ціна...'
//           maxLength='13'
//           onChange={this.onInputChange}
//           required
//         ></input>
//       </div>
//       <div className='post-input-block'>
//         <h4>Оригінальне оголошення</h4>
//         <input
//           value={this.state.originLink === null ? '' : this.state.originLink}
//           type='text'
//           name='originLink'
//           placeholder='Посилання на оголошення...'
//           onChange={this.onInputChange}
//         ></input>
//       </div>
//     </>
//   );
// }

// const groupView = () => {
//   return (
//     <>
//       <div className='post-input-block'>
//         <h4>Назва</h4>
//         <input
//           value={this.state.title}
//           type='text'
//           name='title'
//           placeholder='Назва оголошення...'
//           maxLength='255'
//           onChange={this.onInputChange}
//           required
//         ></input>
//       </div>
//       <div className='post-input-block'>
//         <h4>Опис</h4>
//         <textarea
//           value={this.state.description}
//           name='description'
//           placeholder='Опис оголошення...'
//           onChange={this.onInputChange}
//           required
//         ></textarea>
//       </div>
//     </>
//   );
// }

const EditPostForm = (props) => {
  const [state, setState] = useState({
    loading: true,
    error: false
  });

  const postService = new PostService();

  useEffect(() => {
    postService.getPostById(props.match.params.id).then((data) => {
      if (!data.error) {
        setState((state) => ({
          ...state,
          loading: false
        }));
      } else {
        setState((state) => ({
          ...state,
          error: true,
          loading: false,
          errorMessage: 'Post not found'
        }));
      }
    });
  });

  const onInputChange = (e) => {
    const target = e.target;

    setState((state) => ({
      ...state,
      [target.name]: target.name === 'type' ? +target.value : target.value
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const body =
      state.type === 1
        ? {
            ...state,
            originLink: state.originLink ? state.originLink : null
          }
        : {
            ...state,
            district: null,
            address: null,
            ownerPhone: null,
            price: null,
            originLink: null
          };

    postService.editPost(state.postId, body).then((data) => {
      props.history.replace(`/posts/${data.postId}`);
    });
  };

  const onDelete = (e) => {
    e.preventDefault();
    postService.deletePost(state.postId).then(() => props.history.replace('/posts'));
  };

  const { type } = state;

  if (state.loading) {
    return (
      <div className='mt-5'>
        <Spinner />
      </div>
    );
  }
  return (
    <form id='add-post' method='PUT'>
      <div className='post-input-block'>
        <h4>Тип оголошення</h4>
        <div className='form-radio'>
          <input
            type='radio'
            id='type-1'
            name='type'
            value='1'
            checked={type === 1}
            onChange={onInputChange}
          />
          <label htmlFor='type-1'>Пошук співмешканця</label>
        </div>
        <div className='form-radio'>
          <input
            type='radio'
            id='type-2'
            name='type'
            value='2'
            checked={type === 2}
            onChange={onInputChange}
          />
          <label htmlFor='type-2'>Пошук групи</label>
        </div>
      </div>
      <button className='button action' type='submit' onClick={onSubmit}>
        Зберегти
      </button>
      <button className='btn btn-outline-danger ml-2' onClick={onDelete}>
        Видалити
      </button>
    </form>
  );
};

export default EditPostForm;
