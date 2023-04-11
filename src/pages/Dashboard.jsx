import React from 'react';
import Collapsible from '../components/Collapsible';
import { RxTriangleDown } from "react-icons/rx";
import Box from '../components/Box';


const Dashboard = () => {
    return (
        <div class="container2">
            <div  class="content">
                <h1>-event_name- Dashboard</h1>
                <div class="eventsummary">
                    <div>
                        <div className='box_event'>
                            <Box label="b9.jpg" >Generate Report</Box>
                            <Box label="b9.jpg" >Event Agenda</Box>
                            <Box label="b9.jpg" >Budget Plan</Box>
                            <Box label="b9.jpg" >Participant</Box>
                            <Box label="b9.jpg" >Award & Prizes</Box>
                            <Box label="b9.jpg" >Generate Certificate</Box>
                            <Box label="b9.jpg" >Organization Structure</Box>
                            <Box label="b9.jpg" >Event Summary</Box>
                        </div>
                    </div>                    
                </div>
            </div> 
        </div>
    );

    
};

export default Dashboard;