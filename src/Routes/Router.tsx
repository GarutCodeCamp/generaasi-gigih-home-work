/* eslint-disable import/extensions */
import React, { lazy, LazyExoticComponent } from 'react';

export type typeRoute = {
  path: string;
  exact: boolean;
  component: LazyExoticComponent<React.FC>;
}

export const Routes: typeRoute[] = [
  {
    path: '/profile',
    exact: true,
    component: lazy(() => import('../Pages/profile')),
  },
  {
    path: '/create-playlist',
    exact: true,
    component: lazy(() => import('../Pages/createPlaylist')),
  }
]
