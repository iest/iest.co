import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet title="" />
        Hello!
        <Link to="/projects/">Projects</Link>
      </div>
    );
  }
}
