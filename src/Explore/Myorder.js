import React, { useEffect, useState } from 'react';
import useAuth from '../Login/useAuth';
import  './Myorder.css'
// import {
//     useParams

// } from "react-router-dom";

const MYorder = () => {
    const { user } = useAuth()
    const [myorder, setMyorder] = useState([])
    const [isdeleted, setDeleted] = useState(null)

    useEffect(() => {
        fetch(`https://infinite-hollows-46898.herokuapp.com/orderplace`)
            .then(res => res.json())
            .then(data => setMyorder(data))
    }, [isdeleted])
    const myorders = myorder?.filter(order => order.email === user.email)


    const handleDeleted = (id) => {
        const procces = window.confirm('Are You Sure, You Want To Delet')
        if (procces) {
            fetch(`https://infinite-hollows-46898.herokuapp.com/orderdelet/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        setDeleted(true)
                        alert('deleted successfull')
                    } else {
                        setDeleted(false)
                    }

                })
        }


    }
    console.log(myorders);
    return (
        <div className='back'>
            <div className="container ">
                <h1 className='text-center fs-1 lead mb-1 text-secondary'>My Order List</h1>
                <div className="container">
                    <div className="row">

                        {
                            myorders.map(order =>
                                <div className="col-md-6  ">

                                    <div className="p-3 card-body shadow p-3 mb-5 bg-body rounded">
                                
                                        <p className=" card-title fs-5 text-primary">Order id : {order._id}</p>
                                        <p className="card-title fs-5 text-primary">Order Name : {order.productName}</p>
                                      


                                        <p className="card-title  text-success" >Your Name : {order.name}</p>
                                        <p className="card-title  text-success">Your Email : {order.email}</p>
                                        <p className="card-title  text-success">Your Number : {order.phone}</p>
                                        <button onClick={() => handleDeleted(order._id)} className='btn btn-outline-dark btn-sm'>Delete</button>
                                       
                                    </div>
                                </div>
                            )

                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MYorder;