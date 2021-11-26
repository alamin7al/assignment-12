import React from 'react';
import img from '../images/coen-van-de-broek-OFyh9TpMyM8-unsplash.jpg'
const Homesection = () => {
    return (
        <div className='container'>
            <h1 className='text-secondary fs-1 text-center mt-3'>Best Rider </h1>
            <div className=" my-5 bg-dark p-3">
                <div className="row">
                    <div className="col-md-7 ">
                        <img className='w-100 h-100' rounded rounded-5 src={img} alt="" />
                    </div>
                    <div className="col-md-5 p-2">
                        <h1 className='text-primary '> Bicycle brands offers an arra</h1>
                        <p className='lead fw-normal text-white'>Specialized was founded in 1974 by Mike Sinyard. Based in California, the company initially focused on importing Italian parts The Trek 850, in 1983, was the first mountain bikes they ever released and it soon caught on that Trek was a name to remember</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homesection;