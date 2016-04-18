import jade from 'jade';
import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import BodyClassName from 'react-body-classname';
import {createHistory, createMemoryHistory} from 'history';
import {renderToString, renderToStaticMarkup} from 'react-dom/server';
import {Router, RouterContext, match, useRouterHistory} from 'react-router';

import template from './src/template.jade';
import getAssets from 'lib/get-assets';
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
    let head = Helmet.rewind();
    const bodyClassNames = BodyClassName.rewind();
    const html = renderToString(<RouterContext {...renderProps} />);
    callback(null, template({head, html, assets}));
  });
};
