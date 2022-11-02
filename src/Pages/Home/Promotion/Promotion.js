import React from 'react';
import promoBg from '../../../assets/background/promotion-bg.jpg';
import promoBg2 from '../../../assets/background/promotion-bg2.jpg';
import './Promotion.css';

const Promotion = () => {
    return (
        <div class="img-container my-5">
            <h2 className="text-3xl inline-block font-bold">Promotion</h2>
            <div class="pTitle mx-5"> </div>
            <p className="text-xl inline-block">TAKE ADVANTAGE OF OUR FEATURED OFFERS</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-5">
                <div class="container">
                    <img src={promoBg} alt="Avatar" class="image" />
                    <div class="promo-overlay">
                        <div class="promo-overlay uppercase">
                            <div class="textPromo flex mb-5">
                                <h2>long stay</h2>
                                <p>small town</p>
                            </div>
                            <div class="textPromo mt-14">
                                <h2>more information</h2>
                                <button className="btn btn-primary w-full">reserve</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <img src={promoBg2} alt="Avatar" class="image" />
                    <div class="promo-overlay-2 uppercase">
                        <div class="textPromo-2 flex mb-5">
                            <h2>long stay</h2>
                            <p>small town</p>
                        </div>
                        <div class="textPromo-2 mt-14">
                            <h2>more information</h2>
                            <button className="btn btn-primary w-full">reserve</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotion;