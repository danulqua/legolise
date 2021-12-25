/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { Component, useEffect, useState } from 'react';
import { withRouter, useParams, useHistory } from 'react-router-dom';
import PostService from '../../services/post-service';
import { EditPost } from '../pages';
import Spinner from '../spinner/spinner.jsx';
import './post-edit-page.scss';

const EditPostForm = (props) => {
  const [state, setState] = useState({
    loading: true,
    error: false
  });

  const { id } = useParams();
  const history = useHistory();

  const postService = new PostService();

  useEffect(() => {
    postService.getPostById(id).then((data) => {
      if (!data.error) {
        setState((state) => ({
          ...state,
          data: { ...data['0'] },
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
  }, []);

  const onInputChange = (e) => {
    const target = e.target;

    setState((state) => ({
      ...state,
      data: {
        ...state.data,
        [target.name]: target.value
      }
    }));

    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { ...state.data };

    console.log(body);

    postService.editPost(body._id, body).then((data) => {
      history.replace(`/posts/${body._id}`);
    });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    postService.deletePost(state.data._id).then(() => history.replace('/posts'));
  };

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
        <h3>Title</h3>
        <input
          type='text'
          name='title'
          placeholder='Your title...'
          maxLength='255'
          value={state.data.title}
          onChange={onInputChange}
          required
        ></input>
      </div>
      <div className='post-input-block'>
        <h3>Description</h3>
        <textarea
          name='description'
          placeholder='Your description...'
          onChange={onInputChange}
          value={state.data.description}
          required
        ></textarea>
      </div>
      <button className='button action' type='submit' onClick={handleSubmit}>
        Finish editing
      </button>
      <button className='button btn-outline-danger delete' type='submit' onClick={handleDelete}>
        Delete post
      </button>
    </form>
  );
};

export default EditPostForm;
