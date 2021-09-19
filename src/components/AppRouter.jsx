import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthContext } from '../context';

import { privateRoutes, publicRoutes } from '../router/route';
import Loader from './Animation/Loader/Loader';

const AppRouter = () => {
  const { Auth, setAuth, isLoading } = useContext(AuthContext);

  if (isLoading == true) {
    return <Loader />;
  }

  return Auth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}

      <Redirect to="posts" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}

      <Redirect to="/login" />
    </Switch>
  );
};

export default AppRouter;
