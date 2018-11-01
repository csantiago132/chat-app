/**
 * Main entry point of the app
 *
 * Gets necessary components and renders app
 */

import * as React from "react";
import * as reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "sanitize.css/sanitize.css";

import App from "./containers/App";
import "./setup/scss/base.scss";

const MOUNT_NODE = document.getElementById("root");

reactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  MOUNT_NODE
);

serviceWorker.unregister();
