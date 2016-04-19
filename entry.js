import React from 'react';
import {render} from 'react-dom';
import Helmet from 'react-helmet';
import BodyClassName from 'react-body-classname';
import {createHistory, createMemoryHistory} from 'history';
import {renderToString, renderToStaticMarkup} from 'react-dom/server';
import {Router, RouterContext, match, useRouterHistory} from 'react-router';

import getAssets from 'lib/get-assets';
import template from 'template';
import routes from 'routes';

// Client render
if (typeof document !== 'undefined') {
  const history = useRouterHistory(createHistory)();
  const OUTLET = document.getElementById('root');

  render(<Router history={history}>{routes}</Router>, OUTLET);
}

// Exported static site renderer:
export default (locals, callback) => {
  const history = useRouterHistory(createMemoryHistory)();
  const location = history.createLocation(locals.path);

  const assets = getAssets(locals.webpackStats, '/');
  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (error) throw error;

    const html = renderToString(<RouterContext {...renderProps} />);
    const bodyClassNames = BodyClassName.rewind();
    const head = Helmet.rewind();

    const rendered = template({
      bodyClassNames,
      assets,
      html,
      head,
    });

    callback(null, rendered);
  });
};
