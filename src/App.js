import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './App.css'; //import style sheet
import './Assets/Styles.css';
import Header from './common/Header';
import firebase from './config/Firebase';
//import Footer from './common/Footer'
//authentication pages
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import AddBicycle from './pages/Dashboard/AddBicycle/AddBicycle';
import AddReservation from './pages/Dashboard/AddReservation/AddReservation';
import ContactUs from './pages/Dashboard/ContactUs/ContactUs';
//import Register from './pages/Authentication/Register'
//dashboard pages
import Home from './pages/Dashboard/Index';
import Tracking from './pages/Dashboard/Tracking/Tracking';


class App extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isAuth: false,
      isAdmin: false,
    };
  }

  componentDidMount(){
    let set = this
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        set.setState({
          isAuth: true,
          loading: false,
        })
      } else {
        set.setState({
          isAuth: false,
          loading: false,
        })
      }
    })
  }

  


  render() {
    if(this.state.loading){
      return(<p>Loadin,......</p>)
    } else {
      if(this.state.isAuth){
        return(
          <>
            <Router>
              <div>
                <Header/>
                <nav>
                  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                          
                                <Nav.Item>
                                    <Nav.Link as={Link} to="/AddReservation" eventKey="first">Add Reservation</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to="/AddBicycle" eventKey="second">Add Bicycle</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to="/Tracking" eventKey="third">Tracking</Nav.Link>
                                </Nav.Item>
                                
                            </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                <Tab.Pane eventKey="first">
                                  <AddReservation/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  <AddBicycle/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                  <Tracking/>
                                </Tab.Pane>
                                
                              </Tab.Content>
                            </Col>
                        </Row>
                  </Tab.Container>
                </nav>
              </div>
  
            </Router>
          </>
        )
      } else {
        return(
          <>
            <Container>
              <Login/>
            </Container>
          </>
        )
      }
    }
  }
}

export default App;