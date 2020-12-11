import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Dash.css';
import Hkj from './Hkj';


class Dash extends Component{
    constructor()
    {
        super();
        this.state = {
            name:"Popular Titles"
            
        }
    }
    namechange()
    {
        this.setState({
            name:"Popular Series"
        })
    }
    
    
    render(){
return( <div>
            <div>
            <nav className="navbar navbar-default bg-primary pos">
               <div className="container-fluid">
               <div className="navbar-header">
               <a className="navbar-brand text-white" href="#"><h4>Mock Interview Scheduler</h4></a>
               <ul className="nav navbar-nav d-inline">
               <h6 className="nav navbar-nav d-inline"><li className="nav-item"><a href="#" className="btn btn-primary text-light">Dashboard</a></li></h6>
               <h6 className="nav navbar-nav d-inline"><li className="nav-item"><a href="#" className="btn btn-primary text-light">Schedule</a></li></h6>
               <h6 className="nav navbar-nav d-inline"><li className="nav-item"><a href="#" className="btn btn-primary text-light">Lineups</a></li></h6>
               <h6 className="nav navbar-nav d-inline"><li className="nav-item"><a href="#" className="btn btn-primary text-light">Previously Attempted</a></li></h6>
               </ul>
               </div>
               
             <div className="dropdown navbar-nav ml-auto d-inline">
  <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" id="dropdownMenuButton" aria-haspopup="true">Profile
  <span className="caret"></span></button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li className="dropdown-item"><a href="#">Dashboard</a></li>
    <li className="dropdown-item"><a href="#">Progress</a></li>
    <li className="dropdown-item"><a href="#">Log-out</a></li>
  </ul>
</div>            
            </div>
               </nav>
               </div >
               <div className="main">
               <h3 className=" text-center ">Hello People</h3>
               <br/>
               <p>
                    Want to test yourself.Feel free to schedule an interview with your desired interviewws on your desired time,date,topics.Get yourself marked and improved youeself for future.
                    <br/><br/>
                    We will also update you regarding your upcoming interview and will get your progress reports simultaneously after each interview.
                    <br/><br/>
                    then why are waiting for! You are just one click away to set your schedule for interview.
                    Let's schedule!!
               </p>
                </div>

               <Hkj />
                 <footer className="bg-light pos">
                              <div className="d-inline">
                             
                              <span className="aab"><a href="#">Terms and Conditions</a></span>               
                              <span className="aab"><a href="#">Privacy Policy</a></span>
                              <span className="aab"><a href="#">Help</a></span>
                              <span className="aab"><a href="#">Manage Account</a></span>
                              </div>
                              <br /><br />
                              <div className="text-white">
                              Copyright <span>&copy;</span> 
                              2020 Mock Interview Scheduler.All rights Reserved.
                              <br/><br/>
                             
                 
               </div>
               </footer>
               </div>
        )
    }
}
    
export default Dash;