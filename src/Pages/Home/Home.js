import React from 'react';
import Banner from './Banner';
import CarouselSide from './CarouselSide';
import PhotoGallery from './PhotoGallery';
import Promotion from './Promotion/Promotion';

const Home = () => {
    return (
        <div>
            <Banner />
            <Promotion />
            <PhotoGallery />
            <CarouselSide />
        </div>
    );
};

export default Home;