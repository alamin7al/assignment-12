import React from 'react';


import logins from '../images/preview.jpg';



import useAuth from './useAuth'
import { useState, } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    NavLink,
    Route,
    useHistory,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
const Register = () => {
    const history = useHistory()
    const [loginData, setLoginData] = useState({})

    const { registerUser, isLoading, user, authError } = useAuth()

    const handleonBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newLogindata = { ...loginData }
        newLogindata[field] = value
        console.log(newLogindata);
        setLoginData(newLogindata)
    }


    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('your password didnt match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault()
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col col-md-6 w-50 mx-auto container my-5'>
                    <h2>Register</h2>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>

                        <div className="mb-3 text-start">
                            <label for="exampleInputPassword1" className="form-label ">Your Name</label>

                            <input
                                name='name'

                                className="form-control"
                                onBlur={handleonBlur}

                                id="exampleInputPassword1" />
                        </div>


                        <div className="mb-3 text-start">
                            <label for="exampleInputPassword1" className="form-label">Your Email</label>

                            <input
                                name='email'
                                type='email'
                                className="form-control"
                                onBlur={handleonBlur}

                                id="exampleInputPassword1" />
                        </div>

                        <div className="mb-3 text-start">
                            <label for="exampleInputPassword1" className="form-label">Your Password</label>

                            <input
                                name='password'
                                type="password" className="form-control"
                                onBlur={handleonBlur}

                                id="exampleInputPassword1" />
                        </div>

                        <div className="mb-3 text-start">
                            <label for="exampleInputPassword1" className="form-label">ReType Your Password</label>

                            <input
                                name='password2'
                                type="password" className="form-control"
                                onBlur={handleonBlur}

                                id="exampleInputPassword1" />
                        </div>

                        <button
                            className='btn btn-primary btn-lg'
                            type='submit'
                        >Login</button>
                        <br />
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none' }}

                            to='/login'><p
                                className=' fs-4'

                            >Already Register? Please Login</p>
                        </NavLink>
                    </form>}

                    {isLoading && <div class="spinner-border" role="status">
                        <span class="sr-only"></span>
                    </div>}
                    {user?.email && <div className="alert alert-primary" role="alert">
                        Login successfully!
                    </div>
                    }
                    {authError && <div className="alert alert-warning" role="alert">
                        {authError}
                    </div>
                    }






                </div>
                <div className=' col-md-6'>
                    <img src={logins} style={{ width: '100%' }} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Register;