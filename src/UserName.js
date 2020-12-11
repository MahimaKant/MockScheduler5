import React from "react";

export default class UserName extends React.Component {
  state = {
    loading: true,
  
  };


  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
     this.setState({ person: data.results[0], loading: false });
    
  }

  render() {
    if (this.state.loading) {
      return <div>UserName</div>;
    }
    return (
      <div>
       <div>{this.state.person.login.username}</div>
        
      </div>
    );
  }
} 