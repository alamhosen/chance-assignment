import React from 'react';
const NewConnection = ({ newConnection }) => {
    const { username, img } = newConnection;


    return (
            <div className="card p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 inline-block mt-4">
                <figure>
                    <div className="avatar">
                        <div className="w-20 p-2 rounded-full bg-white">
                            <img src={img} alt='/'/>
                        </div>
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="text-center text-2xl">{username}</h2>
                </div>
            </div>

    );
};

export default NewConnection;