import React, {PropTypes, Component} from 'react';

import icons from './icons';

export default class Icn extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
  }
  render() {
    const {name} = this.props;
    return (
      <span
        {...this.props}
        style={Object.assign({
          display: 'inline-block',
          verticalAlign: 'middle',
          width: '1.5em',
          height: '1.5em',
        }, this.props.style)}
        dangerouslySetInnerHTML={{__html: icons[name]}}
      />
    );
  }
}
