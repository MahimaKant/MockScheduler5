import React, { Component } from "react";
import {Button} from 'react-bootstrap';
import './forgot.css';
class forgot extends Component {
    render() {
        return (
            <form>
               <u><h3>Forgot Password?</h3></u>
                <div class = "boxed">


                       <div className="form-group">
                           <label>Username<input type="Username" className="form-control" placeholder="Enter Username" /></label>
                                                
                       </div>

                       <div className="form-group">
                            <label>Phoneno.<input type="Phoneno." className="form-control" placeholder="Enter Phoneno." /></label>
                   
                        </div>

                

                        <Button type="submit" bsStyle="primary">Submit</Button>
                       <br/>
                    <u><h4>Get a verification code</h4></u>
                
                     <br/>
                    <h5>A verification was just send to your phone number</h5>
                    <br/>
                     <u><h4>Enter the code</h4></u>
                     <div className="form-group">
                        <label>.<input type="code" className="form-control" placeholder="Enter code" /></label>
                      </div>
                     <Button type="Next" bsStyle="primary">Next</Button>
                </div>
            </form>
        );
    }
}
export default forgot;