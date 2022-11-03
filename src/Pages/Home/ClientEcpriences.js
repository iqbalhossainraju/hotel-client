import React, { useEffect, useState } from 'react';
import ClientEcprience from './ClientEcprience';

const ClientEcpriences = () => {
    const [clientExpriences, setClientExpriences] = useState();
    useEffect(() => {
        fetch(`clientExprience.json`)
            .then(res => res.json())
            .then(data => setClientExpriences(data))
    }, [])
    return (
        <div className="my-10">
            <h4 className='text-xl text-primary text-center my-12 photoGallery'>client moments exprience</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    clientExpriences?.map(clientExprience => <ClientEcprience
                        key={clientExprience._id}
                        clientExprience={clientExprience}
                    ></ClientEcprience>)
                }
            </div>
        </div>
    );
};

export default ClientEcpriences;