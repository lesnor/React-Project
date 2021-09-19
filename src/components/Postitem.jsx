import React from 'react';
import { useHistory } from 'react-router';
import FormButton from './Animation/button/FormButton';

const Postitem = (props) => {
  const router = useHistory();

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <FormButton
          style={{ margin: '0 10px' }}
          onClick={() => router.push(`/posts/${props.post.id}`)}
        >
          Open
        </FormButton>
        <FormButton onClick={() => props.remove(props.post)}>Delete</FormButton>
      </div>
    </div>
  );
};
export default Postitem;
