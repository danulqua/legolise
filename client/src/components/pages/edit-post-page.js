import React from 'react';
import EditPostForm from '../post-edit-page';

const EditPost = (props) => {
  return (
    <div className='new-post'>
      <h1>Edit your post</h1>
      <EditPostForm />
    </div>
  );
};

export default EditPost;
