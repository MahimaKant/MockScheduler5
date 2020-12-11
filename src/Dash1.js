import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Dash1.css';
import './Pre.css';
import './sidenav.css';
import {Link} from 'react-router-dom';
import   UserName  from './UserName';


class Dash1 extends Component{
    
    render(){
        return( 
        <div >
            
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
            
             
             <div className="boxes">
               <h31 >Greetings Dear User</h31>
                   
                    Want to test yourself?<br></br>
                     Feel free to schedule an interview with your desired interviewers on your desired time,date,topics.<br></br>Get yourself marked and improve yourself for the future.
                    We will also update you regarding your upcoming interview and will get your progress reports simultaneously after each interview.
                   <br></br> Then why are waiting for! You are just one click away to set your schedule for interview.
                    Let's schedule!!
                
                

            </div>  
                
                    
     </div>
        )
    }
}
    
export default Dash1;