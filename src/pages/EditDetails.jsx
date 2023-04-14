import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class EditDetails extends Component {
    render() {
        return (
            <div>
                <h1>CS Bersamamu Event Summary</h1>
                <div className='try13'>
                <Form>
                    
        <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="CS Bersamamu"
              aria-describedby="inputGroupPrepend"
             
            />
            <Form.Control.Feedback type="invalid">
              Please enter a proper username.
            </Form.Control.Feedback>
          </InputGroup>
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Organization</Form.Label>
            <Form.Control type="text" 
            placeholder="CS Society" 
            />
            
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Details</Form.Label>
            <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Family Day CS"
              aria-describedby="inputGroupPrepend"
            
            />
            <Form.Control.Feedback type="invalid">
              Please enter your details.
            </Form.Control.Feedback>
          </InputGroup>
            
        </Form.Group>

        {/* Phone number form */}
        
        <div className='align-items-center'>
            <Row>
                <Col>
                    <Form.Group md="4" className="mb-3 " controlId="validationCustomUsername">
                    <Form.Label>Date</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                        type="text"
                        placeholder="15/04/2023"
                        aria-describedby="inputGroupPrepend"
                        
                        />
                        <Form.Control.Feedback type="invalid">
                        Please enter your date.
                        </Form.Control.Feedback>
                    </InputGroup>
                  
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3 col-sm-">
                        <Form.Label>Start Time</Form.Label>
                        <InputGroup hasValidation>
                        <Form.Control
                        type="text"
                        placeholder="00:58 AM"
                        aria-describedby="inputGroupPrepend"
                        
                        />
                        <Form.Control.Feedback type="invalid">
                        Please enter a proper time.
                        </Form.Control.Feedback>
                    </InputGroup>
                     
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>End Time</Form.Label>
                        <InputGroup hasValidation>
                        <Form.Control
                        type="text"
                        placeholder="01:58 AM"
                        aria-describedby="inputGroupPrepend"
                        
                        />
                        <Form.Control.Feedback type="invalid">
                        Please enter a proper time.
                        </Form.Control.Feedback>
                    </InputGroup>
                      
                    </Form.Group>
                </Col>
            </Row>
        </div>
        <Form.Group className="mb-3">
            <Form.Label>Venue</Form.Label>
            <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="DKG31"
              aria-describedby="inputGroupPrepend"
              
            />
            <Form.Control.Feedback type="invalid">
              Please enter a proper venue.
            </Form.Control.Feedback>
          </InputGroup>
           
        </Form.Group>

       
        <Form.Group className="mb-3">
            <Form.Label>Registration Link</Form.Label>
            <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="https://1234567sdfg"
              aria-describedby="inputGroupPrepend"
              
            />
            <Form.Control.Feedback type="invalid">
              Please enter a proper link.
            </Form.Control.Feedback>
          </InputGroup>
            
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Poster</Form.Label>
            <InputGroup hasValidation>
            <Form.Control
              type="file"
              placeholder="Poster1_2023.jpg"
              aria-describedby="inputGroupPrepend"
              
            />
            <Form.Control.Feedback type="invalid">
              Please enter a proper file.
            </Form.Control.Feedback>
          </InputGroup>
           
        </Form.Group>

        <p></p>
        <Link to="eventsummary"><Button variant="primary" type="submit">
            Update
        </Button></Link>
        </Form>
                </div>
            </div>
        );
    }
}

export default EditDetails;