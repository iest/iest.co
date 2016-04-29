import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Lnk from 'components/lnk';

export default class Projects extends Component {
  render () {
    return (
      <div>
        <Helmet title="Projects" />
        <h1>Stuff I've built</h1>
        <div>

          <p>
            I'm a keen proponent of open-source, working on side projects and
             tools when I have spare time. Here's some of my better projects:
          </p>

          <ul>

            <li>
              <h3><Lnk>loggins</Lnk><em>2016</em></h3>
              <p>Pact Coffee's styleguide and component library.</p>
            </li>

            <li>
              <Lnk href="#">
                <h3>iamthefold <em>2015</em></h3>
                <p>An experiment to show how desiging for <em>The Fold</em> can be treacharous.</p>
              </Lnk>
            </li>

            <li>
              <Lnk href="#">
                <h3>sliderrr <em>2015</em></h3>
                <p>A collaborative Dribbble slideshow viewer, and an excuse to try out React with web sockets.</p>
              </Lnk>
            </li>

            <li>
              <Lnk href="#">
                <h3>buttery-scroll <em>2015</em></h3>
                <p>A super-simple smooth-scrolling microlib.</p>
              </Lnk>
            </li>

            <li>
              <Lnk href="#">
                <h3>themes4alfred <em>2014</em></h3>
                <p>Some themes for the awesome Mac app, Alfred.</p>
              </Lnk>
            </li>

            <li>
              <Lnk href="#">
                <h3>emRuler <em>2014</em></h3>
                <p>Really simple em-based ruler for your browser, in bookmarklet-form.</p>
              </Lnk>
            </li>

          </ul>
        </div>
      </div>
    );
  }
}
