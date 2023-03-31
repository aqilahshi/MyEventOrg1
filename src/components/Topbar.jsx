import React, { useState } from 'react';
import {
    FaArrowLeft,
    FaArrowRight,
    FaSearch
}from "react-icons/fa";

const Topbar = () => {
    return (
        
            <div class="topnav">
                <a href="#" ><FaArrowLeft/></a>
                <a href="#" class="RedoButton"><FaArrowRight/></a>
                <div class="searchbar">
                    <p><FaSearch/>&ensp; Search</p>
                </div>
            </div>
            
    );
};

export default Topbar;