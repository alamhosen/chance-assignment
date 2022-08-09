import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane, faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';
import mastIcon from '../img/eye-mask.png'


const Message = ({message}) => {
    const {img, username, time, messages, message_amount, your_turn, favorite} = message;

    return (
        <div className='flex w-full mb-8 justify-between border-b-4 border-gray-200 pb-4'>
            <div className='flex'>
                <div className='rounded'><img className='w-24 mr-5' src={img} alt="" /></div>
                <div>
                    { favorite?
                        <h2 className='text-3xl font-bold flex items-center'>{username} 
                        <div className="badge badge-lg ml-2 bg-red-50 border-none py-4"><img src={mastIcon} alt="" /></div>
                        </h2>

                        : <h2 className='text-3xl font-bold'>{username}</h2>
                    }
                    <p className='text-2xl mt-3'>{messages}</p>
                </div>
            </div>

            <div>
                <p className='text-1xl text-end'>{time}</p>
                {
                    message_amount? <p className='text-1xl mt-3 text-end'><div className="badge badge-lg font-bold p-2 bg-cyan-50 border-none text-black">{ message_amount}</div></p>
                    : <p className='text-1xl mt-3 text-end'><div className="badge badge-lg font-bold p-2 bg-cyan-50 border-none text-black">
                        
                     <FontAwesomeIcon className='mr-2' icon={faPaperPlane}/> { your_turn}</div></p>
                }
            </div>
        </div>
    );
};

export default Message;