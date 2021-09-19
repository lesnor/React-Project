import React, { useContext } from 'react';
import { AuthContext } from '../../../context';
import FormButton from '../button/FormButton';
import MyLink from '../Link/Link';

const Navbar = () => {
  const { Auth, setAuth } = useContext(AuthContext);

  const logout = () => {
    setAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <div className="navbar">
      <FormButton onClick={logout}>Logout</FormButton>
      <div className="navbar__items">
        <MyLink to="/about">about</MyLink>
        <MyLink to="/posts">posts</MyLink>
      </div>
    </div>
  );
};
export default Navbar;
