import React, {PropTypes, Component} from 'react';

import icons from './icons';

export default class Icn extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
  }
  render() {
    const {name} = this.props;
    return (
      <span
        dangerouslySetInnerHTML={{__html: icons[name]}}
        {...this.props}
      />
    );
  }
}
