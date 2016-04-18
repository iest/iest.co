import React, {PropTypes, Component} from 'react';
import Markdown from 'react-remarkable';
import Helmet from 'react-helmet';

import t from 'type.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Helmet title="About"/>
        <div className={t.article}>
          Hello
        </div>
      </div>
    );
  }
}
