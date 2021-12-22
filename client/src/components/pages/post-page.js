/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Service from '../../services/post-service';

import PostDetails from '../post-details';
import Spinner from '../spinner';

const PostPage = (props) => {
  const [state, setState] = useState({
    loading: true,
    error: false
  });
  const service = new Service();

  useEffect(() => {
    service.getPostById(props.match.params.id).then((data) => {
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
          errorMessage: 'No posts found'
        }));
      }
    });
  });

  if (state.loading) {
    return (
      <div className='mt-5'>
        <Spinner />
      </div>
    );
  }

  const {
    postId,
    type,
    title,
    description,
    district,
    address,
    ownerPhone,
    price,
    originLink,
    date
  } = state;

  return (
    <PostDetails
      postId={postId}
      type={type}
      title={title}
      description={description}
      district={district}
      address={address}
      ownerPhone={ownerPhone}
      price={price}
      originLink={originLink}
      date={date}
      involvedUsers={[
        { id: 'asadd', avatar: 'avatar2.png', username: 'zirael' },
        { id: 'asdscadd', avatar: 'avatar2.png', username: 'leaf' },
        { id: 'asbnbfadd', avatar: 'avatar2.png', username: 'reaper' }
      ]}
      photos={[
        { id: 'adosddjia', src: '/images/1.jpg' },
        { id: 'asdscadgngnd', src: '/images/2.jpg' },
        { id: 'asbnbfadsdad', src: '/images/3.jpg' }
      ]}
    />
  );
};

export default PostPage;
