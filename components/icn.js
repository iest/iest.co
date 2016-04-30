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
    // const Svg = icons[name];
    return (
      <InlineBlock
        verticalAlign="-0.4em"
        width="1.5em"
        height="1.5em"
        style={style}
      >
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.97687739,7.25978964 L10.5319519,19.1217098 L8.60699631,24.2683631 L4,12.5637392 L5.97687739,7.25978964 L5.97687739,7.25978964 L5.97687739,7.25978964 Z M12.4167337,24.0298913 L12.4213487,24.0419092 L19.1693987,6 L25.6282465,24.0419092 L32.4887639,7.22235157 L36.5536607,7.22235157 L25.4675786,33.983702 L19.0890647,16.1536671 L12.4374155,34 L10.5181313,29.1238296 L12.4167337,24.0298913 L12.4167337,24.0298913 Z" id="W-2-Copy-5"></path>
        </svg>
      </InlineBlock>
    );
  }
}
