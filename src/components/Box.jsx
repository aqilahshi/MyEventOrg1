import React from "react";
import { BiDotsHorizontal } from "react-icons/bi";

function Box(props) {
   
    return (
        <div className="small_box">
            <div className="box_content">
                <a class="dot_menu" href="#"><BiDotsHorizontal/></a> 
                <img class="image" src={props.label}></img>
                <div class="eventnamebox">
                    <a href="#" class="event_name">{props.children}</a>
                </div>
            </div>
        </div>
    );
}

export default Box;