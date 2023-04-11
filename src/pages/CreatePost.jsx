import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Row, Col} from 'react-bootstrap';

function CreatePost() {
  return (
    <div className='createpost'>
        <h1>Create Product Post</h1><br></br>
        <Form>
        <Form.Group className="mb-3">
            <Form.Label>Product Title</Form.Label>
            <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Insert your product name"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a product name.
            </Form.Control.Feedback>
          </InputGroup>
            <Form.Text className="text-muted">
            Please insert a product name.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Organization</Form.Label>
            <Form.Control type="email" placeholder="Enter organization" />
            <Form.Text className="text-muted">
            Please insert a proper organization.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Details</Form.Label>
            <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Insert details"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter your details.
            </Form.Control.Feedback>
          </InputGroup>
            <Form.Text className="text-muted">
            Please your details.
            </Form.Text>
        </Form.Group>

        {/* Phone number form */}
        
        <div className='align-items-center'>
            <Row>
                <Col>
                    <Form.Group md="4" className="mb-3 " controlId="validationCustomUsername">
                    <Form.Label>Date</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                        type="date"
                        placeholder="Insert date"
                        aria-describedby="inputGroupPrepend"
                        required
                        />
                        <Form.Control.Feedback type="invalid">
                        Please enter your date.
                        </Form.Control.Feedback>
                    </InputGroup>
                    <Form.Text className="text-muted">
                        Please enter your date.
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3 col-sm-">
                        <Form.Label>Start Time</Form.Label>
                        <InputGroup hasValidation>
                        <Form.Control
                        type="time"
                        placeholder="Insert your start time"
                        aria-describedby="inputGroupPrepend"
                        required
                        />
                        <Form.Control.Feedback type="invalid">
                        Please enter a proper time.
                        </Form.Control.Feedback>
                    </InputGroup>
                        <Form.Text className="text-muted">
                        Please insert a proper time.
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>End Time</Form.Label>
                        <InputGroup hasValidation>
                        <Form.Control
                        type="time"
                        placeholder="Insert your end time"
                        aria-describedby="inputGroupPrepend"
                        required
                        />
                        <Form.Control.Feedback type="invalid">
                        Please enter a proper time.
                        </Form.Control.Feedback>
                    </InputGroup>
                        <Form.Text className="text-muted">
                        Please insert a proper time.
                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>
        </div>
        <Form.Group className="mb-3">
            <Form.Label>Venue</Form.Label>
            <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Insert your venue"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a proper venue.
            </Form.Control.Feedback>
          </InputGroup>
            <Form.Text className="text-muted">
            Please insert a proper venue.
            </Form.Text>
        </Form.Group>

        {/* Select Year of Study */}
        {/* <Form.Group className="mb-3">
            <Form.Label>Venue</Form.Label>
            <Form.Select aria-label="Default select example">
                <option>--Select Year of Study--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </Form.Select>
        </Form.Group> */}

        {/* Select school */}
        {/* <Form.Group className="mb-3">
            <Form.Label>Registration Link</Form.Label>
            <Form.Select aria-label="Default select example">
                <option>--Select School--</option>
                <option value="1">School of Computer Science</option>
                <option value="2">School of Chemical Science</option>
                <option value="3">School of Mathematics</option>
                <option value="4">School of Pharmacy</option>
                <option value="5">School of Physics</option>
                <option value="6">School of Language and Literature</option>
                <option value="7">School of Art</option>
            </Form.Select>
        </Form.Group> */}

        <Form.Group className="mb-3">
            <Form.Label>Registration Link</Form.Label>
            <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Insert your link"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a proper link.
            </Form.Control.Feedback>
          </InputGroup>
            <Form.Text className="text-muted">
            Please insert a proper link.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Add Poster</Form.Label>
            <InputGroup hasValidation>
            <Form.Control
              type="file"
              placeholder="Insert your link"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a proper file.
            </Form.Control.Feedback>
          </InputGroup>
            <Form.Text className="text-muted">
            Please insert a proper file.
            </Form.Text>
        </Form.Group>

        <p></p>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    </div>
  );
}

export default CreatePost;