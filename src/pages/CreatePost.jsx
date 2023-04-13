import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Row, Col} from 'react-bootstrap';
import { useState } from "react"
    
function  CreatePost() {

  const [topping, setTopping] = useState("Medium")
  
  const onOptionChange = e => {
    setTopping(e.target.value)
  }

  return (
    <div className='createpost'>
        <h1>Create A New Product</h1><br></br>
        <div className='try3'>
          <div className='try1'>
            <h5>General</h5><p/>
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

              <Form.Group className="mb-3">
                  <Form.Label>Product Description</Form.Label>
                  <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Insert your product description"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a product description.
                  </Form.Control.Feedback>
                </InputGroup>
                  <Form.Text className="text-muted">
                  Please insert a product description.
                  </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                  <Form.Label>Weight</Form.Label>
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

              <Form.Group className="mb-3">
                  <Form.Label>Dimension</Form.Label>
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

              <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
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

              

              <Form.Group className="mb-3">
                  <Form.Label>Item Type</Form.Label>
                  <Form.Select aria-label="Default select example">
                      <option>--Select Item Type--</option>
                      <option value="1">F&B</option>
                      <option value="2">Doorgift</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                  </Form.Select>
              </Form.Group>

              
              <div className='align-items-center'>
                  <Row>
                      <Col>
                          <Form.Group md="4" className="mb-3 " controlId="validationCustomUsername">
                          <Form.Label>Variations</Form.Label>
                            <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              placeholder="Insert variations"
                              aria-describedby="inputGroupPrepend"
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              Please enter your variations.
                            </Form.Control.Feedback>
                          </InputGroup>
                            <Form.Text className="text-muted">
                            Please your variations.
                            </Form.Text>
                          </Form.Group>
                      </Col>
                      <Col>
                          <Form.Group className="mb-3 col-sm-">
                          <Form.Label>Quantity</Form.Label>
                            <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              placeholder="Insert quantity"
                              aria-describedby="inputGroupPrepend"
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              Please enter your quantity.
                            </Form.Control.Feedback>
                          </InputGroup>
                            <Form.Text className="text-muted">
                            Please your quantity.
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
                <p></p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </div>

      <div className='try4'>
          <div className='try2'>
            <h5>Product Status</h5><p/>
            Status:
            <br/><input
        type="radio"
        name="topping"
        value="Regular"
        id="regular"
        checked={topping === "Regular"}
        onChange={onOptionChange}
      />
      <label htmlFor="regular">Regular</label>

      <br/><input
        type="radio"
        name="topping"
        value="Medium"
        id="medium"
        checked={topping === "Medium"}
        onChange={onOptionChange}
      />
      <label htmlFor="medium">Medium</label>

      <br/><input
        type="radio"
        name="topping"
        value="Large"
        id="large"
        checked={topping === "Large"}
        onChange={onOptionChange}
      />
      <label htmlFor="large">Large</label>

      <p>
        Select topping : <strong>{topping}</strong>
      </p>

            <br/>
             Visibility:
            
          </div>
          
          <br/>

          <div className='try2'>
              <h5>Inventory</h5><p/>
              Manage Stock:
            
            <br/>
             Stock Availability:
           
          </div>

          <br/>

          <div className='try2'>
              <h5>Attribute Group</h5>
              <Form.Group className="mb-3">
                  {/* <Form.Label>Item Type</Form.Label> */}
                  <Form.Select aria-label="Default select example">
                      <option>--Select Attribute Group--</option>
                      <option value="1">F&B</option>
                      <option value="2">Doorgift</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                  </Form.Select>
              </Form.Group>

              <h5>Attributes</h5>


            <br/>
             Stock Availability:
            
          </div>

        </div>

      </div>
      {/* end create post */}
    </div> 
  );
// }
}

export default CreatePost;