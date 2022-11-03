import React from 'react';
import Banner from './Banner';
import CarouselSide from './CarouselSide';
import ClientEcpriences from './ClientEcpriences';
import Exprience from './Exprience';
import Offers from './Offers';
import PhotoGallery from './PhotoGallery';
import Promotion from './Promotion/Promotion';

const Home = () => {
    return (
        <div>
            <Banner />
            <Offers />
            <Promotion />
            <Exprience />
            <CarouselSide />
            <ClientEcpriences />
            <PhotoGallery />
        </div>
    );
};

export default Home;