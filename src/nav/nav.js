import React, {Component} from 'react';
import {Link} from 'react-router';

import Icn from 'icn/icn';
import css from './nav.css';

export default class Nav extends Component {
  render() {
    return (
      <div className={css.root}>
        <Link className={css.logo} to="/">
          <Icn name="logo"/>
        </Link>
        <ul className={css.nav}>
          <li>
            <Link activeClassName={css.active} to="projects">
              <Icn name="projects"/>
              <span className={css.label}>Projects</span>
            </Link>
          </li>
          <li>
            <Link activeClassName={css.active} to="blog">
              <Icn name="blog"/>
              <span className={css.label}>Blog</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
