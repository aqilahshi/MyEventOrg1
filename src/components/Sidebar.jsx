import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaPhoneAlt,
    FaCommentAlt,
    FaRegCalendarAlt,
    // FaThList,
    FaFileAlt,
    FaBell,
    FaBox,
    FaSlideshare
    
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/activity",
            name:"Activity",
            icon:<FaBell/>
        },
        {
            path:"/calls",
            name:"Calls",
            icon:<FaPhoneAlt/>
        },
        {
            path:"/chat",
            name:"Chat",
            icon:<FaCommentAlt/>
        },
        {
            path:"/calendar",
            name:"Calendar",
            icon:<FaRegCalendarAlt/>
        },
        {
            path:"/files",
            name:"Files",
            icon:<FaFileAlt/>
        },
        {
            path:"/applications",
            name:"Applications",
            icon:<FaBox/>
        },
        {
            path:"/myevent",
            name:"MyEvent",
            icon:<FaSlideshare/>
        },
        {
            path:"/profile",
            name:"Profile",
            icon:<FaUserAlt/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">MyEventOrg</h1>
                   <div style={{marginLeft: isOpen ? "27px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;