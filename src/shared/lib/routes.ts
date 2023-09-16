import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from '@/shared/lib/paths.ts';
import { HomePage } from '@/pages';
import { JSX } from 'react';
import LoginPage from '@/pages/login-page/login-page';
import RegisterPage from '@/pages/register-page/register-page';

type RouteType = {
  path: string;
  Component: () => JSX.Element;
};

export const publicRoutes: RouteType[] = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
  },
  {
    path: REGISTER_ROUTE,
    Component: RegisterPage,
  },
];
