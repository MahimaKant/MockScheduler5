import React from "react";

export default class PrevInt extends React.Component {
  state = {
    loading: true,
  
  };

async componentDidMount() {
    const url = "https://run.mocky.io/v3/2be858d2-7503-4362-b11c-a095d7940615";
    const response = await fetch(url);
    const data = await response.json();
     this.setState({ person: data, loading: false });
    
  }

  render() {
    if (this.state.loading) {
      return <div>interview details loading...</div>;
    }
    return (
      <div >
      <ul>
                  👨: {this.state.person.name}
                  <br></br>📖:Topics/Skills: {this.state.person.topics}
                  <br></br>🏘️:Date: {this.state.person.date}
                  <br></br>⏰: Time:{this.state.person.time}
                  <br></br>⏰: Duration:{this.state.person.duration}
                  <br></br>⭐: Rating/score:{this.state.person.rating}
      </ul>
      </div>
    );
  }
}
