import React from 'react';
import {Link} from 'react-router';

export default class Index extends React.Component {
  render () {
    return (
      <div>
        Hello!
        <Link to="/projects/">Projects</Link>
      </div>
    );
  }
}
