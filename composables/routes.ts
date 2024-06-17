interface routeMetadata {
  displayName: string;
  path: string;
  hideIfLoggedOut: boolean;
}

export const routes: Array<routeMetadata> = [
  {
    displayName: 'HTTP',
    path: 'http',
    hideIfLoggedOut: true,
  },
  {
    displayName: 'Search',
    path: 'search',
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
