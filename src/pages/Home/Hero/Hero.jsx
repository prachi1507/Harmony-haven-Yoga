import React from 'react';
import bgImg from '../../../assets/home/banner-1.jpg';
const Hero = () => {
    return (
        <div className='min-h-screen bg-cover' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="min-h-screen flex justify-start pl-11 text-white items-center bg-black bg-opacity-60">
                <div className="">
                    <div className="space-y-4">
                        <h3 className='md:text-4xl text-2xl'>WE PROVIDES</h3>
                        <h1 className='md:text-7xl text-4xl font-bold '>Best Yoga Online</h1>
                        <div className="md:w-1/2">
                            <p className=''>Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;