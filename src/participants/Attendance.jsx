import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {db} from "../firebase";
//establish connection to specific collection
import {collection, addDoc} from "firebase/firestore";

function Attendance() {

  const usersCollectionRef = collection( db , "Participant")
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newMatNo, setNewMatNo] = useState(0);
  const [newPhone, setPhone] = useState(0);
  const [newStudy, setStudy] = useState(0);
  const [newSchool, setSchool] = useState("");


  const createUser = async () => {
    await addDoc(usersCollectionRef, {username: newName, email: newEmail, matricno: newMatNo, phoneno: newPhone, yearstudy:newStudy, school: newSchool});
  }

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
              onChange={(event) => { 
                setNewName(event.target.value);
              }}
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
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              onChange={(event) => { 
                setNewEmail(event.target.value);
              }}
            />
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
              onChange={(event) => { 
                setNewMatNo(event.target.value);
              }}
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
              onChange={(event) => { 
                setPhone( '60' + event.target.value);
              }}
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
            <Form.Select 
              aria-label="Default select example"
              onChange={(event) => { 
                setStudy(event.target.value);
              }}
            >
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
            <Form.Select aria-label="Default select example"
              onChange={(event) => { 
                setSchool(event.target.value);
              }}
            >
                <option>--Select School--</option>
                <option value="School of Computer Science">School of Computer Science</option>
                <option value="School of Chemical Science">School of Chemical Science</option>
                <option value="School of Mathematics">School of Mathematics</option>
                <option value="School of Pharmacy">School of Pharmacy</option>
                <option value="School of Physics">School of Physics</option>
                <option value="School of Language and Literature">School of Language and Literature</option>
                <option value="School of Art">School of Art</option>
            </Form.Select>
        </Form.Group>
        <p></p>
        <Button variant="primary" type="submit" onClick={createUser}> 
            Submit
        </Button>
        </Form>
    </div>
  );
}

export default Attendance;