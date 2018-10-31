import reactLoadable from 'react-loadable';

export default reactLoadable({
  loader: (): any => import('./LandingPage'),
  loading: (): any => null
});
