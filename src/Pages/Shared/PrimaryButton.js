import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className="btn text-white font-bold uppercase bg-gradient-to-r from-secondary to-primary border-none">{children}</button>
        </div>
    );
};

export default PrimaryButton;