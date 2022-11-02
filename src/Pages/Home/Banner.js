import React, { useState } from 'react';
import { toast } from 'react-toastify';
import bgImage from '../../assets/background/bg.jpg';
const Banner = () => {
    const [adult, setAdult] = useState(0);
    const [children, setChildren] = useState(0);
    return (
        <div className="hero max-h-screen" style={{ background: `url(${bgImage})`, backgroundSize: 'cover' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content flex-col lg:flex-row-reverse uppercase">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:mr-14">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">arrival</span>
                            </label>
                            <input type="date" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">departure</span>
                            </label>
                            <input type="date" className="input input-bordered" />
                        </div>

                        <div className="dropdown dropdown-top">
                            <label tabIndex="0" className="btn btn-active btn-primary text-white m-1 w-full">Guests</label>
                            <div tabIndex="0" className="dropdown-content card card-compact p-2 shadow bg-primary text-secondary bg-gradient-to-r from-primary to-secondary w-full">

                                <div className="card-body text-white">
                                    <div className="flex font-bold text-primary bg-white p-3 rounded justify-between">
                                        <h4>adult:</h4>
                                        <div>
                                            <button
                                                onClick={() => {
                                                    if (adult > 0) { setAdult(adult - 1); }
                                                    else { toast.error("Sorry, 0 limit reached."); setAdult(0); }
                                                }}> - </button>
                                            <span className="font-bold text-primary p-2">{adult}</span>
                                            <button onClick={() => { setAdult(adult + 1); }}>+</button>
                                        </div>
                                    </div>

                                    <div className="flex font-bold text-primary bg-white p-3 rounded justify-between">
                                        <h4>Babies:</h4>
                                        <div>
                                            <button onClick={() => {
                                                if (children > 0) { setChildren(children - 1); }
                                                else { toast.error("Sorry, 0 limit reached."); setChildren(0); }
                                            }}> - </button>
                                            <span className="font-bold text-primary p-2">{children}</span>
                                            <button onClick={() => { setChildren(children + 1); }}>+</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="justify-center">
                            <label className="label">
                                <span className="label-text">Apply Promo Code:</span>
                            </label>
                            <label className="input-group ml-4">
                                <input type="text" placeholder="write promotion code" className="input outline-none" />
                                <button className="btn btn-primary btn-active">Apply</button>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white btn-active">Apply</button>
                        </div>
                    </div>
                </div>
                <div className="text-center lg:text-left text-white text-3xl lg:ml-14">
                    <span className="text-2xl">THE PLACE WHERE</span><br />
                    <span className="relative m-2">
                        <span className="block absolute -inset-1 -skew-y-3 bg-pink-500" aria-hidden="true"></span>
                        <span className="relative text-white">TIME STOPS</span>
                    </span>
                    <br />
                    <span>Welcome to Hotel paradiso in world largest sea beatch side hotel.</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;