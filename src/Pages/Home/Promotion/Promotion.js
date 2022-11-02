import React from 'react';
import { Link } from 'react-router-dom';
import promoBg2 from '../../../assets/background/promotion-bg2.jpg';
import './Promotion.css';

const Promotion = () => {
    return (
        <div className="img-container bg-pink-50 my-5">
            <div className="text-center">
                <h2 className="font-bold text-primary promoTitle">Promotion</h2>
                {/* <div className="devide"></div> */}
                {/* <div className="pTitle mx-5 hidden lg:block"> </div> */}
                <p className="text-back promoDescription">take advantage of your futured offers</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-5 items-center p-12">
                <div className="container">
                    <h2 className="font-bold text-secondary promoTitle">Welcome to Petunia</h2>
                    <p className="text-secondary promoDescription">Your boutique hotel in Ibiza overlooking magical Es Vedrà. Experience the Mediterranean way of life from inside the walls of Petunia.</p>
                    <p className="text-back promoDescription">Petunia Ibiza is an intimate hideaway with its style and influences deeply rooted in its natural surroundings.</p>
                    <button className="btn btn-secondary text-white w-32">READ MORE</button>
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