import React from 'react';
import classes from './MyInput.module.css';
const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} type="text" className={classes.MyInp} {...props} />;
});

export default MyInput;
