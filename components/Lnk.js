import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';

import {primary, secondary} from 'utils/theme';

export default class Lnk extends Component {
  static propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.any.isRequired,
  }
  render() {
    const {to, href, children} = this.props;
    const style = {
      color: secondary,
    };
    const child = <span style={{color: primary}}>{children}</span>;
    return to
      ? <Link style={style} to={to}>{child}</Link>
      : <a style={style} href={href}>{child}</a>;
  }
}
