import React, {PropTypes, Component} from 'react';

import icons from './icons';
import css from './icn.css';

export default class Icn extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
  }
  render() {
    const {name, className} = this.props;
    return (
      <span
        dangerouslySetInnerHTML={{__html: icons[name]}}
        {...this.props}
        className={[css.root, className].join(' ')}
      />
    );
  }
}
