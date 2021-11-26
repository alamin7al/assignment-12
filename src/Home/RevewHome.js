import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {

    state = {
        data: []
    }
    async componentDidMount() {
        try {
            const res = await fetch('https://infinite-hollows-46898.herokuapp.com/revew');
            const data = await res.json()
            console.log(data);
            this.setState({ data: data })
        } catch (error) {
            console.log(error);
        }

    }
    render() {
        const { data } = this.state
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className='my-5' >
                <div className="container">
                <h1 className='text-secondary fs-1 text-center '>Revew Our Website</h1>
                <p className='my-1 text-success fs-4  mx-auto'>Putting external links allows you to better reference your site. For this type of footer, you will have the same style  </p>
                    <Slider {...settings}>
                        {
                            data.map(item => {
                                return<div className="card w-100   bg-secondary">
                                <img src={item?.img} className="mt-3 rounded mx-auto d-block w-50 img-fluid mx-auto card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-light fs-3 fw-normal">{item.name}</h5>
                                    <p className="card-text text-Info fs-5 text-white">{item.desc.slice(0,130)}</p>
                                    
                                </div>
                            </div>
                            })
                        }
                    </Slider>
                </div>
            </div>
        );
    }
}