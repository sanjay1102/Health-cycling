import React, { Component } from 'react'
import '../Assets/Styles.css'
import { Container, Navbar, NavDropdown, Form,Button, Nav, FormControl } from 'react-bootstrap';
import firebase from '../config/Firebase'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Header extends Component {

    signOut(){
        firebase.auth().signOut().then(function(){
          console.log("logged out")
          window.location.reload()
        })
      }

    render() {
        return (
            <Router>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand as={Link} to="/">Health Cycling</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-danger">Search</Button>
                        </Form>
                        <div>
                            <NavDropdown title="Profile" id="basic-nav-dropdown">
                                <NavDropdown.Item>My Profile</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => this.signOut() }>SignOut</NavDropdown.Item>
                            </NavDropdown>
                        
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </Router>
        )
    }
}

export default Header