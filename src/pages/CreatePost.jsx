import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Row, Col} from 'react-bootstrap';
import { useState, useEffect  } from "react";
import {db} from '../firebase';
import { collection, addDoc, getDocs  } from "firebase/firestore";
import axios from 'axios';
    
function  CreatePost() {

  const [Status, setStatus] = useState("Enabled")
  const [Visibility, setVisibility] = useState("Visible")
  const [MStock, setMStock] = useState("Yes")
  const [SAvailability, setSAvailability] = useState("Yes")
   
  const [productname, setProductName] = useState("")
  const [productdesc, setProductDesc] = useState("")
  const [productprice, setProductPrice] = useState("")
  const [producttype, setProductType] = useState("")
  // const [productvar, setProductVar] = useState("")
  const [productquantity, setProductQuantity] = useState("")
  

  const Submit = async (y) => {
    y.preventDefault();  
   
    try {
        const docRef = await addDoc(collection(db, "product"), {
          productname: productname,
          productdesc: productdesc,
          productprice: productprice,
          producttype: producttype,
          // productvar: productvar,
          productquantity: productquantity,
          Status: Status,
          Visibility: Visibility,
          MStock: MStock,
          SAvailability: SAvailability,     
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (y) {
        console.error("Error adding document: ", y);
      }
}



const [todos, setTodos] = useState([])
 
const fetchPost = async () => {
       
  await getDocs(collection(db, "product"))
      .then((querySnapshot)=>{              
          const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
          setTodos(newData);                
          console.log(todos, newData);
      })
 
}

useEffect(()=>{
  fetchPost();
}, [])


  const onOptionChange = e => {
    setStatus(e.target.value)
  }

  const onOptionChange2 = f => {
    setVisibility(f.target.value)
  }

  const onOptionChange3 = g => {
    setMStock(g.target.value)
  }

  const onOptionChange4 = h => {
    setSAvailability(h.target.value)
  }


  

  // ==================================================
  const [currentFile, setFile] = React.useState();
  const [previewImage, setPreview] = React.useState();
  const [success, setSuccess] = React.useState(false);

  const selectFile = function (e) {
    setFile(e.target.files[0]);

    let reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const submit2 = function () {
    let fd = new FormData();

    fd.append("file", currentFile);

    let request = new XMLHttpRequest();

    request.onreadystatechange = function (state) {
      if (
        state.originalTarget.readyState === 4 &&
        state.originalTarget.status === 200
      ) {
        setSuccess(true);
      }
    };

    request.open(
      "POST",
      "https://us-central1-tutorial-e6ea7.cloudfunctions.net/fileUpload",
      true
    );
    request.send(fd);
  };
  // =================================================

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
                    onChange={(y)=>setProductName(y.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a product name.
                  </Form.Control.Feedback>
                </InputGroup>
                  {/* <Form.Text className="text-muted">
                  Please insert a product name.
                  </Form.Text> */}
              </Form.Group>

              <Form.Group className="mb-3">
                  <Form.Label>Product Description</Form.Label>
                  <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Insert your product description"
                    aria-describedby="inputGroupPrepend"
                    onChange={(y)=>setProductDesc(y.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a product description.
                  </Form.Control.Feedback>
                </InputGroup>
                  {/* <Form.Text className="text-muted">
                  Please insert a product description.
                  </Form.Text> */}
              </Form.Group>

              {/* <Form.Group className="mb-3">
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
              </Form.Group> */}

              {/* <Form.Group className="mb-3">
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
              </Form.Group> */}

              <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Insert your product price"
                    aria-describedby="inputGroupPrepend"
                    onChange={(y)=>setProductPrice(y.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a product name.
                  </Form.Control.Feedback>
                </InputGroup>
                  {/* <Form.Text className="text-muted">
                  Please insert a product name.
                  </Form.Text> */}
              </Form.Group>

              
              <div className='align-items-center'>
                <Row>
                  <Col>
              <Form.Group className="mb-3">
                  <Form.Label>Item Type</Form.Label>
                  <Form.Select aria-label="Default select example"
                  onChange={(y)=>setProductType(y.target.value)}>
                      <option>--Select Item Type--</option>
                      <option value="Foods & Beverages">Foods & Beverages</option>
                      <option value="Doorgift">Doorgift</option>
                      <option value="Stationery">Stationery</option>
                  </Form.Select>
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
                              onChange={(y)=>setProductQuantity(y.target.value)}
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              Please enter your quantity.
                            </Form.Control.Feedback>
                          </InputGroup>
                            {/* <Form.Text className="text-muted">
                            Please your quantity.
                            </Form.Text> */}
                          </Form.Group>
                          </Col>
                          </Row>
</div>
<div>
      <br/><h5>Upload an image</h5>
      <input type="file" accept="image/*" onChange={selectFile} />

      {previewImage && !success && (
        <div>
          <img className="preview" src={previewImage} alt="" />
        </div>
      )}

      {success && <div>Image successfully uploaded</div>}

      <button onClick={submit2}>Upload</button>
    </div>
              
              {/* <div className='align-items-center'> */}
                  {/* <Row> */}
                      {/* <Col>
                          <Form.Group md="4" className="mb-3 " controlId="validationCustomUsername">
                          <Form.Label>Variations</Form.Label>
                            <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              placeholder="Insert variations"
                              aria-describedby="inputGroupPrepend"
                              onChange={(y)=>setProductVar(y.target.value)}
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
                      </Col> */}
                      {/* <Col> */}
                          {/* <Form.Group className="mb-3 col-sm-">
                          <Form.Label>Quantity</Form.Label>
                            <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              placeholder="Insert quantity"
                              aria-describedby="inputGroupPrepend"
                              onChange={(y)=>setProductQuantity(y.target.value)}
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              Please enter your quantity.
                            </Form.Control.Feedback>
                          </InputGroup>
                            <Form.Text className="text-muted">
                            Please your quantity.
                            </Form.Text>
                          </Form.Group> */}
                      {/* </Col>
                      <Col> */}
                          {/* <Form.Group className="mb-3">
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
                          </Form.Group> */}
                      {/* </Col>
                  </Row> */}
                {/* </div> */}
                {/* <p></p>
                <Button variant="primary" 
                type="submit" 
                onClick={Submit}>
                    Submit
                </Button> */}
                </Form>
            </div>

        <div className='try4'>
          <div className='try2'>
            <h5>Product Status</h5><p/>
            Status:
            <br/><input
              type="radio" name="Status"
              value="Enabled" id="enabled"
              checked={Status === "Enabled"}
              onChange={onOptionChange}
            />
            <label htmlFor="enabled">Enable</label>

            <br/><input
              type="radio" name="Status"
              value="Disabled" id="disabled"
              checked={Status === "Disabled"}
              onChange={onOptionChange}
            />
            <label htmlFor="disabled">Disabled</label>

            {/* <p>
              Select status : <strong>{Status}</strong>
            </p> */}

            <p/>
             Visibility:
             <br/><input
              type="radio" name="Visibility"
              value="Visible" id="visible"
              checked={Visibility === "Visible"}
              onChange={onOptionChange2}
            />
            <label htmlFor="visible">Visible</label>

            <br/><input
              type="radio" name="Visibility"
              value="Not visible" id="notvisible"
              checked={Visibility === "Not visible"}
              onChange={onOptionChange2}
            />
            <label htmlFor="notvisible">Not visible</label>

            {/* <p>
              Select visibility : <strong>{Visibility}</strong>
            </p> */}
          </div>
          
          <br/>

          <div className='try2'>
              <h5>Inventory</h5><p/>
              Manage Stock:
              <br/><input
              type="radio" name="MStock"
              value="Yes" id="yes"
              checked={MStock === "Yes"}
              onChange={onOptionChange3}
            />
            <label htmlFor="yes">Yes</label>

            <br/><input
              type="radio" name="MStock"
              value="No" id="no"
              checked={MStock === "No"}
              onChange={onOptionChange3}
            />
            <label htmlFor="no">No</label>

            {/* <p>
              Select Manage Stock : <strong>{MStock}</strong>
            </p> */}
            <p/>

             Stock Availability:
             <br/><input
              type="radio" name="SAvailability"
              value="Yes" id="yes"
              checked={SAvailability === "Yes"}
              onChange={onOptionChange4}
            />
            <label htmlFor="yes">Yes</label>

            <br/><input
              type="radio" name="SAvailability"
              value="No" id="no"
              checked={SAvailability === "No"}
              onChange={onOptionChange4}
            />
            <label htmlFor="no">No</label>

            {/* <p>
              Select Stock Availability : <strong>{SAvailability}</strong>
            </p> */}
            <br/>
          </div>

          <br/>

          <p></p>
                <Button variant="primary" 
                type="submit" 
                onClick={Submit}>
                    Submit
                </Button>

          {/* <div className='try2'>
              <h5>Attribute Group</h5>
              <Form.Group className="mb-3">
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
            
          </div>*/}

        </div>
<div className="todo-content">
    {
        todos?.map((todo,i)=>(
            <p key={i}>
                {todo.todo}
            </p>
        ))
    }
</div>
      </div>
      
      {/* end create post */}
    </div> 
  );
// }
}

export default CreatePost;