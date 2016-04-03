import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { createHistory, createMemoryHistory } from 'history';
import { Router, RouterContext, match, useRouterHistory } from 'react-router';

import routes from './src/routes';
import template from './src/template.jade';

// Client render (optional):
if (typeof document !== 'undefined') {
  const history = useRouterHistory(createHistory)();
  const outlet = document.getElementById('root');

  ReactDOM.render(<Router history={history}>{routes}</Router>, outlet);
}

// Exported static site renderer:
export default (locals, callback) => {
  const history = useRouterHistory(createMemoryHistory)();
  const location = history.createLocation(locals.path);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    callback(null, template({
      html: ReactDOMServer.renderToString(<RouterContext {...renderProps} />),
      assets: locals.assets,
    }));
  });
};
