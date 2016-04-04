import React, { PropTypes, Component } from 'react'
import BodyClassname from 'react-body-classname';

import css from './root.css'
import Nav from 'nav/nav'

export default class Root extends Component {
  static propTypes = {
    children: PropTypes.any,
  }
  render() {
    return (
      <BodyClassname className={css.body}>
        <div>
          <Nav/>
          {this.props.children}
        </div>
      </BodyClassname>
    )
  }
}
