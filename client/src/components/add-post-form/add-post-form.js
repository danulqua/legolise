/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PostService from '../../services/post-service';
import { useHistory } from 'react-router-dom';
import './add-post-form.css';

const AddPostForm = () => {
  const postService = new PostService();
  const history = useHistory();
  const assets = ['2.png', '1.png', '3.jpg', '5.png', '6.jpg'];
  const [state, setState] = useState({
    title: '',
    description: '',
    pictures: assets[Math.floor(Math.random() * assets.length)],
    likes: []
  });

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setState((state) => ({
      ...state,
      [name]: value
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const body = state;
    state.createdOn = new Date();
    postService.createPost(body).then((data) => {
      history.replace(`/posts/${data._id}`);
    });
  };

  return (
    <form id='add-post' method='POST'>
      <div className='post-input-block'>
        <h4>Title</h4>
        <input
          type='text'
          name='title'
          placeholder='Your title...'
          maxLength='255'
          onChange={onInputChange}
          required
        ></input>
      </div>
      <div className='post-input-block'>
        <h4>Description</h4>
        <textarea
          name='description'
          placeholder='Your description...'
          onChange={onInputChange}
          required
        ></textarea>
      </div>
      <button className='button action' type='submit' onClick={onSubmit}>
        Create post
      </button>
    </form>
  );
};
export default AddPostForm;
