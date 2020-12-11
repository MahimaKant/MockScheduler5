import React from "react";

export default class PrevInt extends React.Component {
  state = {
    loading: true,
  
  };

async componentDidMount() {
    const url = "https://run.mocky.io/v3/772efc6a-ddbd-45ae-83de-d845d4b2432f";
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
