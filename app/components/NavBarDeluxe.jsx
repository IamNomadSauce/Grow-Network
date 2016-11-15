var React = require('react');
var {Link, IndexLink} = require('react-router');
import { Button, Nav, Navbar, MenuItem, NavItem } from 'react-bootstrap';
import {IndexLinkContainer} from 'react-router-bootstrap'
import {AppBar, Tabs, Tab} from 'material-ui';
import mui from 'material-ui';

var NavBarDeluxe = React.createClass({
  render: function () {
    return (
      // - Bootsrap working great :)
      <Navbar>
        <Nav bsStyle="tabs">
          <IndexLinkContainer to="/">
            <NavItem eventKey={1}>Home</NavItem>
          </IndexLinkContainer>
          <IndexLinkContainer to="/strains">
            <NavItem eventKey={2}>Strains</NavItem>
          </IndexLinkContainer>
          <IndexLinkContainer to="/examples">
            <NavItem eventKey={3}>About</NavItem>
          </IndexLinkContainer>
        </Nav>
      </Navbar>
    );
  }
});

module.exports = NavBarDeluxe;
