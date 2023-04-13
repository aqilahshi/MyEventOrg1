import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Row, Col} from 'react-bootstrap';
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from '../firebase';
import React, { useState, useEffect } from 'react';
// import { storage } from "./firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDate } from 'date-fns';

const AddEvent = () =>{
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [venue, setVenue] = useState("");
  const [registrationLink, setRegistration] = useState("");

  const createEvent = async (e) =>{
    try {
      const docRef = await addDoc(collection(db, "addevents"), {
        name: name, 
        organization: organization,
        details: details,
        date: date,
        start: start,
        end: end,
        venue: venue,
        registrationLink: registrationLink,   
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className='addevent'>
        <Form>
        <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Insert your name"
              aria-describedby="inputGroupPrepend"
              onChange={(e)=>setName(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a proper name.
            </Form.Control.Feedback>
          </InputGroup>
            <Form.Text className="text-muted">
            Please insert a proper name.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Organization</Form.Label>
            <Form.Control type="text" placeholder="Enter organization" 
            onChange={(e)=>setOrganization(e.target.value)}/>
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
              onChange={(e)=>setDetails(e.target.value)}
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
                        onChange={(e)=>setDate(e.target.value)}
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
                        onChange={(e)=>setStart(e.target.value)}
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
                        onChange={(e)=>setEnd(e.target.value)}
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
              onChange={(e)=>setVenue(e.target.value)}
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
              onChange={(e)=>setRegistration(e.target.value)}
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

        {/* <Form.Group className="mb-3">
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
        </Form.Group> */}

        <p></p>
        <Button variant="primary" type="submit" onClick={createEvent}>
            Submit
        </Button>
        </Form>
    </div>
  );
}

export default AddEvent;