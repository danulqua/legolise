/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../../../services/post-service';
import { Link } from 'react-router-dom';
import Spinner from '../../spinner/spinner.jsx';
import './post-page.scss';
import { formatDate } from '../../../helpers';
import BtnLike from '../../btn-like/btn-like.jsx';
import { Row, Col } from 'reactstrap';
import UserService from '../../../services/user-service';

const PostPage = () => {
  const params = useParams();

  const [state, setState] = useState({
    loading: true,
    error: false
  });
  const postService = new PostService();
  const userService = new UserService();

  useEffect(() => {
    postService.getPostById(params.id).then((data) => {
      if (!data.error) {
        userService.getUserInfoById(data['0'].createdBy).then((userData) => {
          if (!userData.error) {
            setState((state) => ({
              ...state,
              data: {
                ...data['0'],
                createdBy: { ...userData._doc }
              },
              loading: false
            }));
          }
        });
      } else {
        setState((state) => ({
          ...state,
          error: true,
          loading: false,
          errorMessage: 'No posts found'
        }));
      }
    });
  }, []);

  if (state.loading) {
    return (
      <div className='mt-5'>
        <Spinner />
      </div>
    );
  }

  return (
    <div className='post-wrapper'>
      <h2>Post Page</h2>
      <Row>
        <Col md={4}>
          <div className='left-side'>
            <div className='post-img'>
              <img src={`${process.env.PUBLIC_URL}/${state.data.pictures[0]}`}></img>
            </div>
            <div className='likes-count'>
              Likes: <span>{state.data.likes.length}</span>
            </div>
            <div className='author'>
              Author:{' '}
              <Link to={`/users/${state.data.createdBy._id}`}>{state.data.createdBy.username}</Link>
            </div>
            <Link className='btn btn-secondary' to={`/posts/${state.data._id}/edit`}>
              Edit post
            </Link>
          </div>
        </Col>
        <Col md={8}>
          <div className='right-side'>
            <div className='detail-item'>
              <div className='detail-item__header'>Title: </div>
              <div className='detail-item__info'>{state.data.title}</div>
            </div>
            <div className='detail-item'>
              <div className='detail-item__header'>Description: </div>
              <div className='detail-item__info'>{state.data.description}</div>
            </div>
            <div className='detail-item'>
              <div className='detail-item__header'>Updated on: </div>
              <div className='detail-item__info'>{formatDate(state.data.createdOn)}</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PostPage;
