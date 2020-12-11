import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import    './Initial.css';


class Initial extends Component{
    render(){
        return(<body>
            <div>
                <h1>WELCOME PEEPS!!!</h1>
                <br>
                </br>
                <br>
                </br>
                <p class="heading2">
      Do you want to test yourself? You are at a right place. This app will help you in scheduling your interview as per your convenience,on your desired time,date,topics and by desired interviewer!!! This app will also update you regarding your upcoming interview and will get your progress reports simultaneously.....after each interview.
      </p>
    <br>
    </br>
      <p class ="heading1">SO HURRY UP PICK A DATE, IT'S NEVER TOO LATE </p>

       <div class="first">
      <h2>NEW USER?</h2>
      <h2>EXISTING ONE!</h2>
      


      </div >
      <div class='second'>
      <div class='btn1' >
      
      <Link class="lin" to='/second'style={{color:'white'}} >
      <Button variant="primary" class='btn1'>SIGN UP
      </Button></Link>
             
      </div>      
          <div class='btn2'>
          

          <Link class='lin' to='/third'style={{color:'white'}} >
          <Button variant="primary" class='btn'>LOG IN </Button>
          </Link>
          

      </div>    
      </div>
      <br></br>
      <br />
      <p class="heading3">JUST GO IN THERE AND REMEMBER ....."YOU ARE FANTASTIC" </p>

            </div>











        </body>



        );
    }
}
export default Initial;

