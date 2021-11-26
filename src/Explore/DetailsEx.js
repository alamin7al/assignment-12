import React, { useEffect, useState } from 'react';
import { useForm, } from "react-hook-form";
import {
    useParams

} from "react-router-dom";
import useAuth from '../Login/useAuth';
const DetailsEx = () => {
    const [detailsEx, setdetailsEx] = useState([])
    const { id } = useParams()
    const {  user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    useEffect(() => {
        fetch(`https://infinite-hollows-46898.herokuapp.com/single/${id}`)
            .then(res => res.json())
            .then(data => setdetailsEx(data))
    }, [])
    console.log(detailsEx);
    const onSubmit = data => {

        fetch('https://infinite-hollows-46898.herokuapp.com/orderplace', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('We recived your order.');

                }

                // history.push(redirect);

            })
       
       
    };
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card-body rounded rounded-5 bg-secondary">
                            <img  src={detailsEx?.img} class="card-img-top rounded rounded-5 border border-5 mb-3" alt="..." />
                            <p className="card-text fs-3 text-light">Name:{detailsEx?.name}</p>
                            <p className="card-text text-light fs-5   ">Description: {detailsEx?.desc}</p>
                            <p className="card-text text-light fs-5">Price {detailsEx?.price}</p>
                        </div>
                    </div>

                    <div className="col-md-7">
                        <form className="shipping-form w-50 mx-auto " onSubmit={handleSubmit(onSubmit)}>

                            <div className="mb-3 text-start">
                                <label for="exampleInputEmail1" className="form-label">User Name</label>
                                <input defaultValue={user.displayName} {...register("name")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3 text-start">
                                <label for="exampleInputPassword1" className="form-label">User Email</label>
                                <input defaultValue={user.email} {...register("email", { required: true })} className="form-control" id="exampleInputPassword1" />
                            </div>

                            {errors.email && <span className="error">This field is required</span>}

                            {detailsEx.name && <div className="mb-3 text-start">
                                <label for="exampleInputPassword1" className="form-label">Product name</label>
                                <input defaultValue={detailsEx.name} placeholder="Address"  {...register("productName")} className="form-control" id="exampleInputPassword1" />

                            </div>}
                            
                            <div className="mb-3 text-start">

                                <label for="exampleInputPassword1" className="form-label">City Name</label>
                                <input placeholder="City"  {...register("city")} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 text-start">
                                <label for="exampleInputPassword1" className="form-label">Number</label>
                                <input placeholder="phone number" {...register("phone")} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div>



            </div>

        </div>
    );
};

export default DetailsEx;