import React from 'react';
import Dashboards from '../components/Dashboards';
import {Link} from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="container2">
            <div  class="content">
                <h1>-event_name- Dashboard</h1>
                <div class="eventsummary">
                    <div>
                        <div className='box_event'>
                            <Dashboards label="b9.jpg" ><Link to='eventsummary'>Event Details</Link></Dashboards>
                            <Dashboards label="b9.jpg" ><Link to='organizationstructure'>Organization Structure</Link></Dashboards>
                            <Dashboards label="b9.jpg" ><Link to='eventagenda'>Event Agenda</Link></Dashboards>
                            <Dashboards label="b9.jpg" ><Link to='budgetplan'>Budget Plan</Link></Dashboards>
                            <Dashboards label="b9.jpg" ><Link to='/extractattendance'>Participant</Link></Dashboards>
                            <Dashboards label="b9.jpg" ><Link to='activity'>Activity</Link></Dashboards>
                            <Dashboards label="b9.jpg" ><Link to='award'>Award & Prizes</Link></Dashboards>
                            <Dashboards label="b9.jpg" ><Link to='generatecertificate'>Certificate</Link></Dashboards>
                            <Dashboards label="aaaa.jpeg" ><Link to='generatefinalreport'>Final Report</Link></Dashboards>
                        </div>
                    </div>                    
                </div>
            </div> 
        </div>
    );

    
};

export default Dashboard;