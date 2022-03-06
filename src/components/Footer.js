import React from 'react';
import './Footer.css';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

function Footer() {

    const { closeSubmenu } = useGlobalContext();

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
     };
  return (
    

<div class="footersection" id="footerdiv" onMouseOver={closeSubmenu}>

    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-6 col-12 footer-div text-center">
                <div>
                    <h3>ABOUT STIVIN</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta adipisci recusandae sed natus, beatae quidem! Maiores in ut, aliquid quia ea debitis sunt fugiat quod.</p>
                    
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 footer-div text-center">
                <div>
                    <h3>NAVIGATION LINKS</h3>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/services">Services</Link></li>
                   <li><Link to="/developers">Team</Link></li>
                   <li><Link to="/projects">Projects</Link></li>
                   <li><Link to="/contact-us">Contact</Link></li>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 footer-div text-center">
                <div>
                    <h3>NEWSLETTER</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta adipisci recusandae sed natus, beatae </p>

                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12  col-12">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control news-input" placeholder="@example.com" />
                                    <div class="input-group-append">
                                        <span class="input-group-text">subscribe</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-5 text-center">
            <p>Copyrigth &copy;2019 All rights reserved | powered by <a href="sek-inc">sek-inc</a></p>
        </div>
    </div>
    <div class="scroll-top float-right" onClick={scrollTop}>
        <i class="fa fa-arrow-up"  id="myBtn"></i>
    </div>

    </div>
  );
}

export default Footer;
