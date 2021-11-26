import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        // console.log(data);

        axios.post('https://infinite-hollows-46898.herokuapp.com/cycle', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    
    return (
        <div className="add-service">
            <h2>Please Add a Service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
<br />
                <input {...register("desc", { required: true, maxLength: 200 })} placeholder="desc" />
                <br />

                <input type="number" {...register("price")} placeholder="price" />
                <br />

                <input {...register("img")} placeholder="image url" />
                <br />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;