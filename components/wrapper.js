import React, {PropTypes} from 'react';

import {root} from './wrapper.css';

const Wrapper = ({children}) =>
  <div className={root}>
    {children}
  </div>;

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
