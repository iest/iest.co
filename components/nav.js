import React, {Component} from 'react';
import {Link} from 'react-router';
import {Block} from 'jsxstyle';

import {primary, bg, secondary} from 'utils/theme';
import Icn from 'components/icn';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <Block background={primary} color={bg} fontSize="2em">
          <Link to="/">
            <Icn style={{color: secondary}} name="logo" />
          </Link>
        </Block>
      </nav>
    );
  }
}
