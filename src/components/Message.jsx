import React from 'react';

const Message = () => {
    return (
        <div className='message'>
            <div className='messageInfo'>
            <img src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
            <span>just now</span>
            </div>
            <div className='messageContent'>
                <p>hello</p>
            </div>  
        </div>
    );
};

export default Message;