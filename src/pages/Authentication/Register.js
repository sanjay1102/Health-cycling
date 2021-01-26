import React, { Component, Fragment } from 'react'
import { Button, Form, Row, Container, Col } from 'react-bootstrap';

import '../../Assets/Styles.css'
import Reglogo from '../../Assets/Images/logo3.png'
import firebase from '../../config/Firebase'


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            register_email: '',
            register_password:'',
            register_error: '',
            register_process: false,
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

    submitRegisterForm(){
        let set = this
        if(set.state.register_email === ''){
            set.setState({ register_email_error: 'Email required'})
        } else if(set.state.register_password === ''){
            set.setState({ register_password_error: 'Password required'})
        } else {
            set.setState({
                register_email_error: '',
                register_password_error: '',
                register_process: true,
            })

            firebase.auth().createUserWithEmailAndPassword(set.state.register_email, set.state.register_password).then(function(user){
                console.log("logged in ", user)
            }).catch(function(error){
                set.setState({
                    register_error: error.message,
                    register_process: false,
                })
            })
        }

    }

    render() {
        return (
            <div>
                <Fragment>
                    <Container>
                        <Row>
                            <Col lg={6} md={6} sm={12} className="p-5 m-auto">
                                <div>
                                    <img className="RegImg" src={Reglogo} alt="" />
                                    <h1 className="RegLabel">Sign up to Health Cycling</h1>
                                </div>
                                <div className="REgBox">
                                    <Form className="RegForm">
                                        
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control 
                                                type="email" 
                                                placeholder="Enter email" 
                                                name="register_email"
                                                onChange={  this.handleFormInputChange }
                                                onKeyPress={() => this.setState({ register_email_error: '' })}
                                            />
                                            <small className="text-danger">{ this.state.register_email_error }</small>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control 
                                                type="password" 
                                                placeholder="Password" 
                                                name="register_password"
                                                onChange={  this.handleFormInputChange }
                                                onKeyPress={() => this.setState({ register_password_error: '' })}
                                            />
                                            <small className="text-danger">{ this.state.register_password_error }</small>
                                        </Form.Group>

                                        <Button 
                                            variant="secondary" 
                                            type="submit"
                                            disabled={this.state.register_process}
                                            onClick={() => this.submitRegisterForm() }>
                                                {this.state.register_process ? 'Processing' : 'Register'}
                                        </Button>

                                        <small className="text-danger">{ this.state.register_error }</small>
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

export default Register
