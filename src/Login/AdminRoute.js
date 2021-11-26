import React from 'react';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import { Spinner } from 'react-bootstrap';

import useAuth from './useAuth';
const AdminRoute = ({ children, ...rest }) => {
    const { user,admin, isLoading } = useAuth()
    if (isLoading) { return  <div class="spinner-border" role="status">
    <span class="sr-only"></span>
</div>}
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;