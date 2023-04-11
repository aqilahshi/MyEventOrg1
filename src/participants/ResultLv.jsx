import React from 'react';
import { Card, CardGroup, ProgressBar } from 'react-bootstrap';

function App() {
  const now=40;
  const now1=60;

  return (
    <div>
      <blockquote class="blockquote text-center mb-5">
          <h1 class="mb=5" style={{textAlign: 'center', fontWeight: 'bold', color: 'black', marginTop:'30px', marginLeft: '0%'}}>Live Poll</h1>
          <footer>Thank you for using MyEventOrg Live Poll. </footer>
          <footer>Below is the result of 'question'.</footer>
      </blockquote>
      <div>
        <CardGroup className='d-flex justify-content-center'>
        <Card className='w-100'>
          <Card.Title className='mb-3'>Result: </Card.Title>
          <div className="progressBar ">
            <Card.Text >Option 1:</Card.Text>
            <ProgressBar className='mb-3' style={{height:'50px'}} variant="warning" now={40} valuemin={0} valuemax={100} animated label={`${40}%`}/>
            <Card.Text >Option 2:</Card.Text>
            <ProgressBar style={{height:'50px'}} variant="info" now={60} valuemin={0} valuemax={100} animated label={`${60}%`}/>
          </div>
        </Card>
      </CardGroup>
      </div>
      
      
    </div>

    
  );
}
export default App;