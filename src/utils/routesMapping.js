import React from 'react';
import { Route } from 'react-router-dom';

export const createRoute = (path, component, exact) => {
  return {
    path,
    component,
    exact,
  }
}

export const renderRoutes = (routesList) => {
  let routesRender = [];
  if (routesList !== undefined) {
    routesRender = routesList.map((item, index) =>
      <Route key={'route-' + index} path={item.path} exact={item.exact} component={item.component} />
    );
  }
  return routesRender;
}
