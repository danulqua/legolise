import React from 'react';
import './feed-page.scss';
import SearchForm from '../../search-form';
import PostList from '../../post-list';

const FeedPage = () => {
  return (
    <div className='feed'>
      <h1>Your feed</h1>
      <SearchForm />
      <hr></hr>
      <PostList />
    </div>
  );
};

export default FeedPage;
