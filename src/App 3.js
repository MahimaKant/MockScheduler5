import React, { Component } from 'react';

 import './App.css';
 import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import  jwt_decode from 'jwt-decode';
 

class App_3 extends Component{

constructor(props){
  super(props);
  this.state={
    items: [],
    isLoaded: false,
  }
}

/*componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users' )//'https://github.com/SinghDigamber/react-local-storage/blob/master/src/components/form-data.component.js'
  .then(res => res.json())
  .then(json =>{
    this.setState({
      isLoaded: true,
      items: json,
    })
  });
  
}*/
//JWT authentication react js tutorial 37
componentDidMount(){
  fetch('https://run.mocky.io/v3/d84cdea5-7ec3-4b97-9726-77752acd87ba')
.then((response)=>{
  response.json().then((result)=>{
  console.warn("result",result);
  localStorage.setItem('token',JSON.stringify({
    token:result.token,
    
  }))
  this.setState({
    items:jwt_decode(localStorage.getItem('token')),
  isLoaded: true})
  })
  
  }

  )};



//const token = JSON.parse(localStorage.getItem('test'));
  //const user = jwt_decode(token);
  //this.setState({items: user});

/*componentDidMount(){
  const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' 
  const user= jwt_decode(token)
  localStorage.setItem('pig', JSON.stringify(nextState));
    <ul>
        {items.map(item =>(
            <li style={{color:"black"}}>
               Name: {item.name} 
            </li>

        ))};


      </ul>
 }*/

componentWillUpdate(nextProps, nextState){
  localStorage.setItem('ind', JSON.stringify(nextState.items.name));
  localStorage.setItem('data', JSON.stringify(nextState.items));
}

render() {


  var { isLoaded, items } = this.state;

  if(!isLoaded){
    return <div>Loading......</div>
  }
  else{
  return(
    <div className='App' >
      Data has been Loaded
      {items.name}
      {items.sub}
      {(window.localStorage.getItem('pig'))}

   
      <div style={{height:'25em'}}>
      <DropdownButton
      isOpen='True'
  alignRight
  title="Dropdown right"
  id="dropdown-menu-align-right"
>
  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
</DropdownButton>
      </div>

    </div>  



  )};

}



}

export default App_3;
