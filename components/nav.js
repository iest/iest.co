import React, {PropTypes, Component} from 'react';
import BodyClassName from 'react-body-classname';
import {Motion, spring} from 'react-motion';
import {Link} from 'react-router';

import Icn from 'components/icn';
import s from './nav.css';

const PHYSICS = {
  stiffness: 120,
  damping: 12,
};

const NavLink = ({to, children}) =>
  <Link
    to={to}
    className={s.item}
    activeClassName={s.itemActive}
  >
    {children}
  </Link>;
NavLink.propTypes = {
  to: PropTypes.string.isRequired,
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
      <BodyClassName className={s.body}>
        <nav className={s.nav}>
          <Link to="/" className={s.logo}>
            <Icn name="logo" />
          </Link>

          <button className={s.toggle} onClick={this.toggleOpen}>
            <Motion
              style={{
                r1: spring(open ? 225 : 0, PHYSICS),
                r2: spring(open ? 135 : 0, PHYSICS),
                y: spring(open ? 0.35 : 0, PHYSICS),
                o: spring(open ? 0 : 1, PHYSICS),
              }}
            >
              {({r1, r2, y, o}) =>
                <div className={s.toggleInner}>
                  <div
                    className={s.toggleBar}
                    style={{
                      transform: `translateY(${y}em) rotate(${r1}deg)`,
                    }}
                  />
                  <div
                    className={s.toggleBar}
                    style={{
                      transform: `rotate(${r2}deg) scale(${o})`,
                      opacity: o,
                    }}
                  />
                  <div
                    className={s.toggleBar}
                    style={{
                      transform: `translateY(${-y}em) rotate(${r2}deg)`,
                    }}
                  />
                </div>
              }
            </Motion>
          </button>

          <Motion
            style={{
              x: spring(open ? 0 : 100, PHYSICS),
            }}
          >
            {({x}) =>
              <div
                className={s.items}
                style={{
                  transform: `translateX(${x}%)`,
                }}
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
              </div>
            }
          </Motion>
        </nav>
      </BodyClassName>
    );
  }
}
