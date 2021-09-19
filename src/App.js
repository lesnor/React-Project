import React, { useEffect, useState } from 'react';

import './styles/App.css';

import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Animation/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
function App() {
  const [Auth, setAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setAuth(true);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        Auth,
        setAuth,
        isLoading,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
