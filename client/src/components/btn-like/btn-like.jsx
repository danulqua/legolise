import React, { Component } from 'react';
import './btn-like.scss';

export default class BtnLike extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classLiked = this.props.liked ? ' liked' : '';

    return (
      <button className={'like-post' + classLiked} onClick={this.props.onLike}>
        <i className='fas fa-heart'></i>
      </button>
    );
  }
}
