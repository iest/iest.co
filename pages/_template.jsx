import React, { PropTypes, Component } from 'react';
import Helmet from 'react-helmet';
import {Block} from 'jsxstyle';

import {bg, fg} from 'utils/theme';

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
        <Block
          background={bg}
          color={fg}
        >
          {this.props.children}
        </Block>
      </div>
    );
  }
}
