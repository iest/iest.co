import React, {Component} from 'react';
import {Link} from 'react-router';

import Icn from 'icn/icn';
import css from './nav.css';

export default class Nav extends Component {
  render() {
    return (
      <div className={css.root}>
        <Icn name="logo" className={css.logo}/>
        <ul className={css.nav}>
          <li>
            <Link activeClassName={css.active} to="about">
              <Icn name="about"/>
            </Link>
          </li>
          <li>
            <Link activeClassName={css.active} to="projects">
              <Icn name="projects"/>
            </Link>
          </li>
          <li>
            <Link activeClassName={css.active} to="blog">
              <Icn name="blog"/>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
