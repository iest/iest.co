import React from 'react';
import Helmet from 'react-helmet';
import BodyClassName from 'react-body-classname';

import {TypographyStyle} from 'utils/typography';

const BUSTER = new Date().getTime();

module.exports = React.createClass({
  propTypes() {
    return {
      title: React.PropTypes.string,
    };
  },
  render() {
    const {title} = Helmet.rewind();
    const bodyClassNames = BodyClassName.rewind();

    let cssLink;
    if (process.env.NODE_ENV === 'production') {
      cssLink = <link rel="stylesheet" href={`/styles.css?t=${BUSTER}`} />;
    }

    return (
      <html lang="en">
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
        <body style={bodyClassNames}>
          <div
            id="react-mount"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          <script src={`/bundle.js?t=${BUSTER}`} />
        </body>
      </html>
    );
  },
});
