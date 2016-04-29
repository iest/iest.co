import React, { PropTypes, Component } from 'react';
import Helmet from 'react-helmet';

import Nav from 'components/nav';
import Footer from 'components/footer';

export default class Root extends Component {
  static propTypes = {
    children: PropTypes.any,
  }
  render() {
    return (
      <div>
        <Helmet
          titleTemplate="%s | iest.co"
        />
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
