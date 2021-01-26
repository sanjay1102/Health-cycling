import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Reglogo from '../../Assets/Images/logo3.png';
import '../../Assets/Styles.css';
import firebase from '../../config/Firebase';


//import { Link, Route, Router, Switch } from 'react-router-dom';
//import Register from './Register';
const dotenv = require('dotenv')

class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
        };

        this.handleFormInputChange = this.handleFormInputChange.bind(this);
    }

    handleFormInputChange(event){
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        })
    }

    //form submission function
    submitForm(){
        let set = this
        //set.setState({ toggleView: true, })
        firebase.auth().signInWithEmailAndPassword(set.state.email, set.state.password).then(function(user){
            console.log("user ", user)
            console.log("success")
        }).catch(function(error){
            console.log("error ", error)
            set.setState({ error: error.message, })
        })
    }



    render() {
        return (
                <div>
                    <Fragment>
                        <Container>
                            <Row>
                                <Col lg={6} md={6} sm={12} className="p-5 m-auto" >
                                    <div>
                                        <img className="RegImg" src={Reglogo} alt="" />
                                        <h1 className="RegLabel">Sign In to Health Cycling</h1>
                                        <b>{ console.log(dotenv.config) }</b>
                                    </div>
                                    <div className="REgBox">
                                        <Form className="RegForm">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control 
                                                    type="email" 
                                                    placeholder="Enter email"
                                                    name="email"
                                                    onChange={  this.handleFormInputChange }
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control 
                                                    type="password" 
                                                    placeholder="Enter password" 
                                                    name="password"
                                                    onChange={  this.handleFormInputChange }
                                                />
                                            </Form.Group>

                                            <Button 
                                                onClick={() => this.submitForm() }
                                                variant="secondary">Login</Button>

                                            <small className="text-danger">{ this.state.error }</small>
                                        </Form>
                                    </div>
                                    
                                   
                                </Col>

                            </Row>

                        </Container>
                    </Fragment>
                    
                </div>
        )
    }
}

export default Login