import React, {Component} from 'react';
import {Link} from 'react-router';
import {InlineBlock, Block, Flex, Col} from 'jsxstyle';

import {primary, bg, secondary} from 'utils/theme';
import Icn from 'components/icn';
import Btn from 'components/btn';

export default class Nav extends Component {
  state = {
    open: false,
  }
  toggleOpen = () => this.setState({open: !this.state.open})
  render() {
    const {open} = this.state;
    return (
      <nav>
        <Flex
          justifyContent="space-between"
          background={primary}
          padding="1em"
        >
          <InlineBlock
            color={bg}
            fontSize="2em"
          >
            <Link to="/">
              <Icn style={{color: secondary}} name="logo" />
            </Link>
          </InlineBlock>

          <Btn
            tagName="button"
            color={bg}
            fontSize="2em"
            padding="0em"
            props={{onClick: this.toggleOpen}}
          >
            <Col
              width="1em"
              height="0.75em"
              justifyContent="space-between"
            >
              <Block height="1px" background={secondary} />
              <Block height="1px" background={secondary} />
              <Block height="1px" background={secondary} />
            </Col>
          </Btn>
        </Flex>
        {open ? 'O' : 'I'}
      </nav>
    );
  }
}
