import React from 'react';
import './Pre.css';
//import './Verticaltab.css';
import './sidenav.css';
import './dropdown.css';
import {Link} from 'react-router-dom';
import   UserName  from './UserName';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
//import './accordion.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PrevInt from './PrevInt';
import PrevInt2 from './PrevInt2';



function Pre() {
  return (
    <div >
            
            <div class="sidenav">
            
            <a href="#" class='bol'><Link class="lin" to='/dash'style={{color:'white'}} >Dashboard</Link></a>
            <a href="#" class='bol'><Link class="lin" to='/interviewer'style={{color:'white'}} >Schedule as Interviewer</Link></a>
            <a href="#" class='bol'><Link class="lin" to='/interviewee'style={{color:'white'}} >Schedule as Interviewee</Link></a>
            <a href="#" class='bol'><Link class="lin" to='/lineUp'style={{color:'white'}} >Lineups</Link></a>
            <a href="#" class='bol'><Link class="lin" to='/pre'style={{color:'white'}} >Previously Attempted</Link></a>
            </div>
        
            {/*<div class="navbar">
                
                <b style={{marginBottom:'28px'}} class='hed'> Mock Interview Scheduler</b>
                <a className="user_name"><div class='u_s'>Hey! &nbsp;
                      {JSON.parse(window.localStorage.getItem("user_ids"))} 
                    </div>
                </a>
                

               <a> <Dropdown class="dropdown .dropbtn">
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  More
                </Dropdown.Toggle>

                <Dropdown.Menu onClick eventKey ="0">
                  <Dropdown.Item eventKey ="1"><Link to='/logout'style={{color:'white'}} >LogOut</Link></Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </a>
  </div>  */}
         <div class="navbar">
                
                <b style={{marginBottom:'28px'}} class='hed'> Mock Interview Scheduler</b>
                <a className="user_name"><div class='u_s'>Hey! &nbsp;
                 {JSON.parse(window.localStorage.getItem("user_ids"))} </div></a>
                <a  className="right"><div><Link class="lin" to='/logout'style={{color:'white'}} >LogOut</Link></div></a>
          </div>  
            

 <Container>
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
          <PrevInt/>
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
          <Card.Body><PrevInt/></Card.Body>
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
  );
}

export default Pre;
