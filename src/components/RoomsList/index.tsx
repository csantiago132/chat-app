import Loadable from 'react-loadable'
import PreviewLoader from '../PreviewLoader/PreviewLoader';

export default Loadable({
  loader: () => import('./RoomsList'),
  loading: PreviewLoader
});
