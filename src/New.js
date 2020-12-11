import React,{Component} from 'react' ;
import './New.css' ;
import { Button } from 'react-bootstrap' ;
export default class AccountRecovery extends Component {

     render() {
    return (
      <form>
      <div className="inner-container">

        <div className="top">
          <h2><u>Account Recovery</u></h2></div>


        <div className="box">
        <h3><u>Create a Strong Password</u></h3>
        <div className="text">Create a new strong password that has been not used earlier</div>

          <div className="input-group">
            <label htmlFor="newpassword">New Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder=" Enter New Password"/>
          </div>

          <div className="text">Atleast 8 character long. </div>

          <div className="input-group">
            <label htmlFor="confirmpassword">Re-enter Password</label>
            <input type="password" name="phonenumber" className="login-input" placeholder="Enter Same Password"/>

          </div>

<Button color="primary" className="login-btn">Continue</Button>

        </div>
      </div>
      </form>
    );
  }
}
