import React, { useState } from 'react';
import { toast } from 'react-toastify';
import bgImage from '../../assets/background/bg.jpg';
const Banner = () => {
    const [adult, setAdult] = useState(0);
    const [children, setChildren] = useState(0);
    return (
        <div className="hero min-h-screen" style={{ background: `url(${bgImage})`, backgroundSize: 'cover' }}>
            <div class="hero-overlay bg-opacity-80"></div>
            <div className="hero-content flex-col lg:flex-row-reverse uppercase px-14">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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

                        <div class="dropdown dropdown-top">
                            <label tabindex="0" class="btn btn-active btn-primary text-white m-1 w-full">Guests</label>
                            <div tabindex="0" class="dropdown-content card card-compact p-2 shadow bg-primary text-secondary bg-gradient-to-r from-primary to-secondary w-full">

                                <div class="card-body text-white">
                                    <div class="flex font-bold text-primary bg-white p-3 rounded justify-between">
                                        <h4>adult:</h4>
                                        <div>
                                            <button
                                                onClick={() => {
                                                    if (adult > 0) { setAdult(adult - 1); }
                                                    else { toast.error("Sorry, 0 limit reached."); setAdult(0); }
                                                }}> - </button>
                                            <span class="font-bold text-primary p-2">{adult}</span>
                                            <button onClick={() => { setAdult(adult + 1); }}>+</button>
                                        </div>
                                    </div>

                                    <div class="flex font-bold text-primary bg-white p-3 rounded justify-between">
                                        <h4>Babies:</h4>
                                        <div>
                                            <button onClick={() => {
                                                if (children > 0) { setChildren(children - 1); }
                                                else { toast.error("Sorry, 0 limit reached."); setChildren(0); }
                                            }}> - </button>
                                            <span class="font-bold text-primary p-2">{children}</span>
                                            <button onClick={() => { setChildren(children + 1); }}>+</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Apply Promo Code:</span>
                                </label>
                                <label class="input-group">
                                    <input type="text" placeholder="write promotion code" class="input outline-none" />
                                    <button className="btn btn-primary btn-active">Apply</button>
                                </label>
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white btn-active">Apply</button>
                        </div>
                    </div>
                </div>
                <div className="text-center lg:text-left text-white text-3xl">
                    <span className="text-2xl">THE PLACE WHERE</span><br />
                    <span class="relative m-2">
                        <span class="block absolute -inset-1 -skew-y-3 bg-pink-500" aria-hidden="true"></span>
                        <span class="relative text-white">TIME STOPS</span>
                    </span>
                    <br />
                    <span>Welcome to Hotel paradiso in world largest sea beatch.</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;