import React from 'react';
import Collapsible from '../components/Collapsible';
import { RxTriangleDown } from "react-icons/rx";
import Box from '../components/Box';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


const MyEvent = () => {
    return (
        <div class="container2">
            <div  class="content">
                <Link to='addevent'><Button variant="outline-primary" style={{marginRight:'50px', float:'right'}}>
                    Add Event
                </Button></Link>
                <h1>MyEvent</h1>
                <div class="eventsummary">
                    <div>
                        <Collapsible label={<h3>{<RxTriangleDown/>} Ongoing Event</h3>}>
                            <div className='box_event'>
                                <Box label="b9.jpg" ><Link to='dashboard'>CS Bersamamu</Link></Box>
                                <Box label="b9.jpg" ><Link to='dashboard'>VCSIRF</Link></Box>
                                <Box label="b9.jpg" ><Link to='dashboard'>CS Bersamamu Bersama-Sama</Link></Box>
                                <Box label="b9.jpg" ><Link to='dashboard'>Freshmen Orientation</Link></Box>
                            </div>
                            {/* <h2>Teheuhr</h2>
                            <p>dgfhgdsf</p> */}
                        </Collapsible>

                        <Collapsible label={<h3>{<RxTriangleDown/>} Upcoming Event</h3>}>
                        <div className='box_event'>
                                <Box label="b9.jpg" ><Link to='dashboard'>CS Bersamamu</Link></Box>
                                <Box label="4.jpg" ><Link to='dashboard'>VCSIRF</Link></Box>
                                <Box label="aaa.jpeg" ><Link to='dashboard'>C++ Clinic</Link></Box>
                                <Box label="b9.jpg" ><Link to='dashboard'>Freshmen Orientation Bersama-Sama Pelajar Senior</Link></Box>
                                <Box label="b9.jpg" ><Link to='dashboard'>CS Bersamamu Bersama-Sama</Link></Box>
                            </div>
                            {/* <h2>Teheuhr</h2>
                            <p>dgfhgdsf</p> */}
                        </Collapsible>

                        <Collapsible label={<h3>{<RxTriangleDown/>} Past Event</h3>}>
                        <div className='box_event'>
                                <Box label="b9.jpg" ><Link to='dashboard'>VCSIRF</Link></Box>
                                <Box label="b9.jpg" ><Link to='dashboard'>Freshmen Orientation</Link></Box>
                                <Box label="b9.jpg" ><Link to='dashboard'>CS Bersamamu Bersama-Sama</Link></Box>
                            </div>
                            {/* <h2>Teheuhr</h2>
                            <p>dgfhgdsf</p> */}
                        </Collapsible>
                    </div>                    
                </div>
            </div> 

        </div>
    );

    
};

export default MyEvent;