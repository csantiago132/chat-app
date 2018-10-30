import reactLoadable from 'react-loadable';
import PreviewLoader from '../PreviewLoader/PreviewLoader';

export default reactLoadable({
  loader: () => import('./RoomsList'),
  loading: PreviewLoader,
});
