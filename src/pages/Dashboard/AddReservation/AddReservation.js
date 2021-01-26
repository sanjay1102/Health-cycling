import React, { Component } from 'react'
import firebase from ".././../../config/Firebase"
import {InputGroup, FormControl, Button} from 'react-bootstrap'

class AddReservation extends Component {

    constructor(props){
        super(props)
        this.fs= firebase.database();
        this.state={
            loading : false,
            list : []
        };
        this.handleFormInputChange = this.handleFormInputChange.bind(this);
    }
    handleFormInputChange(event){
        const target = event.target
        const value = target.type === 'radio' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        })
    }
    componentDidMount(){
        this.searchUser();
    }
    searchUser(number){
        let set = this;
        

    }

    render() {
        return (
            <div>
                <h1>Reservation</h1>
                <div className="search">
                    <InputGroup className="mb-3">
                        <FormControl
                            type="search"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="Enter Phone Number"
                            name = "search"
                            onChange={this.handleFormInputChange}
                        />
                        <Button variant="info">Search</Button>
                    </InputGroup>
                </div>
                
            </div>
        )
    }
}

export default AddReservation
