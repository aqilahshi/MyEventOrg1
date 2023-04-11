import React from "react";
import { ListGroup, Card, Modal, Form, InputGroup, CardGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import CardHeader from "react-bootstrap/esm/CardHeader";
import { Link } from "react-router-dom";

function CreateLD(){
  // const fileSelectedHandler = (event) => {
  //   console.log(event);
  // }
  return(
    <div>
        <blockquote class="blockquote text-center">
          <Link to="/activity"><Button variant="outline-dark" style={{marginTop:'0px', float:'left'}}>
            Back
          </Button></Link>
          <h1 class="mb=5" style={{textAlign: 'center', fontWeight: 'bold', color: 'black', marginTop:'30px', marginLeft: '0%'}}>Lucky Draw</h1>
          <footer>Create A Lucky Draw Session Here. You can only create this session once.</footer>
        </blockquote>
        <div className="mb-5" style={{display: 'flex', justifyContent: 'space-around'}}>
          <Form>
            <Form.Group>
              <Form.Label>Insert your 1st gift picture here.</Form.Label>
                <InputGroup hasValidation>
                <Form.Control
                  type="file"
                  placeholder="Insert picture"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please insert picture.
                </Form.Control.Feedback>
              </InputGroup>
                <Form.Text className="text-muted">
                Please insert picture.
                </Form.Text> 
            </Form.Group>
            <Form.Group>
              <Form.Label>Insert your 1st gift picture here.</Form.Label>
                <InputGroup hasValidation>
                <Form.Control
                  type="file"
                  placeholder="Insert picture"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please insert picture.
                </Form.Control.Feedback>
              </InputGroup>
                <Form.Text className="text-muted">
                Please insert picture.
                </Form.Text> 
            </Form.Group>
            <Form.Group>
              <Form.Label>Insert your 1st gift picture here.</Form.Label>
                <InputGroup hasValidation>
                <Form.Control
                  type="file"
                  placeholder="Insert picture"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please insert picture.
                </Form.Control.Feedback>
              </InputGroup>
                <Form.Text className="text-muted">
                Please insert picture.
                </Form.Text> 
            </Form.Group>
          </Form>
        </div>
        <div>
          <CardGroup>
            <Card className="card w-50 card mb-3">
              <CardHeader>1st Gift</CardHeader>
              <Card.Img variant="top" src="b9.jpg" style={{maxWidth : '540px'}}/>
            </Card>
            <Card className="card w-50 card mb-3">
              <CardHeader>2nd Gift</CardHeader>
              <Card.Img variant="top" src="b9.jpg" />
            </Card>
            <Card className="card w-50 card mb-3">
              <CardHeader>3rd Gift</CardHeader>
              <Card.Img variant="top" src="b9.jpg" />
            </Card >
          </CardGroup>
        </div>
    </div>
  )
}

export default CreateLD;