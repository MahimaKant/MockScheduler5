import React,{Component} from 'react';
//import ReactDom from 'react-dom';
import './Home.css';
import Button from 'react-bootstrap/Button';




class Home extends Component{
    render()
    {
        return  <div>
             <section id="home">
        <h1 class ="h-primary">WELCOME PEEPS!!!</h1>
      <p class="heading2">
      Do you want to test yourself? You are at a right place. This app will help you in scheduling your interview as per your convenience,on your desired time,date,topics and by desired interviewer!!!        This app will also update you regarding your upcoming interview and will get your progress reports simultaneously.....after each interview.
      </p>
      <section>
        <p class ="heading1">SO HURRY UP PICK A DATE, IT'S NEVER TOO LATE </p>
    </section>
       <div>
      <section class="services-container" id="f1">
               
            <h2 class="h-secondary center">NEW USER?</h2>
            
            <Button type="button" class="btn btn-primary btn-lg">SIGN UP</Button>
            
    </section>
    <section class="services-container">
            <div>   
           <h2 class="h-secondary center">EXISTING ONE!</h2>
           <Button type="button" class="btn btn-success btn-lg">LOG IN</Button>
           </div>
       </section>
       </div>
       <section>
        <p class="heading3">JUST GO IN THERE AND REMEMBER ....."YOU ARE FANTASTIC" </p>
    </section>
      
        </section>
        
      
        </div>
       
    }
}
export default Home;