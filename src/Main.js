import React,{Component} from 'react';
import './Demo.css';
class Main extends Component{
    render()
    {
        return(
            <div>
            <div className="sidebar bg-dark">          
  <ul className="nav navbar-nav widd hell bg-dark d-inline-block pos">
    <li className="nav-item">
      <a className="nav-link text-light text-center" href="#">Notifications</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-light text-center" href="#">Suggestions</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-light text-center" href="#">Interview Rating</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-light text-center" href="#">Find Members</a>
    </li>
  </ul>
  </div>
           <div className="d-inline-block border border-dark widblock text-center">    
        <button className="btn btn-info widthbutton">LineUps</button>
        <br />
        <br />
        <button className="btn btn-info widthbutton">Previously Attempted</button>
        </div>
        </div>
        
        )
    }
}
export default Main;