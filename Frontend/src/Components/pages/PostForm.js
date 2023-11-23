import React from 'react';
import NavBar from '../organismos/NavBar';
import PostFormGroup from '../organismos/PostFormGroup';

const PostForm = () => {
  return (
    <div style={{backgroundColor:'#333', height:'97.8vh'}}>
      <div>
        <NavBar />
      </div>
      <div>
        <PostFormGroup />
      </div>
    </div>
  );
};

export default PostForm;