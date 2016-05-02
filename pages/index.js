/* eslint no-param-reassign: 0 */

import React, {PropTypes, Component} from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import {sortBy, get} from 'lodash';
import moment from 'moment';

import Wrapper from 'components/wrapper';

export default class Index extends Component {
  static propTypes = {
    route: PropTypes.object,
  }
  render () {
    const {pages} = this.props.route;
    const years = sortBy(pages, page => get(page, 'data.date'))
      .reverse()
      .filter(page => get(page, 'file.ext') === 'md' && !/\/404/.test(page.path))
      .reduce((obj, page) => {
        const year = new Date(page.data.date).getFullYear();
        obj[year] = obj[year] || [];
        obj[year].push(page);
        return obj;
      }, {});
    return (
      <div>
        <Helmet title="" />
        <Wrapper>
          <ul>
            {Object.keys(years).sort().reverse().map(k =>
              <span key={k}>
                <h3>{k}</h3>
                {sortBy(years[k], 'date').map(({path, data: {title, date}}, i) =>
                  <li key={i}>
                    <Link to={path}>
                      {title} {moment(date).format('Do MMMM')}
                    </Link>
                  </li>
                )}
              </span>
            )}
          </ul>
        </Wrapper>
      </div>
    );
  }
}
