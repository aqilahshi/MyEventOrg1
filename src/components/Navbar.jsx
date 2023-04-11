import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>MyEventOrg</span>
            <div className='user'>
                <img src='' alt=''/>
                <span>Aqilah</span>
                <button>logout</button>
            </div>
        </div>
    );
};

export default Navbar;