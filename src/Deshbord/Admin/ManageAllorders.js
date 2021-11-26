import React from 'react';
import { useEffect, useState } from 'react';
import  '../../Explore/Myorder.css'

const ManageAllorders = () => {
    const [users, setUser] = useState([])
    const [isdeleted, setDeleted] = useState(null)
    useEffect(() => {
        fetch('https://infinite-hollows-46898.herokuapp.com/orderplace')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [isdeleted])
    const handleDelet = (id) => {
        const procces = window.confirm('Are You Sure, You Want To Delet')
        if (procces) {
            fetch(`https://infinite-hollows-46898.herokuapp.com/manageorder/${id}`, {
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
    console.log(users);
    return (
        <div className='back'>
            <h1 className='text-center fs-1 lead mb-1 text-secondary'>Manage All Order list</h1>

            <div className="container">
                <div className="row">
                    {
                        users.map(user => <div className="col-md-4">

                            <div className="card-body p-3 card-body shadow p-3 mb-5 bg-body rounded">
                                <p className="card-title fs-3 text-success">Name: {user.name}</p>
                                <p className="card-title text-success">Email: {user.email}</p>
                                <p className="card-title text-success">Number: {user.phone}</p>
                                <p className="card-title text-success">City: {user.city}</p>

                                <p className="card-title text-primary">ProductName: {user?.productName.slice(0, 30)}</p>
                                <button onClick={() => handleDelet(user._id)} className='btn btn-outline-dark'>Delete</button>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};


export default ManageAllorders;