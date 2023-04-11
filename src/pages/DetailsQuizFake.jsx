import {React, useState} from 'react';
import { ListGroup, Card, Modal, Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import FakeForm from './FakeForm';

function DetailsQuizFake(){
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
    
  const handleClose = () => setShow(false);

  return(
    <div>
    <blockquote class="blockquote text-center">
      <Link to="/createquiz"><Button variant="outline-dark" style={{marginTop:'0px', float:'left'}}>
        Back
      </Button></Link>
      <h1 class="mb=5" style={{textAlign: 'center', fontWeight: 'bold', color: 'black', marginTop:'30px'}}>Quiz Title</h1>
      <footer>Your Quizzes Details</footer>
      </blockquote>
      <div>
      <Button className="col-12 text-center" style={{marginBottom:'50px'}} onClick={handleShow}>
        +
      </Button>
    </div>
    <div>
      {/* Popup question */}
      <Modal show={show} onClick={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Create Quiz
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
                  <Form.Label>Quiz Question:</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      placeholder="Insert your quiz title"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your Quiz question.
                    </Form.Control.Feedback>
                  </InputGroup>
                  <Form.Text className="text-muted">
                  Please insert your Quiz question.
                  </Form.Text>    
                  </Form.Group>
              <Form.Group className="mb-3">
                  <Form.Label>Option 1:</Form.Label>
                  <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Insert your description"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your description.
                  </Form.Control.Feedback>
                </InputGroup>    
              </Form.Group>
              <Form.Group className="mb-3">
                  <Form.Label>Option 2:</Form.Label>
                  <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Insert your description"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your description.
                  </Form.Control.Feedback>
                </InputGroup>    
              </Form.Group>
              <Form.Group className="mb-3">
                  <Form.Label>Option 3:</Form.Label>
                  <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Insert your description"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your description.
                  </Form.Control.Feedback>
                </InputGroup>    
              </Form.Group>
              <Form.Group className="mb-3">
                  <Form.Label>Option 4:</Form.Label>
                  <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Insert your description"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your description.
                  </Form.Control.Feedback>
                </InputGroup>    
              </Form.Group>
              <Form.Group className="mb-3">
                  <Form.Label>Correct Answer:</Form.Label>
                  <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Insert your description"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your description.
                  </Form.Control.Feedback>
                </InputGroup>    
              </Form.Group>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-primary" style={{marginTop: '10px'}}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
    <div className='p-1 mx-auto' style={{display:'flex', justifyContent:'space-around'}}>
      <FakeForm /> 
      <FakeForm /> 
      <FakeForm /> 
      <FakeForm />
      <FakeForm /> 
    </div>
      
    </div>
  )
}

export default DetailsQuizFake;