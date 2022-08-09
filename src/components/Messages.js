import React, { useEffect, useState } from 'react';
import Message from './Message';

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() =>{
        fetch('messages.json')
        .then(res => res.json())
        .then(data => setMessages(data))
    }, [])

    return (
        <div className='w-3/5 mx-auto rounded px-10 scrollbar-hide'>
            <div className='flex justify-between'>
                <div><h2 className='text-3xl'>Messages <div className="badge badge-lg font-bold w-8 h-8 bg-orange-400 border-none">1</div></h2></div>
                {/* search filed start  */}
                <div className="">
                    <div className="flex ">
                        <button className="flex items-center justify-center px-4 ">
                            <svg className="w-8 h-8 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                                </path>
                            </svg>
                        </button>
                        <input onChange={(e) => setSearch(e.target.value.toLowerCase())} type="text" className="px-4 py-2 w-80" placeholder="Search"/>
                    </div>
                </div>
                {/* search filed end  */}
            </div>
            {/* message area start */}
            <div className='mt-10'>
                {
                   messages.filter((message) =>{
                       return search.toLowerCase() === ''
                       ? message
                       : message.username.toLowerCase().includes(search)
                   }).map(message => <Message
                   key={message._id}
                   message={message}
                   ></Message>) 
                }
            </div>
            {/* message area end */}
        </div>
    );
};

export default Messages;