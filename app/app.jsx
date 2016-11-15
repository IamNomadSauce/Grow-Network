var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var Cannabis = require('Cannabis');
var Examples = require('Examples');
require('./assets/styles/global.scss');
require('./assets/styles/app.scss');
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';




ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='strains' component={Cannabis}></Route>
      <Route path='examples' component={Examples}></Route>
      <IndexRoute component={Weather}></IndexRoute>
    </Route>
  </Router>,
  document.getElementById('app')
);
