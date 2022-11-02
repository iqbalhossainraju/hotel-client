import React from 'react';

const ClientEcprience = ({ clientExprience }) => {
    const { img, title, time, description } = clientExprience;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                <p>{time}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ClientEcprience;