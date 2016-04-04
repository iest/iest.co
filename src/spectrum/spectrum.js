import React, { Component } from 'react'
import {interpolate} from 'd3-interpolate';

const ALPHA = 'rgb(42, 251, 255)';
const BETA = 'rgb(255, 29, 146)';

const interpolator = interpolate(ALPHA, BETA);

class Alpha extends Component {
  state = {
    value: null,
  }
  getValue = () => {
    const {top, height} = this.refs.self.getBoundingClientRect();
    const length = window.innerHeight;
    return (top + (height/2)) / length;
  }
  scrollListener = () => {
    this.setState({value: this.getValue()});
  }
  componentDidUpdate(prevProps, prevState) {
    const newValue = this.getValue();
    if (newValue !== prevState.value) {
      this.setState({value: newValue});
    }
  }
  componentDidMount() {
    this.scrollListener();
    window.addEventListener('scroll', this.scrollListener);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }
  render() {
    const {value} = this.state;
    const {children} = this.props;
    return (
      <span ref="self" style={{
        color: interpolator(value) + '!important',
      }}>
        {children}
      </span>
    );
  }
}
