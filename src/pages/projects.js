import React, {Component} from 'react';
import Markdown from 'react-remarkable';
import Helmet from 'react-helmet';

import Icn from 'components/icn/icn';
import Hero from 'components/hero/hero';
import t from 'components/type.css';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Helmet title="Projects"/>
        <Hero>
          <h1 className={t.h1}>Stuff I've built</h1>
        </Hero>
        <div className={t.article}>

          <p>
            I'm a keen proponent of open-source, working on side projects and tools when I have spare time. Here's some of my better projects:
          </p>

          <ul className={t.linkList}>

            <li>
              <a href="#">
                <h3>loggins <em>2016</em></h3>
                <p>Pact Coffee's styleguide and component library.</p>
              </a>
            </li>

            <li>
              <a href="#">
                <h3>iamthefold <em>2015</em></h3>
                <p>An experiment to show how desiging for <em>The Fold</em> can be treacharous.</p>
              </a>
            </li>

            <li>
              <a href="#">
                <h3>sliderrr <em>2015</em></h3>
                <p>A collaborative Dribbble slideshow viewer, and an excuse to try out React with web sockets.</p>
              </a>
            </li>

            <li>
              <a href="#">
                <h3>buttery-scroll <em>2015</em></h3>
                <p>A super-simple smooth-scrolling microlib.</p>
              </a>
            </li>

            <li>
              <a href="#">
                <h3>themes4alfred <em>2014</em></h3>
                <p>Some themes for the awesome Mac app, Alfred.</p>
              </a>
            </li>

            <li>
              <a href="#">
                <h3>emRuler <em>2014</em></h3>
                <p>Really simple em-based ruler for your browser, in bookmarklet-form.</p>
              </a>
            </li>

          </ul>
        </div>
      </div>
    );
  }
}
