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
          verticalAlign: '-0.5em',
          width: '1.65em',
          height: '1.65em',
          ...style,
        }}
        className={className}
        dangerouslySetInnerHTML={{__html: icons[name]}}
      />
    );
  }
}
