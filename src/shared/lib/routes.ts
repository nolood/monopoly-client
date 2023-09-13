import { HOME_ROUTE } from '@/shared/lib/paths.ts';
import { HomePage } from '@/pages';
import { JSX } from 'react';

type RouteType = {
  path: string;
  Component: () => JSX.Element;
};

export const publicRoutes: RouteType[] = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
];
