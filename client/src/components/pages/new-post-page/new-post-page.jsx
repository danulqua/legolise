import React from 'react';
import './new-post-page.scss';
import AddPostForm from '../../add-post-form';

const NewPostPage = (props) => {
  return (
    <div className='new-post'>
      <h1>New post</h1>
      <AddPostForm />
    </div>
  );
};

export default NewPostPage;
