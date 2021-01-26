import React, { Component } from 'react'

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOwner: false,
        };
    }

    //change owner function
    changeOwner(){
        this.setState({
            isOwner: !this.state.isOwner,
        })
    }

    render() {
        return (
            <div>
                Copyrights { this.state.isOwner ? 'Black Box' : 'iXeun' }
                {/* <br/><br/>
                <button
                    onClick={() => this.changeOwner()}>
                    Change Owner</button> */}
            </div>
        )
    }
}

export default Footer