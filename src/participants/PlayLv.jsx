import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { Card, CardGroup, Form } from 'react-bootstrap';

function PlayLv(){
  return(
    <div>
      <blockquote class="blockquote text-center">
          <h1 class="mb=5" style={{textAlign: 'center', fontWeight: 'bold', color: 'black', marginTop:'30px', marginLeft: '0%'}}>Live Poll</h1>
          <footer>Welcome to MyEventOrg Live Poll. Please answer the question provided.</footer>
      </blockquote>
      <div className='container '>
        <div className="row d-flex justify-content-center">
        <CardGroup >
          <Card className='w-100'>
            <Card.Title className="mb-3">
              Question 1: Do you like using Apple or Windows product?
            </Card.Title>
            <Form>
              <Form.Check>
                <Form.Check.Input type='radio'></Form.Check.Input>
                <Form.Check.Label className="mb-2">{`Apple`}</Form.Check.Label>
              </Form.Check>
            </Form>
            <Form>
              <Form.Check>
                <Form.Check.Input type='radio'></Form.Check.Input>
                <Form.Check.Label >{`Windows`}</Form.Check.Label>
              </Form.Check>
            </Form>
          </Card>
        </CardGroup>
        </div>
        <div className="row d-flex justify-content-center">
          <Link to="/resultlivepoll">
          <Button variant="outline-primary" style={{marginTop:'10px', float:'right'}}>
              Submit
          </Button>
        </Link>
        </div>
      </div>
      
      
    </div>
  )
}

export default PlayLv;