/* eslint no-param-reassign: 0 */
import React, {PropTypes} from 'react';
import {sortBy, get} from 'lodash';
import {Link} from 'react-router';
import moment from 'moment';

import {rhythm} from 'utils/typography';
import css from './post-list.css';

function pagesToYears(pages) {
  return sortBy(pages, page => get(page, 'data.date'))
    .reverse()
    .filter(page => get(page, 'file.ext') === 'md' && !/\/404/.test(page.path))
    .reduce((obj, page) => {
      const year = new Date(page.data.date).getFullYear();
      obj[year] = obj[year] || [];
      obj[year].push(page);
      return obj;
    }, {});
}

const PostList = ({pages}) =>
  <ul className={css.list}>
    {Object.keys(pagesToYears(pages)).sort().reverse().map(k =>
      <div
        className={css.year}
        style={{marginBottom: rhythm(1)}}
        key={k}
      >
        <h3>{k}</h3>
        {sortBy(pagesToYears(pages)[k], 'date').map(({path, data: {title, date}}, i) =>
          <li key={i} style={{marginBottom: rhythm(1/2)}}>
            <Link to={path}>
              {title}
              <time
                dateTime={date}
                style={{fontSize: rhythm(1/2)}}
              >
                {moment(date).format('D MMM')}
              </time>
            </Link>
          </li>
        )}
      </div>
    )}
  </ul>;

PostList.propTypes = {
  pages: PropTypes.array,
};

export default PostList;
