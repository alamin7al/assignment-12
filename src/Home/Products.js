import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Products.css'
const Products = () => {
    const [cycales, setCyales] = useState([])

    useEffect(() => {
        fetch('https://infinite-hollows-46898.herokuapp.com/cycle')
            .then(res => res.json())
            .then(data => setCyales(data))
    }, [])
    return (
        <div className='bg '>
            <div className='container '>
                <h1 className='text-secondary fs-1 text-center my-3'>Our Services</h1>
                <p className='my-1 text-success fs-4'> Trainers. The Trek FX1 Is The Best Hybrid Fitness Bike</p>
                <div className='row  shadow p-2 mb-2  rounded '>
                    {
                        cycales.slice(0, 6).map(cycale =>
                            <div className=' col-xs-6 col-sm-6 col-md-6 mt-2  col-lg-4 shadow-sm p-3 mb-5  rounded bg'>
                                <div className="card h-100 rounded-5 mt-2 bg">
                                    <img src={cycale?.img} className=" w-100 card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title name">{cycale.name}</h5>
                                        <p className=" card-text desc">{cycale.desc.slice(0,130)}</p>
                                        <p className="card-text">Price: {cycale.price}</p>
                                        <Link to={`/detailsEx/${cycale._id}`}><button  className="btn btn-outline-dark btn-lg">Booking</button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                </div>
            </div>
            );
};

            export default Products;