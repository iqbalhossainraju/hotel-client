import React from 'react';
import Banner from './Banner';
import PhotoGallery from './PhotoGallery';
import Promotion from './Promotion/Promotion';

const Home = () => {
    return (
        <div>
            <Banner />
            <PhotoGallery />
            <Promotion />
        </div>
    );
};

export default Home;