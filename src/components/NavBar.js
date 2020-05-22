import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class NavBar extends Component {
    render () {
        return(
          <Navbar fixed="top" className="navbar justify-content-end">
            <Nav activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">my story</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">my resume</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">contact me</Nav.Link>
            </Nav.Item>
          </Nav>
          </Navbar>
        )
    }
} 

export default NavBar