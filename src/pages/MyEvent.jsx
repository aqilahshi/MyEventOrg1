import React from 'react';
import Collapsible from '../components/Collapsible';
import { RxTriangleDown } from "react-icons/rx";
import Box from '../components/Box';

const MyEvent = () => {
    return (
        <div class="container2">
            <div  class="content">
                <h1>MyEvent</h1>
                <div class="eventsummary">
                    <div>
                        <Collapsible label={<h3>{<RxTriangleDown/>} Ongoing Event</h3>}>
                            <div className='box_event'>
                                <Box label="b9.jpg" >CS Bersamamu</Box>
                                <Box label="b9.jpg" >VCSIRF</Box>
                                <Box label="b9.jpg" >CS Bersamamu Bersama-Sama</Box>
                                <Box label="b9.jpg" >Freshmen Orientation</Box>
                            </div>
                            {/* <h2>Teheuhr</h2>
                            <p>dgfhgdsf</p> */}
                        </Collapsible>

                        <Collapsible label={<h3>{<RxTriangleDown/>} Upcoming Event</h3>}>
                        <div className='box_event'>
                                <Box label="b9.jpg" >CS Bersamamu</Box>
                                <Box label="4.jpg" >VCSIRF</Box>
                                <Box label="aaa.jpeg" >C++ Clinic</Box>
                                <Box label="b9.jpg" >Freshmen Orientation Bersama-Sama Pelajar Senior</Box>
                                <Box label="b9.jpg" >CS Bersamamu Bersama-Sama</Box>
                            </div>
                            {/* <h2>Teheuhr</h2>
                            <p>dgfhgdsf</p> */}
                        </Collapsible>

                        <Collapsible label={<h3>{<RxTriangleDown/>} Past Event</h3>}>
                        <div className='box_event'>
                                <Box label="b9.jpg" >VCSIRF</Box>
                                <Box label="b9.jpg" >Freshmen Orientation</Box>
                                <Box label="b9.jpg" >CS Bersamamu Bersama-Sama</Box>
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