import React from 'react';
import Sidebars from '../components/Sidebars';
import Chatting from '../components/Chatting';
const Chat = () => {
    return (
        <div class="container2">
            <div class="content"> 
                <h1>Chat page</h1>
                <div className='home'>
                    <div className='container'>
                    <Sidebars/>
                    <Chatting/>
                    </div>
                </div>    
            </div>
        </div>
    );
};

export default Chat;