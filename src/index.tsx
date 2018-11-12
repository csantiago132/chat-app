/**
 * Main entry point of the app
 *
 * Gets necessary components and renders app
 */

import * as React from "react";
import * as reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./setup/theme";
import * as serviceWorker from "./serviceWorker";
import "sanitize.css/sanitize.css";

import App from "./containers/App";

const MOUNT_NODE = document.getElementById("root");

reactDom.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  MOUNT_NODE
);

serviceWorker.unregister();
