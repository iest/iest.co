import React, {Component} from 'react';
import {Motion, spring} from 'react-motion';
import {Link} from 'react-router';
import {InlineBlock, Block, Flex, Col} from 'jsxstyle';

import {primary, bg, secondary} from 'utils/theme';
import Icn from 'components/icn';
import Btn from 'components/btn';

const immediate = {
  stiffness: 180,
  damping: 18,
};
const fast = {
  stiffness: 270,
  damping: 22,
};

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
            <Motion
              style={{
                r1: spring(open ? 225 : 0, immediate),
                r2: spring(open ? 135 : 0, immediate),
                y: spring(open ? 0.34 : 0, fast),
                o: spring(open ? 0 : 1, immediate),
              }}
            >
              {({r1, r2, y, o}) =>
                <Col
                  width="1em"
                  height="0.75em"
                  justifyContent="space-between"
                  position="relative"
                >
                  <Block
                    transform={`translateY(${y}em) rotate(${r1}deg)`}
                    height="0.0625em"
                    background={secondary}
                  />
                  <Block
                    opacity={o}
                    transform={`rotate(${r2}deg)`}
                    height="0.0625em"
                    background={secondary}
                  />
                  <Block
                    transform={`translateY(${-y}em) rotate(${r2}deg)`}
                    height="0.0625em"
                    background={secondary}
                  />
                </Col>
              }
            </Motion>
          </Btn>
        </Flex>
      </nav>
    );
  }
}
