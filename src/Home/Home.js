import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Homesection from './Homesection';
import Products from './Products';
import RevewHome from './RevewHome';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Products></Products>
            <RevewHome></RevewHome>
            <Homesection/>
            <Footer></Footer>
        </div>
    );
};

export default Home;