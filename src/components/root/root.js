import React, { PropTypes, Component } from 'react'
import BodyClassname from 'react-body-classname';
import Helmet from 'react-helmet';

import css from './root.css'
import Nav from 'components/nav/nav'
import Footer from 'components/footer/footer'

export default class Root extends Component {
  static propTypes = {
    children: PropTypes.any,
  }
  render() {
    return (
      <BodyClassname className={css.body}>
        <div>
        <Helmet titleTemplate="%s | iest.co"/>
          <Nav/>
          {this.props.children}
          <Footer/>
        </div>
      </BodyClassname>
    )
  }
}
