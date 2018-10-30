import Loadable from 'react-loadable';

export default Loadable({
  loader: (): any => import('./CreateChatRoom'),
  loading: (): any => null,
});
