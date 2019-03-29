import React from 'react';
import { Route } from 'react-router-dom';

import ModeWrapper from './ModeWrapper';

/**
 * Receive an array with routes properties objects:
 * {
    path: {
      name: <route name>,
      exact: <boolean>,
    },
    component: <react component>,
    windowProperties: {
      hasDesktopMode: <boolean>,
      hasMobileMode: <boolean>,
    },
    privateRoute: <boolean>, undefined if present in both modes
    pilotClosed: <boolean>, undefined if present in both modes
  }
 * @param {*} routesList
 * @param {boolean} loggedIn
 * @param {boolean} pilotClosedState
 */
function renderRoutes(routesList, loggedIn, pilotClosedState) {
  let routesRender = [];

  if (routesList !== undefined) {
    routesRender = routesList
      .filter((item) => {
        // Filter by logged in visibility
        const { privateRoute } = item;

        if (privateRoute === undefined) {
          return true;
        }

        return privateRoute === loggedIn;
      })
      .filter((item) => {
        // Filter by pilot closed state
        const { pilotClosed } = item;

        if (pilotClosed === undefined) {
          return true;
        }

        return pilotClosed === pilotClosedState;
      })
      .map((item, index) => (
        <Route
          key={`route-${index}`}
          path={item.path.name}
          exact={item.path.exact}
          render={() => (
            <ModeWrapper
              hasDesktopMode={item.windowProperties.hasDesktopMode}
            >
              <item.component />
            </ModeWrapper>
          )}
        />
      ));
  }
  return routesRender;
}

export default renderRoutes;
