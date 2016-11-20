var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var NavBarDeluxe = require('NavBarDeluxe');
var Weather = require('Weather');
var Cannabis = require('Cannabis');
var TodoApp = require('TodoApp');


require('./assets/styles/app.scss');
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';




ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='strains' component={Cannabis}></Route>
      <Route path='todo' component={TodoApp}></Route>
      <IndexRoute component={Weather}></IndexRoute>
    </Route>
  </Router>,
  document.getElementById('app')
);
