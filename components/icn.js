import React, {PropTypes, Component} from 'react';
import {InlineBlock} from 'jsxstyle';

import icons from './icons';

export default class Icn extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    style: PropTypes.object,
  }
  render() {
    const {name, style} = this.props;
    return (
      <InlineBlock
        verticalAlign="-0.4em"
        width="1.5em"
        height="1.5em"
        style={style}
        props={{
          dangerouslySetInnerHTML: {__html: icons[name]},
        }}
      />
    );
  }
}
