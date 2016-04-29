import React, {Component} from 'react';
import {Block} from 'jsxstyle';

import {primary, bg} from 'utils/theme';
import Icn from 'components/icn';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Block background={primary} color={bg}>
          <Icn name="instagram" />
        </Block>
      </footer>
    );
  }
}
