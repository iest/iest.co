import React from 'react';
import ReactDOM from 'react-dom';
import {renderToString, renderToStaticMarkup} from 'react-dom/server';
import BodyClassName from 'react-body-classname';
import jade from 'jade';
import { createHistory, createMemoryHistory } from 'history';
import { Router, RouterContext, match, useRouterHistory } from 'react-router';

import getAssets from 'lib/get-assets';
import Template from './src/template';
import routes from './src/routes';

// Client render
if (typeof document !== 'undefined') {
  const history = useRouterHistory(createHistory)();
  const outlet = document.getElementById('root');

  ReactDOM.render(<Router history={history}>{routes}</Router>, outlet);
}

// Exported static site renderer:
export default (locals, callback) => {
  const history = useRouterHistory(createMemoryHistory)();
  const location = history.createLocation(locals.path);

  const assets = getAssets(locals.webpackStats, '/');
  match({ routes, location }, (error, redirectLocation, renderProps) => {
    const bodyClassNames = BodyClassName.rewind();
    console.log(bodyClassNames);
    callback(null, renderToStaticMarkup(
      <Template bodyClassNames={bodyClassNames} assets={assets}>
        <RouterContext {...renderProps} />
      </Template>
    ));
  });
};
