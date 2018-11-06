import React from 'react'
import { setConfig, hot } from 'react-hot-loader'
import Theme from 'docz-theme-default'

import { imports } from './imports'
import db from './db.json'

import Wrapper from '../../src/setup/docz_wrapper/wrapper';

const Root = () => (
  <Theme
    db={db}
    imports={imports}
    hashRouter={false}
    websocketUrl="ws://127.0.0.1:60505"
    wrapper={Wrapper}
  />
)

// TODO: this is temporary until react-hot-loader fix hooks issues
setConfig({
  pureSFC: true,
})

export default hot(module)(Root)
