import React, {Component} from 'react';
import {Route, IndexRoute} from 'react-router';

import Root from 'root/root';
import About from 'pages/about';
import Projects from 'pages/projects';
import Blog from 'pages/blog';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={About}/>
    <Route path="projects" component={Projects} />
    <Route path="blog" component={Blog} />
  </Route>
);
