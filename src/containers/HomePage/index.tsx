import reactLoadable from 'react-loadable';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';

export default reactLoadable({
  loader: (): any => import('./Homepage'),
  loading: LoadingIndicator
});