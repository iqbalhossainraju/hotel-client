import React from 'react';

const CarouselSide = () => {
    const Carousel = require('3d-react-carousal').Carousel;
    let slides = [
        <img src="https://picsum.photos/800/300/?random" alt="1" />,
        <img src="https://picsum.photos/800/301/?random" alt="2" />,
        <img src="https://picsum.photos/800/302/?random" alt="3" />,
        <img src="https://picsum.photos/800/303/?random" alt="4" />,
        <img src="https://picsum.photos/800/304/?random" alt="5" />];
    return (
        <div className="my-10 bg-pink-50 p-5">
            <Carousel slides={slides} autoplay={true} interval={1000} />
        </div>
    );
};

export default CarouselSide;