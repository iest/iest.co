import React, {Component} from 'react'
import BodyClassname from 'react-body-classname';

import Icn from 'icn/icn';
import css from './footer.css'

export default class Footer extends Component {
  render() {
    return (
      <BodyClassname className={css.footer}>
        <div className={css.root}>
          <ul>
            <li>
              <a href="https://github.com/iest">
                <Icn name="github"/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/_iest">
                <Icn name="twitter"/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/iest/">
                <Icn name="instagram"/>
              </a>
              </li>
            <li>
              <a href="https://dribbble.com/iest">
                <Icn name="dribbble"/>
              </a>
            </li>
          </ul>
        </div>
      </BodyClassname>
    )
  }
}
