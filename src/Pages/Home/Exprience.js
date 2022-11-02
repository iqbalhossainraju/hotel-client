import React from 'react';
import bgExp from '../../assets/background/bg-seosimple.png';

const Exprience = () => {
    return (
        <div class="max-h-screen flex justify-between items-center my-32 p-5 lg:hidden" style={{ background: `url(${bgExp})`, backgroundSize: 'cover' }}>
            <div className='flex-1 px-5'>
                <h3 className='text-3xl text-white photoGallery'>Petunia experiences</h3>
                <p className='text-white my-5'>Exclusive rooftops or the entire hotel for your private use.</p>
                <p className='text-white pb-5'>Enjoy our facilities just for you and your loved ones. Maximum privacy for your events in Petunia Ibiza.</p>
                <button className="btn btn-primary w-36 uppercase text-white">more info</button>
            </div>
            <div className='flex-1'>
                <div class="h-96 carousel carousel-vertical rounded-box">
                    <div class="carousel-item h-full">
                        <img src="https://placeimg.com/256/400/arch" />
                    </div>
                    <div class="carousel-item h-full">
                        <img src="https://placeimg.com/256/400/arch" />
                    </div>
                    <div class="carousel-item h-full">
                        <img src="https://placeimg.com/256/400/arch" />
                    </div>
                    <div class="carousel-item h-full">
                        <img src="https://placeimg.com/256/400/arch" />
                    </div>
                    <div class="carousel-item h-full">
                        <img src="https://placeimg.com/256/400/arch" />
                    </div>
                    <div class="carousel-item h-full">
                        <img src="https://placeimg.com/256/400/arch" />
                    </div>
                    <div class="carousel-item h-full">
                        <img src="https://placeimg.com/256/400/arch" />
                    </div>
                </div>
                {/* <div className='mb-[-80px] ml-72'>
                    <div class="h-96 carousel carousel-vertical rounded-box">
                        <div class="carousel-item h-full">
                            <img src="https://placeimg.com/256/400/arch" />
                        </div>
                        <div class="carousel-item h-full">
                            <img src="https://placeimg.com/256/400/arch" />
                        </div>
                        <div class="carousel-item h-full">
                            <img src="https://placeimg.com/256/400/arch" />
                        </div>
                        <div class="carousel-item h-full">
                            <img src="https://placeimg.com/256/400/arch" />
                        </div>
                        <div class="carousel-item h-full">
                            <img src="https://placeimg.com/256/400/arch" />
                        </div>
                        <div class="carousel-item h-full">
                            <img src="https://placeimg.com/256/400/arch" />
                        </div>
                        <div class="carousel-item h-full">
                            <img src="https://placeimg.com/256/400/arch" />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Exprience;