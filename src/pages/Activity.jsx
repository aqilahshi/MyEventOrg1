import React from 'react';
import {
    FaArrowLeft,
    FaArrowRight,
    FaSearch,
    FaUserAlt
}from "react-icons/fa";

const Activity = () => {
    return (
        <div class="container2">
            <div class="topnav">
                <a href="#" ><FaArrowLeft/></a>
                <a href="#" class="RedoButton"><FaArrowRight/></a>
                <a href="#" class="profile"><FaUserAlt/></a>
                <div class="searchbar">
                    <p><FaSearch/>&ensp; Search</p>
                </div>
            </div><div class="content">
            <h1>Activity page</h1>
        </div></div>
    );
};

export default Activity;