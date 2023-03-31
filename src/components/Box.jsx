import React from "react";
import { BiDotsHorizontal } from "react-icons/bi";

function Box() {
   
    return (
        <div className="small_box">
            <div className="box_content">
                <a class="dot_menu" href="#"><BiDotsHorizontal/></a> 
                <img class="image" src="logo192.png"></img>
            </div>
        </div>
    );
}

export default Box;