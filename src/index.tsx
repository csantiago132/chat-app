import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'sanitize.css/sanitize.css';

// Import root app
import App from './containers/App';
import './setup/scss/base.scss';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

const render = ({ application }: any) => {
  ReactDOM.render(<BrowserRouter>{application}</BrowserRouter>, MOUNT_NODE);
};

render(App);

serviceWorker.unregister();
// declare var module: any;
