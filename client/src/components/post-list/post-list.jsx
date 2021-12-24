import React, { Component } from 'react';
import { Row } from 'reactstrap';
import PostCard from '../post-card/post-card.jsx';
import Spinner from '../spinner';

import Service from '../../services/post-service';

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
      posts: [],
      loading: true,
      error: false
    };

    this.onLike = this.onLike.bind(this);
  }

  componentDidMount() {
    this.service.getAllPosts().then((res) => {
      if (!res.error) {
        return this.setState({
          posts: res.map((item) => {
            const newItem = { ...item, liked: false };
            return newItem;
          }),
          loading: false
        });
      } else {
        this.setState({
          error: true,
          loading: false,
          errorMessage: 'Оголошення відсутні'
        });
      }
    });
  }

  onLike(id) {
    this.setState(({ posts }) => {
      const clonedPosts = [...posts];
      const idx = clonedPosts.findIndex((item) => item.postId === id);
      const newPost = { ...clonedPosts[idx], liked: !clonedPosts[idx].liked };
      clonedPosts[idx] = newPost;
      return {
        posts: clonedPosts
      };
    });
  }

  render() {
    const content = this.state.loading ? (
      <Spinner />
    ) : (
      this.state.posts.map((post) => {
        const { postId, type, title, price, district, img, liked } = post;
        return (
          <PostCard
            key={postId}
            id={postId}
            type={type}
            title={title}
            price={price}
            district={district}
            img={img}
            liked={liked}
            onLike={() => this.onLike(postId)}
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
  }
}
