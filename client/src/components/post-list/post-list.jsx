import React, { Component, useState, useEffect } from 'react';
import { Row } from 'reactstrap';
import PostCard from '../post-card/post-card.jsx';
import Spinner from '../spinner/spinner.jsx';

import Service from '../../services/post-service';

const PostList = () => {
  const service = new Service();
  const [state, setState] = useState({
    posts: [],
    loading: true,
    error: false
  });

  useEffect(() => {
    service.getAllPosts().then((res) => {
      if (!res.error) {
        return setState((state) => ({
          ...state,
          posts: res.map((item) => {
            return item;
          }),
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

  const onLike = (id) => {
    setState(({ posts }) => {
      const clonedPosts = [...posts];
      const idx = clonedPosts.findIndex((item) => item.postId === id);
      const newPost = { ...clonedPosts[idx], liked: !clonedPosts[idx].liked };
      clonedPosts[idx] = newPost;
      return {
        posts: clonedPosts
      };
    });
  };

  const content = state.loading ? (
    <Spinner />
  ) : (
    state.posts.map((post) => {
      console.log(post);
      const { _id, title, pictures, liked, createdOn } = post;
      return (
        <PostCard
          key={_id}
          id={_id}
          title={title}
          img={pictures[0]}
          liked={liked}
          date={createdOn}
          onLike={() => onLike(_id)}
        />
      );
    })
  );
  return (
    <div className='feed-posts-block'>
      <ul className='post-list'>
        <Row>{content}</Row>
      </ul>
    </div>
  );
};

export default PostList;
