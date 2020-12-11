import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Dash1.css';
import './Pre.css';
import './sidenav.css';
import {Link} from 'react-router-dom';
import   UserName  from './UserName';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PrevInt from './PrevInt';
import PrevInt2 from './PrevInt2';


class LineUp extends Component{

  constructor(props){
    super(props);
   this.state={
     values:[],
   }
  }
    
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users' )//'https://github.com/SinghDigamber/react-local-storage/blob/master/src/components/form-data.component.js'
    .then(res => res.json())
    .then(json =>{
      this.setState({
        values: json,
      })
    });
    
  }





    render(){
        return( 
        <div >
            
            <div class="sidenav">
            
            <a href="#" class='bol'><Link class="lin" to='/dash'style={{color:'white'}} >Dashboard</Link></a>
            <a href="#" class='bol'><Link class="lin" to='/interviewer'style={{color:'white'}} >Schedule as Interviewer</Link></a>
            <a href="#" class='bol'><Link class="lin" to='/interviewee'style={{color:'white'}} >Schedule as Interviewee</Link></a>
            <a href="#" class='bol'><Link class="lin" to='/lineUp'style={{color:'white'}} >Lineups</Link></a>
            <a href="#" class='bol'><Link class="lin" to='/pre'style={{color:'white'}} >Previously Attempted</Link></a>
            </div>
        
            <div class="navbar">
                
                <b style={{marginBottom:'28px'}} class='hed'> Mock Interview Scheduler</b>
                <a className="user_name"><div class='u_s'>Hey! &nbsp;
        {JSON.parse(window.localStorage.getItem("user_ids"))} </div></a>
                <a  className="right"><div><Link class="lin" to='/logout'style={{color:'white'}} >LogOut</Link></div></a>
                

            </div>  
            
             
            <Container style={{marginLeft:'200px'}} >
   <Row>
     <Col>
    <div >
    <Accordion defaultActiveKey="0">
      <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} style={{align:"center"}} class ="hed">
              As Interviewee
        </Accordion.Toggle>
      </Card.Header>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Interview 1
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <ul>
          { this.state.values.slice(0,1).map(value =>(
            <li>
              <h25>Interview 1 details</h25><br />
              👨:{value.name}<br />
           <h28>email:</h28>{value.email}

           </li>
          ))}
          </ul>
          </Card.Body>
      </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Interview 2
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
          <ul>
          { this.state.values.slice(1,2).map(value =>(
            <li>
              <h25>Interview 1 details</h25><br />
              👨:{value.name}<br />
           <h28>email:</h28>{value.email}

           </li>
          ))}
          </ul>


            </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
     </div>
     </Col>
     <Col>
     <div>
    <Accordion defaultActiveKey="0">
      <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} >
              As Interviewer
        </Accordion.Toggle>
      </Card.Header>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Interview 1
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body><PrevInt2/></Card.Body>
      </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Interview 2
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body><PrevInt2/></Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
     </div>
     </Col>
 </Row>
</Container>
            
                
                    
     </div>
        )
    }
}
    
export default LineUp;