import React, { Component }from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Story from './components/Story'
import Resume from './components/Resume'
import Contact from './components/Contact'



class App extends Component {
  render() {
    return (
      <Router>
          <Navbar fixed="top" expand="lg" className="navbar justify-content-end">
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
            <Nav.Item>
              <Nav.Link href="/" eventKey={1}>my story</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/resume" eventKey={2}>my resume</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact" eventKey={3}>contact me</Nav.Link>
            </Nav.Item>
          </Nav>
          </Navbar.Collapse>
          </Navbar>
        <Switch>
          <Route exact path="/resume" component={Resume}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/" component={Story}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
