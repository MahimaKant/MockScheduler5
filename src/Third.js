/*import React, { Component } from 'react';
import './Third.css';
import { Input, Label, Form, FormGroup } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import  jwt_decode from 'jwt-decode';



class Third extends Component {
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
    await fetch('https://localhost:8080/login', {
        credentials: 'include',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
.then((response) => {
  if(response.status === 200){
      alert("you are logged in");
      this.props.history.push('/pre');
      return response.json();     
  }
  else if(response.status === 400) {
    alert("wrong id or password");
    this.props.history.push('/');

  }
  else{
      alert("SOMETHING WENT WRONG");
      this.props.history.push('/');
  }


  response.json().then((result)=>{
    console.warn("result",result);
    localStorage.setItem('test',JSON.stringify({
      token:result.token,
      
    }))
    this.setState({
      items:jwt_decode(localStorage.getItem('test')),
    })
    })
    
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
componentWillUpdate(nextProps, nextState){
  localStorage.setItem('ind', JSON.stringify(nextState.items.name));
  localStorage.setItem('data', JSON.stringify(nextState.items));
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
          <Input type="text" name="password" id="password" 
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

export default Third;*/

import React, { Component } from 'react';
import './Third.css';
import { Input, Label, Form, FormGroup } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import  jwt_decode from 'jwt-decode';



class Third extends Component {
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
 // var token = response.headers.get('Authorization');
 // console.log(token);
  //console.log(response.headers.get('Authorization'));
  //console.log(response) ;  
// localStorage.setItem("token", JSON.stingify(response.headers.authorization));

//const { token } = response.data;
  //              localStorage.setItem('token', token);
    //            dispatch({
      //              type: STORE_USER,
        //            payload: response.data
          //      })
               // success()
         
//localStorage.setItem("token", response.token);
//console.log(response.payload);
  if(response.status === 200){
   // console.log(response.data);
    localStorage.setItem("authorization", response.data.token);
      alert("you are logged in");
      this.props.history.push('/dash');
      //return response.json();  
      //localStorage.setItem("token", response.token);
     // localStorage.setItem("token", JSON.stingify(response.headers.authorization));
      
  }
  else if(response.status === 400) {
    alert("wrong id or password");
    this.props.history.push('/');

  }
  else{
      alert("SOMETHING WENT WRONG");
      this.props.history.push('/');
  }

 /// response.json().then((result)=>{
  //  console.warn("result",result);
  //  localStorage.setItem('test',JSON.stringify({
   //   token:result.token,
      
   // });
  /*response.json().then((result)=>{
    console.warn("result",result);
    localStorage.setItem('test',JSON.stringify({
      token:result.token,
      
    }))
    this.setState({
      items:jwt_decode(localStorage.getItem('test')),
    })
    })*/
    
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
/*componentWillUpdate(nextProps, nextState){
  localStorage.setItem('ind', JSON.stringify(nextState.items.name));
  localStorage.setItem('data', JSON.stringify(nextState.items));
}*/

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

export default Third;