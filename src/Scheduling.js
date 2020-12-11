import React, { Component } from 'react';
//import logo from './logo.svg';
import './Scheduling.css';
//import {Button,Dropdown} from 'react-bootstrap'


class Scheduling extends Component {
    emptyItem = {
        publicationDate: '',
        //time: '',
        tag: '',
        email: JSON.parse(window.localStorage.getItem("user_ids"))
    }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            item: this.emptyItem 
        }
        this.handleSubmit1 = this.handleSubmit1.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async handleSubmit1(event) {
        event.preventDefault();
        const item = this.state.item;
        await fetch('http://localhost:8080/api/process/post/interviewer', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        //this.props.history.push('/');
    }

    async handleSubmit2(event) {
        event.preventDefault();
        const item = this.state.item;
        await fetch('http://localhost:8080/api/process/post/interviewee', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        this.props.history.push('/');
    }    
    

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('sch', JSON.stringify(nextState));
      }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({ item });
    }
  render(){
  return (
    
      <body>
    
    <form onSubmit={this.handleSubmit1} class='firs_t'>
               
                <div class = "boxed">
          
                   <h8>Schedule your Interview as an Interviewer</h8>
                       
                       <h3 class="fontstyle" id="gaph1">CHOOSE DATE</h3>
                    
                    <div >
                <select name="publicationDate" class="dd" onChange={this.handleChange} >
                <option >Select Date</option>
                <option value="2020-07-01">1 JULY 2020</option>
                <option value="2020-07-02">2 JULY 2020</option>
                <option value="2020-07-03">3 JULY 2020</option>
                <option value="2020-07-04">4 JULY 2020</option>
            </select>
        </div>
        {/*<h3 class="fontstyle" id="gaph2">CHOOSE TIME</h3>
        <div class="gap1">
                <select name="time" class="dd" onChange={this.handleChange} >
                <option >Select Time</option>
                <option value="ROOM 1">12 PM</option>
                <option value="ROOM 2">6 PM</option>
                <option value="ROOM 3">9 PM</option>
                <option value="ROOM 4">10 AM</option>
            </select>
  </div>*/}
        <h3 class="fontstyle">WHAT ARE YOUR SKILLS</h3>
        <div class="gap2">
                <select name="tag" class="dd" onChange={this.handleChange}  >
                <option >Select Skill</option >
                <option value="ROOM 1">skill 1</option>
                <option value="ROOM 2">skill 2</option>
                <option value="ROOM 3">skill 3</option>
                <option value="ROOM 4">skill 4</option>
            </select>
        </div>
        <div class="butt">
        <section id="first">
        <button type="submit" class="btn btn-success btn-lg">SUBMIT</button>
        </section>
        
        </div>
        
        
                
                </div>
               
            </form>


            <form onSubmit={this.handleSubmit2} class='seco_nd'>
               
                <div class = "boxed">
                <h8>Schedule your Interview as an Interviewee</h8>
                       
                       <h3 class="fontstyle" id="gaph1">CHOOSE DATE</h3>
                    
                    <div >
                <select name="publicationDate" class="dd" onChange={this.handleChange} >
                <option >Select Date</option>
                <option value="2020-07-01">1 JULY 2020</option>
                <option value="2020-07-02">2 JULY 2020</option>
                <option value="2020-07-03">3 JULY 2020</option>
                <option value="2020-07-04">4 JULY 2020</option>
            </select>
        </div>
{/*}        <h3 class="fontstyle" id="gaph2">CHOOSE TIME</h3>
        <div class="gap1">
                <select name="time" class="dd" onChange={this.handleChange} >
                <option >Select Time</option>
                <option value="ROOM 1">12 PM</option>
                <option value="ROOM 2">6 PM</option>
                <option value="ROOM 3">9 PM</option>
                <option value="ROOM 4">10 AM</option>
            </select>
</div>*/}
        <h3 class="fontstyle">WHAT ARE YOUR SKILLS</h3>
        <div class="gap2">
                <select name="tag" class="dd" onChange={this.handleChange}  >
                <option >Select Skill</option >
                <option value="ROOM 1">skill 1</option>
                <option value="ROOM 2">skill 2</option>
                <option value="ROOM 3">skill 3</option>
                <option value="ROOM 4">skill 4</option>
            </select>
        </div>
        <div class="butt">
        <section id="first">
        <button type="submit" class="btn-primary ">SUBMIT</button>
        </section>
        
        
        </div>
        
        
                
                </div>
               
            </form>


            </body>
           

        );
  }
    
}

export default Scheduling;
