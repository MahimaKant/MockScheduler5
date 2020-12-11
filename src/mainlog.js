import React, { Component } from 'react';
import './mainlog.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


class mainlog extends Component {
  render() {
    return (
      <div class="main">
      <Form className="Srg">
        <h2> LOGIN </h2>
        <Form.Group controlId="formBasicEmail"> <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicforgotPassword">
    <Form.Label>Hey...forgot Password?</Form.Label>
  </Form.Group>

  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
      </Form>
      </div>
    );
  }
}

export default mainlog;