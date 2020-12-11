import React, { Component } from 'react';
import './Second.css';
import { Input, Label, Form, FormGroup } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import GoogleButton from 'react-google-button';
import {TelegramIcon} from 'react-share';


class Second1 extends Component {




 constructor(props){
     super(props);
     this.initialState ={
        email: '',
        first_name: '',
        last_name: '',
        gender: '',
        password: '',
        mobileno: '',
        response:{}
     }
     this.state = this.initialState;
     this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  }
  onFormSubmit(data) {
    const apiUrl = 'http://localhost/dev/tcxapp/reactapi/createProduct';

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      myHeaders
    };

    fetch(apiUrl, options)

    
    
  }


  render() { 
    return ( <body>
    <div class='main'>

        <h1>Let's Sign Up</h1>
        <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="first_name">First Name</Label>
                        <Input type="text" name="first_name" id="first_name" 
                            onChange={this.handleChange} value={this.state.name} autoComplete="name" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="last_name">Last Name</Label>
                        <Input type="text" name="last_name" id="last_name" 
                            onChange={this.handleChange} value={this.state.name} autoComplete="name" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" name="email" id="email" 
                            onChange={this.handleChange} value={this.state.name} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="gender">Gender</Label>
                        <Input type="text" name="gender" id="gender" 
                            onChange={this.handleChange} value={this.state.name} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="mobileno">Mobile Number</Label>
                        <Input type="text" name="mobileno" id="mobileno" 
                            onChange={this.handleChange} value={this.state.name} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="text" name="password" id="password" 
                            onChange={this.handleChange} value={this.state.name}/>
                    </FormGroup>
                    
                  
        <div class='btn1'>
        <Button variant="primary" type="submit" >
            
         Get Started!
         
         </Button>  
         </div>
         
     <h2>OR</h2>
          <div class="sbtn">
           <GoogleButton
           type="dark" // can be light or dark
           href='www.google.com/'
           target='blank'
               onClick={() => { console.log('Google button clicked') }}
           />
         <br>
        </br>
        <section class="telegbtn">
        <Button width='45' block target="blank" href="https://web.telegram.im/#/login?p=" >
        <TelegramIcon size={40} />  Sign in with Telegram
        </Button>
        </section>
        </div>
        </Form>







    </div>






</body>    )
  }
}

export default Second1;