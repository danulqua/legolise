/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Service from '../../../services/post-service';
import { Link } from 'react-router-dom';
import Spinner from '../../spinner/spinner.jsx';
import './post-page.scss';
import { formatDate } from '../../../helpers';
import BtnLike from '../../btn-like/btn-like.jsx';
import { Row, Col } from 'reactstrap';

const PostPage = () => {
  const params = useParams();
  const postID = params.id;
  console.log(postID);
  const [state, setState] = useState({
    loading: true,
    error: false
  });
  const service = new Service();

  useEffect(() => {
    console.log(service.getPostById(postID));
    service.getPostById(postID).then((data) => {
      if (!data.error) {
        setState((state) => ({
          ...state,
          ...data,
          loading: false
        }));
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
  console.log(state['0']._id);
  /* add button and user */
  return (
    <div className='post-wrapper'>
      <h2>Post Page</h2>
      <Row>
        <Col md={4}>
          <div className='left-side-pics'>
            <div className='post-img'>
              <img src={state['0'].pictures}></img>
            </div>
            <li>Number of likes {state['0'].likes.length}</li>
          </div>
        </Col>
        <Col md={8}>
          <div className='right-side-text'>
            <li>Title {state['0'].title}</li>
            <li>Description : {state['0'].description}</li>
            <li>Created on{formatDate(state['0'].createdOn)}</li>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PostPage;
