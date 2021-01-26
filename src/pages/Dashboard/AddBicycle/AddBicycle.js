import React, { Component } from 'react'

import {Form, Button, Col, Row} from 'react-bootstrap'

import firebase from '../../../config/Firebase'


class AddBicycle extends Component {

    constructor(props){
        super(props)
        this.state = {
            bikeId: "",
            date: new Date(),
            type: "adult",
        };

        this.handleFormInputChange = this.handleFormInputChange.bind(this);
        this.handleDate = this.handleDate.bind(this);
    }
    handleDate = (date) => {
        this.setState({
          date: date,
        });
      };

    handleFormInputChange(event){
        const target = event.target
        const value = target.type === 'radio' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        })
    }

    addBicycleData(bikeId, date, type){
        firebase.database().ref('addbicycle/test').set({
            date: 'date',
            type: 'type' 
        }).then(function() {
            console.log("bike created..");
        })
        .catch(function(error){
            console.log("Error creating ref: ", error );
        });
    }

    render() {
        return (
            <div>
                <h1>Bicycle</h1>
                <Form className="bicycleForm">

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Date
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                            type="Date"
                            name="date"
                            onChange= {this.handleDate} />
                        </Col>
                    </Form.Group>
                    <fieldset>
                        <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Type
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                            type="radio"
                            label="kids"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            value="kids"
                            checked={this.state.kids}
                            onChange= {this.handleFormInputChange}
                            />
                            <Form.Check
                            type="radio"
                            label="Adults"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            value="adult"
                            checked={this.state.adult}
                            onChange= {this.handleFormInputChange}
                            />
                        </Col>
                        </Form.Group>
                    </fieldset>
                

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                        <Button 
                        onClick={() => this.addBicycleData() }
                        >Add Bicycle</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default AddBicycle
