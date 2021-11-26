import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://infinite-hollows-46898.herokuapp.com/emailuser/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json)
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)

                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <h3>Make Admin</h3>

            <form className='w-50 mx-auto text-start' onSubmit={handleAdminSubmit}>
                <div className="mb-3 ">
                    <label for="exampleInputEmail1" class="form-label ">Email address</label>
                    <input

                        onBlur={handleOnBlur}
                        type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className=''>
                    <button type="submit" class="text-start btn btn-primary">Make Admin</button>

                </div>
            </form>
            {success && <div className="alert alert-primary" role="alert">
                A simple primary alert—check it out!
            </div>}
        </div>
    );
};

export default MakeAdmin;