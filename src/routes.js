import React, {Component} from 'react';
import {Route, IndexRoute} from 'react-router';

import Root from 'components/root/root';
import Projects from 'pages/projects';
import About from 'pages/about';
import Blog from 'pages/blog';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={About}/>
    <Route path="projects" component={Projects} />
    <Route path="blog" component={Blog} />
  </Route>
);
