import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import AwardTable from "./AwardTable"
import AwardPic from "./AwardPic"

function Award(){
  
return (
  <div>
    <div className='d-flex align-items-center justify-content-center' >
      <div >
        {/* <h1 className='mb-5' style={{textAlign: 'center', fontWeight: 'bold', color: 'black', marginTop:'30px', marginLeft: '0%'}}>Award Announcement</h1> */}
        <blockquote class="blockquote text-center">
          <h1 class="mb=5" style={{textAlign: 'center', fontWeight: 'bold', color: 'black', marginTop:'30px', marginLeft: '0%'}}>Award Announcement</h1>
          <footer>Congratulations to those who are lucky!</footer>
        </blockquote>
        <div className='mt-5'>
          <AwardTable/>
        </div>
        <div className='mt-3'>
          <Link to="/winnerdetails"><Button variant="outline-primary">View Winner Details</Button></Link>
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

export default Award;