import React, {PropTypes, Component} from 'react';
import {Motion, StaggeredMotion, spring} from 'react-motion';
import {Link} from 'react-router';
import {InlineBlock, Block, Flex, Col} from 'jsxstyle';

import {primary, bg, secondary, bgFaded} from 'utils/theme';
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

const NavLink = ({to, y, children}) =>
  <Block
    transform={`translateY(${y}em)`}
    position="absolute"
    top={0}
    left={0}
    width="100%"
    background={primary}
    color={bg}
    textDecoration="none"
    padding="1.25em 1.5em"
    borderTop={`1px solid ${bgFaded}`}
    fontWeight="bold"
    textTransform="uppercase"
  >
    <Link
      to={to}
      style={{textDecoration: 'none'}}
      activeStyle={{boxShadow: `inset 0.5em 0 0 ${bg}`}}
    >
      {children}
    </Link>
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
                y: spring(open ? 0.35 : 0, fast),
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
                    height="1px"
                    background={secondary}
                  />
                  <Block
                    opacity={o}
                    transform={`rotate(${r2}deg)`}
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
        <StaggeredMotion
          defaultStyles={[{y: 0}, {y: 0}, {y: 0}]}
          styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) =>
            i === 0
              ? {y: spring(open ? 0 : -4.5 * i+1)}
              : {y: spring(open ? 0 : prevInterpolatedStyles[i - 1].y)}
          )}
        >
          {styles =>
            <Col width="100%" position="absolute">
              <NavLink to="/" y={styles[0].y}>
                <Icn name="blog" /> Home
              </NavLink>

              <NavLink to="/projects/" y={styles[1].y}>
                <Icn name="projects" /> Projects
              </NavLink>

              <NavLink to="/about/" y={styles[2].y}>
                <Icn name="about" /> About
              </NavLink>
            </Col>
          }
        </StaggeredMotion>
      </nav>
    );
  }
}
