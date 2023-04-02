import React from "react";
import { BiDotsHorizontal } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Box(props) {
   
    return (
        <div className="small_box">
            <div className="box_content">
                <a class="dot_menu" href="#"><BiDotsHorizontal/></a> 
                <img class="image" src={props.label}></img>
                <div class="eventnamebox">
                    <Link to="/EventDashboard.jsx" class="event_name">{props.children}</Link>
                </div>
            </div>
        </div>
    );
}

export default Box;