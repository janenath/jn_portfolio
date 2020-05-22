import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Nav, Navbar } from "react-bootstrap";
import { withRouter } from "react-router";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Story from './components/Story'
import Resume from './components/Resume'
import Contact from './components/Contact'


const Header = props => {
  const { location } = props;
    return (
      <Navbar fixed="top" expand="lg" className="navbar justify-content-end">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={location.pathname}>
            <Nav.Item>
              <Nav.Link href="janenath.com/">my story</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="janenath.com/resume">my resume</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="janenath.com/contact">contact me</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>  
      </Navbar>
    );
  }
  const HeaderWithRouter = withRouter(Header);

  function App() {
    return(
      <div className="App">
        <Router>
          <HeaderWithRouter />
            <Route path="janenath.com/resume" exact component={Resume}/>
            <Route path="janenath.com/contact" exact component={Contact}/>
            <Route path="janenath.com/" exact component={Story}/>
        </Router>
      </div>
    )
}

export default App;
