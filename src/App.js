import React, { Component } from 'react';

 import './App.css';
 

class App extends Component{

constructor(props){
  super(props);
  this.state={
    items: [],
    isLoaded: false,
  }
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users' )//'https://github.com/SinghDigamber/react-local-storage/blob/master/src/components/form-data.component.js'
  .then(res => res.json())
  .then(json =>{
    this.setState({
      isLoaded: true,
      items: json,
    })
  });

}
componentWillUpdate(nextProps, nextState) {
  localStorage.setItem('pig', JSON.stringify(nextState));
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


      <ul>
        {items.map(item =>(
            <li key={item.id} style={{color:"black"}}>
               Name: {item.name} | Email: {item.email}
            </li>

        ))};


      </ul>



    </div>  



  )};

}



}

export default App;
