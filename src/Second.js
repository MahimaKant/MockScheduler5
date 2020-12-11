import React, { Component } from 'react';
import './Second.css';
import { Input, Label, Form, FormGroup } from 'reactstrap';
import Button from 'react-bootstrap/Button';
//import GoogleButton from 'react-google-button';
//import {TelegramIcon} from 'react-share';



class Second extends Component {
    emptyItem = {
        email: '',
        first_name: '',
        last_name: '',
        gender: '',
        password: '',
        confirm_password: '',
        mobile: '',
        tag: '',
    }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            item: this.emptyItem 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const item = this.state.item;
        const { email,first_name,password,confirm_password } =this.state.item
        if(first_name,email,password,confirm_password===''){
            alert('Please Fill Mandatory Details');
        }
        else if (password !== confirm_password){
            alert('Passwords not matched');
        }
        else {
        await fetch('http://localhost:8080/api/signup', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                
            },
            Authorization: 'Bearer ${token}',
            body: JSON.stringify(item)
        })
        .then((response) => {
            if(response.status === 201){
                alert("You are successfully registered.");
            }
            else if(response.status === 400)
            {
                alert("Account already exist");
            }
            else {
                alert("SOMETHING WENT WRONG");
                
            }
        this.props.history.push('/');
    });
}
        }
  


    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({ item });
    }
    
    render() { 
    return ( <body>
    <div class='main_1'>

        <h1 class='head_1'>Let's Sign Up</h1>
      
        <Form onSubmit={this.handleSubmit}>
        
                    <FormGroup>
                        <Label for="first_name">First Name*</Label>
                        <Input type="text" name="first_name" id="first_name" placeholder='Enter First Name'
                            onChange={this.handleChange} autoComplete="name" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="last_name">Last Name</Label>
                        <Input type="text" name="last_name" id="last_name" placeholder='Enter Last Name'
                            onChange={this.handleChange} autoComplete="name" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="email">Email*</Label>
                        <Input type="text" name="email" id="email" placeholder='Enter your Email id'
                            onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="gender">Gender</Label>
                        <Input type="text" name="gender" id="gender" placeholder='Enter your gender'
                            onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="mobileno">Mobile Number</Label>
                        <Input type="text" name="mobileno" id="mobileno" placeholder='Enter your Mobile Number'
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password*</Label>
                        <Input type="password" name="password" id="password" placeholder='Enter your Password'
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="confirm_password">Confirm Password*</Label>
                        <Input type="password" name="confirm_password" id="confirm_password" placeholder='Enter Password again'
                            onChange={this.handleChange} />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for='skill'> Write skills in same format as given</Label>
                        <Input type="text" name="skill" id="skill" placeholder='C,C++,JAVA,PYTHON,RUBY' 
                            onChange={this.handleChange} />
                        
                       
                        

                    </FormGroup>
                    
         <FormGroup>      
        <div class='btn__1'>
        <Button variant="primary" type="submit" >
         Get Started
            </Button>  
         </div>
         
    
        </FormGroup>   
        </Form>







    </div>






</body>    );


} 
}
 export default Second;