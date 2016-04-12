import React, {Component} from 'react'
import BodyClassname from 'react-body-classname';

import Icn from 'icn/icn';
import css from './footer.css'

export default class Footer extends Component {
  render() {
    return (
      <BodyClassname className={css.body}>
        <footer className={css.root}>
          <ul>
            <li>
              <a className={css.github} href="https://github.com/iest">
                <Icn name="github"/>
              </a>
            </li>
            <li>
              <a className={css.twitter} href="https://twitter.com/_iest">
                <Icn name="twitter"/>
              </a>
            </li>
            <li>
              <a className={css.instagram} href="https://www.instagram.com/iest/">
                <Icn name="instagram"/>
              </a>
              </li>
            <li>
              <a className={css.dribbble} href="https://dribbble.com/iest">
                <Icn name="dribbble"/>
              </a>
            </li>
          </ul>
          <span className={css.colophon}>
            &copy; Iestyn Williams {new Date().getFullYear()}
          </span>
        </footer>
      </BodyClassname>
    )
  }
}
