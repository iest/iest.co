import React from 'react';
import Helmet from 'react-helmet';

import { TypographyStyle } from 'utils/typography';
import {bg, fg} from 'utils/theme';

module.exports = React.createClass({
  propTypes() {
    return {
      title: React.PropTypes.string,
    };
  },
  render() {
    const {title} = Helmet.rewind();

    let cssLink;
    if (process.env.NODE_ENV === 'production') {
      cssLink = <link rel="stylesheet" href="/styles.css" />;
    }

    return (
      <html
        style={{
          background: bg,
          color: fg,
        }}
        lang="en"
      >
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=1.0"
          />
          {title.toComponent()}
          <link rel="shortcut icon" href={this.props.favicon} />
          <script src="https://use.typekit.net/pjs1bqz.js"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: 'try{Typekit.load({ async: true });}catch(e){}',
            }}
          ></script>
          <TypographyStyle />
          {cssLink}
        </head>
        <body>
          <div
            id="react-mount"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          <script src="/bundle.js" />
        </body>
      </html>
    );
  },
});
