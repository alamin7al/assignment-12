import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import AuthProvider from './Login/AuthProvider';
import Login from './Login/Login';
import Register from './Login/Register';
import Home from './Home/Home';
import Explore from './Explore/Explore';
import DetailsEx from './Explore/DetailsEx';
import PrivateRoute from './Login/PrivateRoute';
import MYorder from './Explore/Myorder';
import Navigation from './Share/Navigation';
import Deshbord from './Deshbord/Dashboard';
// import ManageAllorders from './Deshbord/Admin/ManageAllorders';
const App = () => {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/dashboard">
              <Deshbord></Deshbord>
            </Route>
            <Route path="/myorder">
              <MYorder></MYorder>
            </Route>
            {/* <Route path="/allorder">
              <ManageAllorders></ManageAllorders>
            </Route> */}
            <PrivateRoute exact path="/detailsEx/:id">
              <DetailsEx></DetailsEx>
            </PrivateRoute>

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;