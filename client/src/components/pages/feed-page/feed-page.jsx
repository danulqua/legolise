import React from 'react';
import './feed-page.scss';
import SearchForm from '../../search-form';
import PostList from '../../post-list/post-list.jsx';

const FeedPage = () => {
  return (
    <div className='feed'>
      <h2>Your feed</h2>
      <SearchForm />
      <hr></hr>
      <PostList />
    </div>
  );
};

export default FeedPage;
