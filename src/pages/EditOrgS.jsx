import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Link} from 'react-router-dom';


class EditOrgS extends Component {
    render() {
        return (
            <div>
                <h1>CS Bersamamu Organization Structure</h1>
                <div className='try13'>
                <Form>
                    
        <Form.Group className="mb-3">
            <Form.Label>Event Coordinator</Form.Label>
            <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Assoc. Prof Muhaya binti Samad"
              aria-describedby="inputGroupPrepend"
              readonly="readonly"
            />
            <Form.Control.Feedback type="invalid">
              Please enter a proper username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Activity Coordinator</Form.Label>
            <InputGroup hasValidation>
            <Form.Select aria-label="Default select example">
                <option>--Select Event Committee Name--</option>
                <option value="xxxx">xxxx</option>
                <option value="yyyy">yyyy</option>
                <option value="zzzz">zzzz</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please enter a proper username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Venue Coordinator</Form.Label>
            <InputGroup hasValidation>
            <Form.Select aria-label="Default select example">
                <option>--Select Event Committee Name--</option>
                <option value="xxxx">xxxx</option>
                <option value="yyyy">yyyy</option>
                <option value="zzzz">zzzz</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please enter a proper username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Equipment Coordinator</Form.Label>
            <InputGroup hasValidation>
            <Form.Select aria-label="Default select example">
                <option>--Select Event Committee Name--</option>
                <option value="xxxx">xxxx</option>
                <option value="yyyy">yyyy</option>
                <option value="zzzz">zzzz</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please enter a proper username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <div className='try7'>
            <Form.Group className="mb-3">
                <Form.Label>Sound Equipment</Form.Label>
                <InputGroup hasValidation>
                <Form.Select aria-label="Default select example">
                <option>--Select Event Committee Name--</option>
                <option value="xxxx">xxxx</option>
                <option value="yyyy">yyyy</option>
                <option value="zzzz">zzzz</option>
            </Form.Select>
                <Form.Control.Feedback type="invalid">
                Please enter a proper username.
                </Form.Control.Feedback>
            </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Equipment Maintenance</Form.Label>
                <InputGroup hasValidation>
                <Form.Select aria-label="Default select example">
                <option>--Select Event Committee Name--</option>
                <option value="xxxx">xxxx</option>
                <option value="yyyy">yyyy</option>
                <option value="zzzz">zzzz</option>
            </Form.Select>
                <Form.Control.Feedback type="invalid">
                Please enter a proper username.
                </Form.Control.Feedback>
            </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Video Equipment</Form.Label>
                <InputGroup hasValidation>
                <Form.Select aria-label="Default select example">
                <option>--Select Event Committee Name--</option>
                <option value="xxxx">xxxx</option>
                <option value="yyyy">yyyy</option>
                <option value="zzzz">zzzz</option>
            </Form.Select>
                <Form.Control.Feedback type="invalid">
                Please enter a proper username.
                </Form.Control.Feedback>
            </InputGroup>
            </Form.Group>
        
        </div>

        <Form.Group className="mb-3">
            <Form.Label>Officials Coordinator</Form.Label>
            <InputGroup hasValidation>
            <Form.Select aria-label="Default select example">
                <option>--Select Event Committee Name--</option>
                <option value="xxxx">xxxx</option>
                <option value="yyyy">yyyy</option>
                <option value="zzzz">zzzz</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please enter a proper username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Hospitality Coordinator</Form.Label>
            <InputGroup hasValidation>
            <Form.Select aria-label="Default select example">
                <option>--Select Event Committee Name--</option>
                <option value="xxxx">xxxx</option>
                <option value="yyyy">yyyy</option>
                <option value="zzzz">zzzz</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please enter a proper username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Merchandising Coordinator</Form.Label>
            <InputGroup hasValidation>
            <Form.Select aria-label="Default select example">
                <option>--Select Event Committee Name--</option>
                <option value="xxxx">xxxx</option>
                <option value="yyyy">yyyy</option>
                <option value="zzzz">zzzz</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please enter a proper username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        
        <p></p>
        <Link to="organizationstructure"><Button variant="primary" type="submit">
            Update
        </Button></Link>
        </Form>
                </div>
            </div>
        );
    }
}

export default EditOrgS; 