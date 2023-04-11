import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Lvquest(){
  return(
    <div>
      <Form>
        <Form.Group className="mb-3">
              <Form.Label>Question:</Form.Label>
              <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Insert your question"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your question.
              </Form.Control.Feedback>
            </InputGroup>
              <Form.Text className="text-muted">
              Please insert your question.
              </Form.Text>    
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Option 1:</Form.Label>
              <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Insert your question"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your question.
              </Form.Control.Feedback>
            </InputGroup>    
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Option 2:</Form.Label>
              <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Insert your question"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your question.
              </Form.Control.Feedback>
            </InputGroup>    
          </Form.Group>
          
          <Button variant="outline-primary " style={{marginTop: '10px', float:'right'}}>
              Add option
          </Button>
      </Form>
    </div>
  )
}

export default Lvquest;