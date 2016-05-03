import React, {PropTypes} from 'react';

import {rhythm} from 'utils/typography';

const Pad = ({val = 1, children}) =>
  <div
    style={{
      padding: rhythm(val),
    }}
  >
    {children}
  </div>;

Pad.propTypes = {
  children: PropTypes.node,
  val: PropTypes.number,
};

export default Pad;
