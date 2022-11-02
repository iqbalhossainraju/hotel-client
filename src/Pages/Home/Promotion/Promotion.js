import React from 'react';
import { Link } from 'react-router-dom';
import promoBg from '../../../assets/background/promotion-bg.jpg';
import promoBg2 from '../../../assets/background/promotion-bg2.jpg';
import './Promotion.css';

const Promotion = () => {
    return (
        <div className="img-container my-5">
            <h2 className="text-3xl inline-block font-bold text-primary">Promotion</h2>
            <div className="pTitle mx-5"> </div>
            <p className="text-xl inline-block text-secondary">TAKE ADVANTAGE OF OUR FEATURED OFFERS</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-5">
                <div className="container">
                    <img src={promoBg} alt="Avatar" className="image" />
                    <div className="promo-overlay">
                        <div className="promo-overlay uppercase">
                            <div className="textPromo flex mb-5">
                                <h2>long stay</h2>
                                <p>small town</p>
                            </div>
                            <div className="textPromo mt-14">
                                <h2>more information</h2>
                                <Link to="http://" className="btn btn-primary w-full">reserve</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <img src={promoBg2} alt="Avatar" className="image" />
                    <div className="promo-overlay-2 uppercase">
                        <div className="textPromo-2 flex mb-5">
                            <h2>long stay</h2>
                            <p>small town</p>
                        </div>
                        <div className="textPromo-2 mt-14">
                            <h2>more information</h2>
                            <Link to="http://" className="btn btn-primary w-full">reserve</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotion;