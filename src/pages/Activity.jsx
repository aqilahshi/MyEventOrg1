import React, { useState } from "react";
// import "./style/Card.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { CardGroup, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


const Activity =() =>{
    const cardInfo = [
        {
            image: "/images/quiz.jpg", 
            description: "Create your own quiz for the participants here", 
            link: "/createquiz",
            button: "Create Quiz"
        },
        {
            image: "/images/poll.jpg", 
            description: "Get a live poll results from participants here", 
            link: "/createlivepoll",
            button: "Create Poll"
        },
        {
            image: "/images/luckydraw.jpg", 
            description: "Create a lucky draw session with participants", 
            link: "/createluckydraw",
            button: "Create Lucky Draw"
        }
    ];

    const renderCard = (card, index) =>{
        return(
          <div className="p-3">
            <Card style={{ justifyContent:'center',textAlign: 'center'}} key={index} className="card">
                <Card.Body>
                    <Card.Img className="card-image" variant="top" src={card.image} />
                    <Card.Text style={{padding: '1rem', textAlign: "center"}}>{card.description}</Card.Text>
                    <Link to={card.link}><Button variant="outline-primary" style={{marginTop: '10px'}}>{card.button}</Button></Link>
                </Card.Body>
            </Card>
          </div>
        );
    };

    return (
    <div className="body">
        {/* To create Activities */}
        <div>
          <blockquote class="blockquote text-center">
          <h1 class="mb=5" style={{textAlign: 'center', fontWeight: 'bold', color: 'black', marginTop:'30px', marginLeft: '0%'}}>Activities</h1>
          <footer>Welcome to Activity! Here you can choose games or activity for your event.</footer>
          </blockquote>
        <div className="grid" style={{textAlign: 'center'}}>
            <CardGroup >
                {cardInfo.map(renderCard)}  
            </CardGroup>
        </div>
        </div>

        
  
        {/* Created Activities */}
        {/* <div>
        <blockquote class="blockquote text-center">
          <h1 class="mb=5" style={{textAlign: 'center', fontWeight: 'bold', color: 'black', marginTop:'30px', marginLeft: '0%'}}>Created Activities</h1>
          <footer>Below is the activities that you have created.</footer>
        </blockquote>
        </div> */}

        

    </div>
    );

};
export default Activity;
