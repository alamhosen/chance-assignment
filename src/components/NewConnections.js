import React, { useEffect, useState } from 'react';
import { useHorizontalScroll } from './useHorizontalScroll';
import NewConnection from './NewConnection';

const NewConnections = () => {
    const [newConnections, setNewConnections] = useState([]);
    const scrollRef = useHorizontalScroll();

    useEffect(() =>{
        fetch('newConnection.json')
        .then(res => res.json())
        .then(data => setNewConnections(data))
    }, [])
    return (
        <div className='w-3/5 mx-auto my-10 bg-cyan-50 px-10 py-5'>
            <h2 className='text-3xl'>New Connections <div className="badge badge-lg font-bold w-8 h-8 bg-orange-400 border-none">2</div></h2>
            <div className="scrollbar-hide" ref={scrollRef} style={{ overflow: "auto" }}>
        <div style={{ whiteSpace: "nowrap" }}>
          {
            newConnections.map((newConnection)=> <NewConnection 
            key={newConnection._id}
            newConnection={newConnection}
            ></NewConnection>
              
            )
          }
    
        </div>
      </div>
        </div>
    );
};

export default NewConnections;