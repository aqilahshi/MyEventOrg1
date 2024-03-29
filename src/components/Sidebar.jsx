import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaPhoneAlt,
    FaCommentAlt,
    FaRegCalendarAlt,
    // FaThList,
    // FaFileAlt,
    FaBell,
    FaBox,
    FaSlideshare,
    FaShoppingBag,
    FaPoll,
    FaAtom,
    FaAward
    
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import { RxActivityLog } from 'react-icons/rx';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/myevent",
            name:"MyEvent",
            icon:<FaSlideshare/>
        },
        {
            path:"/comm",
            name:"Chat",
            icon:<FaCommentAlt/>
        },
        {
            path:"/calendars",
            name:"Calendars",
            icon:<FaRegCalendarAlt/>
        },

        // {
        //     path:"/",
        //     name:"Dashboard",
        //     icon:<FaTh/>
        // },
        {
            path:"/todolist",
            name:"To-do List",
            icon:<FaPhoneAlt/>
        },
        {
            path:"/shop",
            name:"Shop",
            icon:<FaShoppingBag/>
        },
        
        {
            path:"/activity",
            name:"Activity",
            icon:<RxActivityLog/>
        },
        // {
        //     path:"/award",
        //     name:"Award",
        //     icon:<FaBox/>
        // },
        
        // {
        //     path:"/files",
        //     name:"Files",
        //     icon:<FaFileAlt/>
        // },
        
        {
            path:"/profile",
            name:"Profile",
            icon:<FaUserAlt/>
        },

        //Participants UI
        {
            path:"/attendance",
            name:"Attendance",
            icon:<FaTh/>
        },
        {
            path:"/playlivepoll",
            name:"Live Poll",
            icon:<FaPoll/>
        },
        {
            path:"/luckydraw",
            name:"LuckyDraw",
            icon:<FaAtom/>
        }, 
        {
            path:"/awardpage",
            name:"Award Page",
            icon:<FaAward/>
        },
        // {
        //     path:"/homepage",
        //     name:"Home Page",
        //     icon:<MainPage/>
        // },         
    ]
    return (
        <div className="container1">
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