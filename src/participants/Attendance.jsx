import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Attendance() {
  return (
    <div className='attendance'>
        <blockquote class="blockquote text-center">
            <h1 class="mb=0">Welcome to MyEventOrg</h1>
            <footer>Please enter below details for your attendance record.</footer>
        </blockquote>
        <Form>
        <Form.Group className="mb-3">
            <Form.Label>Your Username</Form.Label>
            <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Insert your username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a proper username.
            </Form.Control.Feedback>
          </InputGroup>
            <Form.Text className="text-muted">
            Please insert a proper username.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Matric number</Form.Label>
            <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Insert matric number"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter your matric number.
            </Form.Control.Feedback>
          </InputGroup>
            <Form.Text className="text-muted">
            Please enter your matric number.
            </Form.Text>
        </Form.Group>
        {/* Phone number form */}
        <Form.Group md="4" className="mb-3" controlId="validationCustomUsername">
          <Form.Label>Phone number</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">+60</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Insert phone number"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter your phone number.
            </Form.Control.Feedback>
          </InputGroup>
          <Form.Text className="text-muted">
            Please enter your phone number.
            </Form.Text>
        </Form.Group>
        {/* Select Year of Study */}
        <Form.Group className="mb-3">
            <Form.Label>Year of Study</Form.Label>
            <Form.Select aria-label="Default select example">
                <option>--Select Year of Study--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </Form.Select>
        </Form.Group>
        {/* Select school */}
        <Form.Group className="mb-3">
            <Form.Label>School</Form.Label>
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
        </Form.Group>
        <p></p>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    </div>
  );
}

export default Attendance;