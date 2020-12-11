import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
//import { Button } from "semantic-ui-react";
import './Pre.css';

class LogOut extends Component{
    state = {
        navigate: true
    };

    logout = () => {
        localStorage.clear("token");
        this.setState({ navigate: true });
    };

render(){
    const { navigate } = this.state;

    if (navigate){ localStorage.clear("token"); 
        return <Redirect to= "/" push={true} /> 
    }

    return <a  className = "right" onClick={this.logout}> LogOut</a>;

}
}

export default LogOut;