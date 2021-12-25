import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import LocalStorageService from '../../helpers/storageService';

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const token = LocalStorageService.getAccessToken();
  console.log(token);

  return (
    <Route
      {...restOfProps}
      render={(props) => (token ? <Component {...props} /> : <Redirect to='/login' />)}
    />
  );
};

export default ProtectedRoute;
