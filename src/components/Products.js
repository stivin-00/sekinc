import React from 'react'
import { Link } from 'react-router-dom';
import picc5 from "../images/app1.png"
import picc6 from "../images/app2.png"
import picc61 from "../images/sek-1.jpg"
import picc62 from "../images/sek-2.jpg"
import picc63 from "../images/sekde.png"
import picc64 from "../images/sekam.png"
import picc65 from "../images/sekef.png"
import picc7 from "../images/apppp.svg"
import picc8 from "../images/mycuu2.jpg"

import "./products.css"

export const Products = () => {
    return (
        <>
        <div className="abootpp"> 
            <h1>Few of Our Projects</h1>
                        <section class="aboutp sectionp bd-containerp" id="about">
                <div class="about__containerp  bd-gridp">
                    <div class="about__datap">
                
                        <h2 class="section-titlep about__initialp">jumstore</h2>
                        <p class="about__descriptionp"> A multi category eccomerce website. also has a mobile application for it too. built with React react Native and node</p>
                        <a href='https://jumstore.netlify.app/'target="_blank" class="button btn">explore</a>
                    </div>

                    <img src={picc64} alt="" class="about__imgp"/>
                </div>
                <hr/>
                <div class="about__containerp  bd-gridp">
                    <div class="about__datap">
                
                        <h2 class="section-titlep about__initialp">eflix</h2>
                        <p class="about__descriptionp"> video streaming wibsite just like netflix but limited feature. got lots of awesome unique features, you can check it out below</p>
                        <a href='https://eflixx.netlify.app/'target="_blank" class="button btn">explore</a>
                    </div>

                    <img src={picc65} alt="" class="about__imgp"/>
                </div>
                <hr/>
                <div class="about__containerp  bd-gridp">
                    <div class="about__datap">
                
                        <h2 class="section-titlep about__initialp">decool</h2>
                        <p class="about__descriptionp">fully functional ecomerce webapp with coupon rating payment, pay on delivery features. you can try it out below</p>
                        <a href='https://decoooo.netlify.app/'target="_blank" class="button btn">explore</a>
                    </div>

                    <img src={picc63} alt="" class="about__imgp"/>
                </div>
                <hr/>
                <div class="about__containerp  bd-gridp">
                    <div class="about__datap">
                
                        <h2 class="section-titlep about__initialp">divante-fx</h2>
                        <p class="about__descriptionp">We help people increase their revenue. Our team of unique specialist can help you achieve your finacial goals</p>
                        <a href='https://floating-island-43554.herokuapp.com/'target="_blank" class="button btn">explore</a>
                    </div>

                    <img src={picc61} alt="" class="about__imgp"/>
                </div>
                <hr/>
                <div class="about__containerp  bd-gridp">
                    <div class="about__datap">
                
                        <h2 class="section-titlep about__initialp">tour-9ja</h2>
                        <p class="about__descriptionp">A social website where users get to explore Nigeria and share their experience with the world.</p>
                        <a href='https://dry-gorge-75428.herokuapp.com/'target="_blank" class="button btn">explore</a>
                    </div>

                    <img src={picc62} alt="" class="about__imgp"/>
                </div>
                <hr/>
                <div class="about__containerp  bd-gridp">
                    <div class="about__datap">
                
                        <h2 class="section-titlep about__initialp">my-cura</h2>
                        <p class="about__descriptionp">Android ecommerce app built with react native and redux. it has complete featres like sorting, notifications, order tracking, payment etc</p>
                        <a href='https://files.fm/f/zbzwvdscn'target="_blank" class="button btn">download</a>
                    </div>

                    <img src={picc8} alt="" class="about__imgp"/>
                </div>
                <hr/>
            </section>


            <section class="appp sectionp bd-containerp">
                <div class="app__containerp bd-gridp">
                    <div class="app__datap">
          
                        <h2 class="section-titlep app__initialp">App Is Coming Soon</h2>
                        <p class="app__descriptionp">Find our application and download it.</p>
                        <div class="app__storesp">
                        <Link to="/"><img src={picc5} alt="" class="app__storep"/></Link>
                            <Link to="/"><img src={picc6} alt="" class="app__storep"/></Link>
                        </div>
                    </div>

                    <img src={picc7} alt="" class="app__imgp"/>
                </div>
            </section>
            </div>
        </>
    )
};


export default Products