import React, { Component } from 'react';
import './Scheduling.css';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker }  from 'react-dates';
import 'react-dates/initialize';
import TimePicker from 'react-time-picker';
import './Dash1.css';
import './Pre.css';
import './sidenav.css';
import {Link} from 'react-router-dom';
import  jwt_decode from 'jwt-decode';

                                                                                                                                                                                         


class Interviewer extends Component {

  state={
      start_time:'10:00',
      stop_time: '10:00',
      date:'',
  }
  emptyItem = {
      date: '',
      starttime: '',
      stoptime: '',
      tag: '',

      email: JSON.parse(window.localStorage.getItem("user_ids"))
  }


  constructor(props) {
      super(props);
      this.state = {
          isLoading: true,
          item: this.emptyItem ,
          values:[],
         
          
          
      }
      this.handleSubmit1 = this.handleSubmit1.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit1(event) {
      event.preventDefault();
      const item = this.state.item;
      const start_time = this.state.start_time
      const stop_time = this.state.stop_time
      const date = this.state.date
      item.starttime =start_time
      item.stoptime =stop_time
      item.date =date.format('YYYY-MM-DD')

      await fetch('http://localhost:8080/api/process/post/interviewer', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          
          body: JSON.stringify(item),
          
      })
      .then((response) => {
      if (response.status===200){
        alert("You are successfully registered.");
      }
      else if(response.status === 400)
          {
              alert("Account already exist");
          }
          else {
            alert("SOMETHING WENT WRONG");
            
        }
      })
      //this.props.history.push('/');
      
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
  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users', //'https://github.com/SinghDigamber/react-local-storage/blob/master/src/components/form-data.component.js'
      {
        method: 'GET',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'token': localStorage.getItem('test'),
          },

      })
      .then((response)=>{
        response.json().then((result)=>{
        console.warn("result",result);
        localStorage.setItem('test1',JSON.stringify({
          token:result.token,
          
        }))
        this.setState({
          values:jwt_decode(localStorage.getItem('test1')),
        })
        })
        
        }
      
        );
    
    }
  
  onChange = start_time => this.setState({ start_time})
  onChange1  = date => this.setState({ date })
  onChange2  = stop_time => this.setState({ stop_time })
render(){
  var { values } = this.state;
  return (
    
      <body>
          
            
            <div class="sidenav">
            
            <a href="#" class='bol'><Link class="lin" to='/dash'style={{color:'white'}} >Dashboard</Link></a>
            <a href="#" class='bol'><Link class="lin" to='/interviewer'style={{color:'white'}} >Schedule as Interviewer</Link></a>
            <a href="#" class='bol'><Link class="lin" to='/interviewee'style={{color:'white'}} >Schedule as Interviewee</Link></a>
            <a href="#" class='bol'><Link class="lin" to='/lineup'style={{color:'white'}} >Lineups</Link></a>
            <a href="#" class='bol'><Link class="lin" to='/pre'style={{color:'white'}} >Previously Attempted</Link></a>
            </div>
        
            <div class="navbar">
                
                <b style={{marginBottom:'28px'}} class='hed'> Mock Interview Scheduler</b>
                <a className="user_name"><div class='u_s'>Hey! &nbsp;
        {JSON.parse(window.localStorage.getItem("user_ids"))} </div></a>
                <a  className="right"><div><Link class="lin" to='/logout'style={{color:'white'}} >LogOut</Link></div></a>
                

            </div> 





    
    <form onSubmit={this.handleSubmit1} class='firs_t'>
               
                <div class = "boxed">
          
                   <h8>Schedule your Interview as an Interviewer</h8>
                   <br/>
                       <br/>

                       <h12 class="fontstyle" id="gaph1">CHOOSE DATE</h12>
                    
                    <div >
                    <SingleDatePicker
  date={this.state.date} // momentPropTypes.momentObj or null
  onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
  focused={this.state.focused} // PropTypes.bool
  onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
  id="your_unique_id" // PropTypes.string.isRequired,
  showClearDate={false}
  dateformat='DD-MM-YYYY'
  onChange={this.onChange1}
  value={this.state.date}
/>
        </div>
        <br/>

        <h13 class="fontstyle" id="gaph2">CHOOSE TIME RANGE</h13>
        <div >
            <h15> From </h15>
        <TimePicker name='time'
          onChange={this.onChange}
           value={this.state.start_time}
           amPmAriaLael
           maxDetail='minute'
        />
        <h16> TO </h16>
        <TimePicker name='time'
          onChange={this.onChange2}
           value={this.state.stop_time}
           amPmAriaLael
           maxDetail='minute'
           minTime={this.state.start_time}
        />

  </div>
       
  <br></br>
        <h14 class="fontstyle">WHAT ARE YOUR SKILLS</h14>
        <div class="gap2">
                <select name="tag" class="dd" onChange={this.handleChange}  >
                {values.map(value =>(    
                
                
                <option key={value.id} value={value.name}>{value.name}</option>
                       
                    
                    ))}
            </select>
        </div>
        <div class="butt">
        <section id="first">
        <button type="submit" class="btn btn-success btn-lg">SUBMIT</button>
        </section>
        
        </div>
        
        
                
                </div>
               
            </form>


            </body>

        );
  }
    
}

export default Interviewer;