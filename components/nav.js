import React, {Component} from 'react';
import {Link} from 'react-router';
import {InlineBlock, Flex} from 'jsxstyle';

import {primary, bg, secondary} from 'utils/theme';
import Icn from 'components/icn';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <Flex
          display="flex"
          width="100%"
          justifyContent="space-between"
        >
          <InlineBlock
            background={primary}
            color={bg}
            fontSize="2em"
          >
            <Link to="/">
              <Icn style={{color: secondary}} name="logo" />
            </Link>
          </InlineBlock>
          <InlineBlock
            background={primary}
            color={bg}
            fontSize="2em"
          >
            <Link to="/">
              <Icn style={{color: secondary}} name="logo" />
            </Link>
          </InlineBlock>
        </Flex>
      </nav>
    );
  }
}
