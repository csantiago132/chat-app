import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./CreateChatRoom'),
  loading: () => null,
});
