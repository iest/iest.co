import React, { Component } from 'react';
import { Route } from 'react-router';

import Root from 'root/root';

class Hello extends Component {
  render() {
    return (
      <div>Hello!</div>
    );
  }
}

export default (
  <Route path="/" component={Root}>
    <Route path="hello" component={Hello}/>
  </Route>
);
