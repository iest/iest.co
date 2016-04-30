import React, {PropTypes, Component} from 'react';
import {Motion, spring} from 'react-motion';
import {Link} from 'react-router';
import {InlineBlock, Block, Flex, Col} from 'jsxstyle';

import {primary, fg, bg, secondary, bgFaded} from 'utils/theme';
import z from 'utils/zindex';
import Icn from 'components/icn';
import Btn from 'components/btn';

const PHYSICS = {
  stiffness: 200,
  damping: 10,
};

const NavLink = ({to, children}) =>
  <Block
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
        // boxShadow: `inset -0.5em 0 0 ${bg}`,
        background: secondary,
        color: fg,
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
                r1: spring(open ? 225 : 0, PHYSICS),
                r2: spring(open ? 135 : 0, PHYSICS),
                y: spring(open ? 0.35 : 0, PHYSICS),
                o: spring(open ? 0 : 1, PHYSICS),
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
            x: spring(open ? 0 : 100, PHYSICS),
          }}
        >
          {({x}) =>
            <Col
              width="100%"
              maxWidth="15em"
              transformOrigin="right top"
              transform={`translateX(${x}%)`}
              position="absolute"
              right="-5em"
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
