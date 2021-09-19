import React, { useContext } from 'react';
import FormButton from '../components/Animation/button/FormButton';
import MyInput from '../components/Animation/input/MyInput';
import { AuthContext } from '../context';

const Login = () => {
  const { Auth, setAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Login pages</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Enter login" />
        <MyInput type="password" placeholder="Enter password" />
        <FormButton>Login</FormButton>
      </form>
    </div>
  );
};

export default Login;
