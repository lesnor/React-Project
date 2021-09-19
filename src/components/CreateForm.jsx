import React, { useState } from 'react';
import FormButton from './Animation/button/FormButton';
import MyInput from './Animation/input/MyInput';

const CreateForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now().toString(),
    };
    create(newPost);
    setPost({ title: '', body: '' });
  };

  return (
    <form action="">
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Post title"
      />

      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Post description"
      />
      {post.title === '' ? (
        <FormButton disabled={true}>Create Post</FormButton>
      ) : (
        <FormButton onClick={addNewPost} disabled={false}>
          Create Post
        </FormButton>
      )}
    </form>
  );
};
export default CreateForm;
