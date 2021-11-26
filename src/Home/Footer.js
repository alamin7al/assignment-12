import React from 'react';
import './Footer.css'
import { FaFacebook, FaGithub, FaSnapchat, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div class="footer-dark">
                <footer>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 col-md-3 item">
                                <h3>Services</h3>
                                <ul>
                                    <li>Specialized Cycle </li>
                                    <li>rugged Cycale</li>
                                    <li>Rerjmila Cycale</li>
                                </ul>
                            </div>
                            <div class="col-sm-6 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li>canvas bag</li>
                                    <li>initially</li>
                                    <li>California</li>
                                </ul>
                            </div>
                            <div class="col-md-6 item text">
                                <h3>BiCycale Store</h3>
                                <p>Specialized was founded in 1974 by Mike Sinyard. Based in California, the company initially focused on importing Italian parts </p>
                            </div>
                            <div class="col item social">
                                <div className="row d-flex">
                                    <div className="col-md-4">
                                        <p className='fs-2 ms-3 text-white'> <FaGithub className='text-primary' /> GitHum</p>
                                        <p className='fs-2 ms-3 text-white'> <FaTwitter className='text-primary' /> Twitter</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p className='fs-2 ms-3 text-white'> <FaFacebook className='text-primary' /> FaceBook</p>
                                        <p className='fs-2 ms-3 text-white'> <FaSnapchat className='text-primary' /> SnapChat</p>

                                    </div>
                                </div>







                            </div>
                        </div>
                        <p class="copyright">Bicycle Stores
                            © 2020</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;