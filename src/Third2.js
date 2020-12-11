import React, { Component } from 'react';
import './Third.css';
import { Input, Label, Form, FormGroup } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import  jwt_decode from 'jwt-decode';



class Third2 extends Component {
  emptyItem = {
    email: '',
    password: ''
    
}

constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
        items:[],
        item: this.emptyItem 
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}

async handleSubmit(event) {
    event.preventDefault();
    const item = this.state.item;
    localStorage.setItem('user_ids',JSON.stringify(item.email))
    await fetch('http://localhost:8080/login', {
        credentials: "include",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          //  'Authorization' : 'token'
        },
        body: JSON.stringify(item)
        
    })
    .then((response) => {
        if(response.status === 200){
            var token = response.headers['x-access-token'] || '';
            localStorage.setItem("authorization", response.headers.token);
               alert("you are logged in");
               this.props.history.push('/dash');
               
               
           }
           else if(response.status === 400) {
             alert("wrong id or password");
             this.props.history.push('/');
         
           }
           else{
               alert("SOMETHING WENT WRONG");
               this.props.history.push('/');
           }
             
    }
  
    )
  };


handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({ item });
}
render() {
    
    return (
      
      <div class="main1">
      <Form className="Srg" onSubmit={this.handleSubmit}>
        <h18> LOGIN </h18>
        <br/>
          <FormGroup>
            
          <br/>
         <Label for="email">Email adress</Label><br/>
          <Input type="text" name="email" id="email" 
            onChange={this.handleChange}  />
            </FormGroup>
            <FormGroup>
           <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" 
          onChange={this.handleChange}  />
       </FormGroup><br/>
       <div class='btn_submit'>
  <Button variant="primary" type="submit">
  
    Submit
  
  </Button>
  </div>
      </Form>

      </div>
      

    );
  }
}

export default Third2;