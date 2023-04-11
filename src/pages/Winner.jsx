import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import WinnerDetails from './WinnerDetails';
import AwardPic from "./AwardPic"
import Award from './Award';

function Winner(){
  
  return (
    <div>
      <div className='d-flex align-items-center justify-content-center' >
        <div >
          {/* <h1 className='mb-5' style={{textAlign: 'center', fontWeight: 'bold', color: 'black', marginTop:'30px', marginLeft: '0%'}}>Award Announcement</h1> */}
          <blockquote class="blockquote text-center">
            <h1 class="mb=5" style={{textAlign: 'center', fontWeight: 'bold', color: 'black', marginTop:'30px', marginLeft: '0%'}}>Winner Details</h1>
            <footer>Below is the details of the winner.</footer>
          </blockquote>
          <div className='mt-5'>
            <WinnerDetails/>
          </div>
          <div className='mt-3'>
            <Link to="/award" element={<Award />}><Button variant="outline-primary">Back</Button></Link>
          </div>
        </div>
      </div>
      <div>
        <div className='mt-4'>
            <AwardPic/>
        </div>
      </div>
    </div>
    )
  
  }
  
  export default Winner;