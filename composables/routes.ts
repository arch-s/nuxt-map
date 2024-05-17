interface routeMetadata {
  displayName: string;
  path: string;
  hideIfLoggedOut: boolean;
}

export const routes: Array<routeMetadata> = [
  {
    displayName: 'Profile',
    path: 'profile',
    hideIfLoggedOut: true,
  },
  {
    displayName: 'Sign in',
    path: 'login',
    hideIfLoggedOut: false,
  },
  {
    displayName: 'Sign out',
    path: 'logout',
    hideIfLoggedOut: true,
  },
];
