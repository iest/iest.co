import React, {PropTypes, Component} from 'react';
import Helmet from 'react-helmet';

import PostList from 'components/post-list';
import Wrapper from 'components/wrapper';
import Pad from 'components/pad';

export default class Index extends Component {
  static propTypes = {
    route: PropTypes.object,
  }
  render () {
    const {pages} = this.props.route;

    return (
      <div>
        <Helmet title="" />
        <Wrapper>
          <Pad>
            <PostList pages={pages} />
          </Pad>
        </Wrapper>
      </div>
    );
  }
}
