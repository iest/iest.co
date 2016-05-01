import React, {PropTypes, Component} from 'react';

import icons from './icons';

export default class Icn extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
  }
  render() {
    const {name, style, className} = this.props;
    return (
      <span
        style={{
          display: 'inline-block',
          verticalAlign: '-0.4em',
          width: '1.5em',
          height: '1.5em',
          ...style,
        }}
        className={className}
        dangerouslySetInnerHTML={{__html: icons[name]}}
      />
    );
  }
}
