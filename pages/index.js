import React from 'react';
import Helmet from 'react-helmet';

import Lnk from 'components/lnk';

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet title="" />
        Hello!
        <Lnk to="/projects/">Projects</Lnk>
      </div>
    );
  }
}
