import React, {Component, PropTypes} from 'react'

import css from './hero.css'

export default class Hero extends Component {
  static propTypes = {
    children: PropTypes.any,
  }
  render() {
    return (
      <div className={css.root}>
        {this.props.children}
      </div>
    )
  }
}
