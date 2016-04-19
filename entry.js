import React from 'react';
import ReactDOM from 'react-dom';
import {renderToString, renderToStaticMarkup} from 'react-dom/server';
import BodyClassName from 'react-body-classname';
import {createHistory, createMemoryHistory} from 'history';
import {Router, RouterContext, match, useRouterHistory} from 'react-router';

import getAssets from 'lib/get-assets';
import Template from 'template';
import routes from 'routes';

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
    if (error) throw error;

    const inner = renderToString(<RouterContext {...renderProps} />);

    const bodyClassNames = BodyClassName.rewind();
    const html = renderToString(
      <Template
        bodyClassNames={bodyClassNames}
        assets={assets}
        html={html}
      />
    );

    callback(null, '<!DOCTYPE html>' + html);
  });
};
