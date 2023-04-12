import React from 'react';
import Sidebars from '../components/Sidebars';
import Chat from '../components/Chat';

const Comm = () => {
    return (
        <div class="container2">
            <div class="content"> 
                <h1>Chat page</h1>
                <div className='home'>
                    <div className='container11'>
                    <Sidebars/>
                    <Chat/>
                    </div>
                </div>    
            </div>
        </div>
    );
};

export default Comm;