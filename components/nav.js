import React, {PropTypes, Component} from 'react';
import BodyClassName from 'react-body-classname';
import {Motion, spring} from 'react-motion';
import {Link} from 'react-router';

import Icn from 'components/icn';
import {bg} from 'css/globals.css';
import s from './nav.css';

const PHYSICS = {
  stiffness: 140,
  damping: 17,
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
          <div className={[s.inner, open && s.open].join(' ')}>
            <Link to="/" className={s.logo}>
              <Icn name="logo" />
            </Link>

            <button className={s.toggle} onClick={this.toggleOpen}>
              <Motion
                style={{
                  r1: spring(open ? 225 : 0, PHYSICS),
                  r2: spring(open ? 135 : 0, PHYSICS),
                  y: spring(open ? 0.48 : 0, PHYSICS),
                  o: spring(open ? 0 : 1, PHYSICS),
                }}
              >
                {({r1, r2, y, o}) =>
                  <div className={s.toggleInner}>
                    <div
                      style={{
                        height: '1px',
                        transform: `translateY(${y}em) rotate(${r1}deg)`,
                        background: open ? bg : 'white',
                      }}
                    />
                    <div
                      style={{
                        height: '1px',
                        transform: `rotate(${r2}deg) scale(${o})`,
                        opacity: o,
                        background: open ? bg : '#FC4482',
                      }}
                    />
                    <div
                      style={{
                        height: '1px',
                        transform: `translateY(${-y}em) rotate(${r2}deg)`,
                        background: open ? bg : '#6FEFB0',
                      }}
                    />
                  </div>
                }
              </Motion>
            </button>
          </div>
          <Motion
            style={{
              y: spring(open ? 0 : -20, PHYSICS),
              o: spring(open ? 1 : 0, PHYSICS),
              z: spring(open ? 1 : 0, PHYSICS),
            }}
          >
            {({y, o, z}) =>
              <div
                className={s.items}
                style={{
                  transform: `translate3d(0,${y}%, 0) scale(${z})`,
                  opacity: o,
                }}
              >
                <NavLink to="/">
                  <Icn name="blog" /> Home
                </NavLink>

                <NavLink to="/about/">
                  <Icn name="about" /> About
                </NavLink>

                <NavLink to="/work/">
                  <Icn name="projects" /> Work
                </NavLink>

                <NavLink to="/projects/">
                  <Icn name="experiment" /> Projects
                </NavLink>
              </div>
            }
          </Motion>
        </nav>
      </BodyClassName>
    );
  }
}
