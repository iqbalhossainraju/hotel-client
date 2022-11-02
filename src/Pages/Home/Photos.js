import React, { useEffect, useState } from 'react';
import PhotoGallery from './PhotoGallery';

const Photos = () => {
    const [photos, setPhotos] = useState();
    useEffect(() => {
        fetch(`photos.json`)
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])
    return (
        <div>
            {
                photos.map(photo => <PhotoGallery
                    key={photo._id}
                    photo={photo}
                ></PhotoGallery>)
            }
        </div>
    );
};

export default Photos;