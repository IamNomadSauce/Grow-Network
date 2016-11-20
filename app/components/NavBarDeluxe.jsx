var React = require('react');
var {Link, IndexLink} = require('react-router');
import { Button, Nav, Navbar, MenuItem, NavItem, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import {IndexLinkContainer} from 'react-router-bootstrap'

var NavBarDeluxe = React.createClass({

  render: function () {
    return (

      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">mGarsteck</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <IndexLinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </IndexLinkContainer>
            <IndexLinkContainer to="/strains">
              <NavItem eventKey={2}>Strains</NavItem>
            </IndexLinkContainer>
            <IndexLinkContainer to="/todo">
              <NavItem eventKey={3}>Todo</NavItem>
            </IndexLinkContainer>
          </Nav>
          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="text" placeholder="Search Strains"/>
            </FormGroup>
            {' '}
            <Button type="submit">Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});

module.exports = NavBarDeluxe;
