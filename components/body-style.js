import {Component, Children, PropTypes} from 'react';
import withSideEffect from 'react-side-effect';

class BodyStyle extends Component {
  static propTypes = {
    style: PropTypes.object.isRequired,
    children: PropTypes.node,
  }
  render() {
    return Children.only(this.props.children);
  }
}

function reducePropsToState(propsList) {
  const style = {};
  propsList.forEach(props =>
    Object.assign(style, props.style)
  );
  return style;
}

function handleStateChangeOnClient(style) {
  Object.keys(style).forEach(key => {
    document.body.style[key] = style[key];
  });
}

export default withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient
)(BodyStyle);
