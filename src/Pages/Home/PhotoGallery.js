import React from 'react';
import img1 from '../../assets/photo-1.jpg';
import img10 from '../../assets/photo-10.jpg';
import img11 from '../../assets/photo-11.jpg';
import img2 from '../../assets/photo-2.jpg';
import img3 from '../../assets/photo-3.jpg';
import img4 from '../../assets/photo-4.jpg';
import img5 from '../../assets/photo-5.jpg';
import img7 from '../../assets/photo-7.jpg';
import img8 from '../../assets/photo-8.jpg';
import img9 from '../../assets/photo-9.jpg';

import './PhotoGallery.css';


const PhotoGallery = () => {
    return (
        <div>
            <h2 className="text-primary font-bold text-3xl text-center mt-8">Photo Gallery</h2>
            {/* For Large device or medium device*/}
            <div class="max-w-screen-2xl mx-auto px-4 py-8 lg:py-10 relative bg-gray-50 hidden lg:block md:block">
                <div class="flex flex-col md:flex-row gap-2">
                    <div class="flex flex-1 flex-col gap-2">
                        <div class="flex flex-1 flex-col hover:scale-125">
                            {/* <!-- img_01 -->  */}
                            <img class="object-cover h-full" src={img1} />
                        </div>
                        <div class="hidden md:flex flex-1 flex-row gap-2">
                            <div class="flex flex-1 flex-col hover:scale-125">
                                {/* <!-- img_02 -->  */}
                                <img class="object-cover h-full" src={img2} />
                            </div>
                            <div class="hidden md:flex flex-1 flex-col  hover:scale-125">
                                {/* <!-- img_03 -->  */}
                                <img class="object-cover h-full" src={img3} />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-1 flex-col gap-2">
                        <div class="hidden md:flex flex-1 flex-row gap-2">
                            <div class="flex flex-1 flex-col  hover:scale-125">
                                {/* <!-- img_04 --> */}
                                <img class="object-cover h-full" src={img4} />
                            </div>
                            <div class="hidden md:flex flex-1 flex-col  hover:scale-125">
                                {/* <!-- img_05 --> */}
                                <img class="object-cover h-full" src={img5} />
                            </div>
                        </div>
                        <div class="flex flex-1 flex-col  hover:scale-125">
                            {/* <!-- img_06 --> */}
                            <img class="object-cover h-full" src={img7} />
                        </div>
                    </div>
                </div>
            </div>

            {/* for mobile device */}
            <div class="max-w-screen-2xl mx-auto px-4 py-8 lg:py-10 relative bg-white lg:hidden md:hidden">
                <div class="flex flex-col md:flex-row gap-2">
                    <div class="flex flex-1 flex-col">
                        <div class="flex flex-1 flex-col  hover:scale-125">
                            {/* <!-- img_01 --> */}
                            <img class="object-cover h-full " src={img7} alt='' />
                        </div>
                    </div>
                    <div class="flex flex-1">
                        <div class="grid grid-cols-2 gap-2">
                            {/* <!-- img_02 --> */}
                            <div className="hover:scale-125">
                                <img class="object-cover h-full" src={img8} alt='' />
                            </div>
                            {/* <!-- img_03 --> */}
                            <div className="hover:scale-125">
                                <img class="object-cover h-full" src={img9} alt='' />
                            </div>
                            {/* <!-- img_04 --> */}
                            <div className="hover:scale-125">
                                <img class="object-cover h-full" src={img10} alt='' />
                            </div>
                            {/* <!-- img_05 --> */}
                            <div className="hover:scale-125">
                                <img class="object-cover h-full" src={img11} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;