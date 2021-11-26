import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const MoreProducts = () => {
    const [cycales, setCyales] = useState([])

    useEffect(() => {
        fetch('https://infinite-hollows-46898.herokuapp.com/cycle')
            .then(res => res.json())
            .then(data => setCyales(data))
    }, [])
    return (
        <div>
            <div className='container my-5'>
                <h1 className='fs-1 my-3 text-secondary'>Manage All Order services</h1>
                <h4 className='fs-5 mb-3 w-50 mx-auto text-primary'>Our Bset Product Services Here You Can Choaise Now And Early Acces <br /> Or Booking Now </h4>
                <div className='row'>
                    {
                        cycales.slice(6, 30).map(cycale =>
                            <div className=' col-md-6 col-sm-6 col-lg-4 mb-3'>
                                <div className="card h-100 ">
                                    <img src={cycale?.img} className="h-100 w-100 card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title name">{cycale.name}</h5>
                                        <p className="card-text desc">{cycale.desc.slice(0, 130)}</p>
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

export default MoreProducts;