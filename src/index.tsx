import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'sanitize.css/sanitize.css';

// Import root app
import App from './containers/App';
import './setup/scss/base.scss';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;
 
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,MOUNT_NODE
);


serviceWorker.unregister();
// declare var module: any;
