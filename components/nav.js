import React, {PropTypes, Component} from 'react';
import {Motion, spring} from 'react-motion';
import {Link} from 'react-router';
import {InlineBlock, Block, Flex, Col} from 'jsxstyle';

import {primary, bg, secondary, bgFaded} from 'utils/theme';
import z from 'utils/zindex';
import Icn from 'components/icn';
import Btn from 'components/btn';

const bars = {
  stiffness: 200,
  damping: 21,
};
const items = {
  stiffness: 270,
  damping: 22,
};

const NavLink = ({to, y, children}) =>
  <Block
    transform={`translateY(${y}em)`}
    background={primary}
    color={bg}
    textDecoration="none"
    padding="1.25em 1.5em"
    borderBottom={`1px solid ${bgFaded}`}
    fontWeight="bold"
    textTransform="uppercase"
    component={Link}
    props={{
      to,
      activeStyle: {
        boxShadow: `inset -0.5em 0 0 ${bg}`,
      },
    }}
  >
    {children}
  </Block>;
NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  y: PropTypes.number,
  children: PropTypes.any,
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
          zIndex={z.navBar}
          position="relative"
          borderBottom={`1px solid ${bgFaded}`}
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
                r1: spring(open ? 225 : 0, bars),
                r2: spring(open ? 135 : 0, bars),
                y: spring(open ? 0.35 : 0, bars),
                o: spring(open ? 0 : 1, bars),
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
                    height="1px"
                    background={secondary}
                  />
                  <Block
                    opacity={o}
                    transform={`rotate(${r2}deg) scale(${o})`}
                    height="1px"
                    background={secondary}
                  />
                  <Block
                    transform={`translateY(${-y}em) rotate(${r2}deg)`}
                    height="1px"
                    background={secondary}
                  />
                </Col>
              }
            </Motion>
          </Btn>
        </Flex>
        <Motion
          style={{
            o: spring(open ? 1 : 0, bars),
            s: spring(open ? 1 : 0.25, bars),
            y: spring(open ? 0 : -100, bars),
          }}
        >
          {({y, s, o}) =>
            <Col
              width="100%"
              maxWidth="10em"
              transformOrigin="right top"
              opacity={o}
              transform={`translateY(${y}%) scale(${s})`}
              position="absolute"
              right={0}
              zIndex={z.navItems}
            >
              <NavLink to="/">
                <Icn name="blog" /> Home
              </NavLink>

              <NavLink to="/projects/">
                <Icn name="projects" /> Projects
              </NavLink>

              <NavLink to="/about/">
                <Icn name="about" /> About
              </NavLink>
            </Col>
          }
        </Motion>
      </nav>
    );
  }
}
