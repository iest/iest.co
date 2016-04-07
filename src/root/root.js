import React, { PropTypes, Component } from 'react'
import BodyClassname from 'react-body-classname';

import css from './root.css'
import Nav from 'nav/nav'
import Footer from 'footer/footer'

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
          <Footer/>
        </div>
      </BodyClassname>
    )
  }
}
