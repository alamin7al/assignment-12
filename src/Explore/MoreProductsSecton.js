import React from 'react';
import img from '../images/istockphoto-1072444176-612x612.jpg'
import img2 from '../images/images.jpg'
const MoreProductsSecton = () => {
    return (
        <div className='my-5 mb-5'>
            <div className="container mb-5 mt-5">
                <h1 className='fs-1 text-primary mb-5 my-5'>Our Happiness </h1>
                <div className="row mb-5 my-5">
                    <div className="col-md-6 mb-5 my-5">
                        <h3 className='text-primary fs-1'>Alchemy Cycles</h3>
                        <p className='text-secondary lead fs-5'>hile Kestrel may have the first all-carbon design, Giant was the first to use computer nded in 1972, the company was named after Alberto and Anamaria, Falconi Ludovico’s kids. aided design for carbon frames. In 2004 </p>
                    </div>
                    <div className="col-md-6">
                        <img src={img} className='w-100 h-100 rounded rounded-5' alt="" />
                    </div>

                    <h3 className='my-5 mt-5 mb-4 text-center text-secondary fs-1'>Kestrel may have the first all-carbon  </h3>
                    <h3 className='text-primary fs-1'>Alchemy Cycles</h3>
                    <div className="col-md-4">
                        <img src={img2} className='w-75 h-100 rounded rounded-5' alt="" />
                    </div>
                   
                    <div className="col-md-4 mb-5  ">

                        <p className='text-secondary lead fs-5 mt-5 text-start'>By 2001 they had introduced electric-hybrid bikes for endurance riders and trainers. The Trek FX1 is the best hybrid fitness bike due to </p>
                    </div>
                    <div className="col-md-4 mb-5 my-5">

                        <p className='text-success lead fs-5 text-start'>hile Kestrel may have the first all-carbon design, Giant was the first to use computer nded in 1972, the company was named after Alberto and Anamaria, Falconi Ludovico’s kids. aided design for carbon frames. In 2004 </p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MoreProductsSecton;