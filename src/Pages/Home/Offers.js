import React from 'react';
import offerBg from '../../assets/background/offer-bg.jpeg';
import offerBg2 from '../../assets/background/offer-bg2.png';

const Offers = () => {
    return (
        <div>
            <div className="my-10 uppercase">
                <h2 className="text-3xl font-bold text-primary">Offers</h2>
                <p className="font-bold my-2">Promotions, deals, and special offers for you</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="p-10 text-white" style={{ background: `url(${offerBg})`, backgroundSize: 'cover' }}>
                        <h2>Save 15% with Late Escape Deals</h2>
                        <p>Check one more destination off your</p>
                        <span className="block">wishlist</span>
                        <button className="btn btn-primary">explore deals</button>
                    </div>
                    <div className="p-10 text-white" style={{ background: `url(${offerBg2})`, backgroundSize: 'cover' }}>
                        <h2>Save 15% with Late Escape Deals</h2>
                        <p>Check one more destination off your</p>
                        <span className="block">wishlist</span>
                        <button className="btn btn-primary">explore deals</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;