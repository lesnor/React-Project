import React from 'react';
import classes from './MyModal.module.css';
const MyModal = ({ children, show, setShow }) => {
  const rootClasses = [classes.MyModal];
  if (show === true) {
    rootClasses.push(classes.active);
  }
  return (
    <div className={rootClasses.join(' ')} onClick={() => setShow(false)}>
      <div
        className={classes.MyModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
