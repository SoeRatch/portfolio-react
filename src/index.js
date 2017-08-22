import React from 'react';
import ReactDOM from 'react-dom';

import Main from './containers/Main/Main';

import './theme/globalStyle';
import { HashRouter} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import './theme/globalStyle';
ReactDOM.render((
  <HashRouter>
    <Main />
  </HashRouter>
  ),
  document.getElementById('root')
);

registerServiceWorker();
