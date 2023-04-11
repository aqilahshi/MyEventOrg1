import React from 'react';
import Img from "../img/img.png";
import Attach from "../img/attach.png";

const Input = () => {
    return (
        <div className='input'>
            <input type='text' placeholder='Type Something..'/>
            <div className='send'>
                <div className='send'>
                    <img src={Img} alt='img'/>
                    <input type='file' style={{display:"none"}} id='file'/>
                    <label htmlFor='file'>
                        <img src={Attach} alt='attach'/>
                    </label>
                </div>
                <button>Send</button>
            </div>

        </div>
    );
};

export default Input;