import React, {PropTypes, Component} from 'react';
import Markdown from 'react-remarkable';

import t from 'type.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className={t.article}>
          Hello
        </div>
      </div>
    );
  }
}
