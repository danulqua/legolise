import React from 'react';
import EditPostForm from '../../post-edit-page/post-edit-page.jsx';

const EditPost = (props) => {
  return (
    <div className='new-post'>
      <h2>Edit your post</h2>
      <EditPostForm />
    </div>
  );
};

export default EditPost;
