import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Link.module.css';
const MyLink = ({ to, children }) => {
  return (
    <Link to={to} className={cl.MyLinks}>
      {children}
    </Link>
  );
};

export default MyLink;
