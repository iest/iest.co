import React, {Component} from 'react';
import {Route, IndexRedirect} from 'react-router';

import Root from 'root/root';
import About from 'about/about';

export default (
  <Route path="/" component={Root}>
    <IndexRedirect to="about"/>
    <Route path="about" component={About}/>
    <Route path="projects" component={About} />
    <Route path="blog" component={About} />
  </Route>
);
