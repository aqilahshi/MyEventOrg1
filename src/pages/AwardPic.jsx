import { CardGroup, Card } from 'react-bootstrap';
import React from 'react';

function AwardPic() {
    return (
      <CardGroup className='px-5' >
        <Card  style={{height:'100px', width: '50%', marginBottom:'50px' }}>
          <Card.Header>1st Gift</Card.Header>
          <Card.Img className='mh-100' variant="top" src="aaa.jpeg" />
        </Card>
        <Card style={{height:'100px', width: '50%', marginBottom:'50px'}} >
          <Card.Header>2nd Gift</Card.Header>
          <Card.Img className='mh-100' variant="top" src="b9.jpg" />
        </Card>
        <Card style={{height:'100px', width: '50%', marginBottom:'50px'}} >
          <Card.Header>3rd Gift</Card.Header>
          <Card.Img className='mh-100' variant="top" src="4.jpg" />
        </Card>
      </CardGroup>
    );
}

export default AwardPic;


      {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card> */}

        // return (
  //   <div className="d-flex justify- mt-5">
  //     <Card style={{ width: '18rem' }}>
  //       <Card.Img variant="top" src="holder.js/100px180" />
  //       <Card.Body>
  //         <Card.Title>Card Title</Card.Title>
  //         <Card.Text>
  //           Some quick example text to build on the card title and make up the
  //           bulk of the card's content.
  //         </Card.Text>
  //         <Button variant="primary">Go somewhere</Button>
  //       </Card.Body>
  //     </Card>
  //     <Card style={{ width: '18rem' }}>
  //       <Card.Img variant="top" src="holder.js/100px180" />
  //       <Card.Body>
  //         <Card.Title>Card Title</Card.Title>
  //         <Card.Text>
  //           Some quick example text to build on the card title and make up the
  //           bulk of the card's content.
  //         </Card.Text>
  //         <Button variant="primary">Go somewhere</Button>
  //       </Card.Body>
  //     </Card>
  //     <Card style={{ width: '18rem' }}>
  //       <Card.Img variant="top" src="holder.js/100px180" />
  //       <Card.Body>
  //         <Card.Title>Card Title</Card.Title>
  //         <Card.Text>
  //           Some quick example text to build on the card title and make up the
  //           bulk of the card's content.
  //         </Card.Text>
  //         <Button variant="primary">Go somewhere</Button>
  //       </Card.Body>
  //     </Card>

      
  //   </div>