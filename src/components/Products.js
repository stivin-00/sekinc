import React from 'react'
import { Link } from 'react-router-dom';
import picc4 from "../images/about.jpg"
import picc5 from "../images/app1.png"
import picc6 from "../images/app2.png"
import picc7 from "../images/movil-app.png"

import "./products.css"

export const Products = () => {
    return (
        <>
        <div className="abootpp"> 
            <h1>Few of Our Projects</h1>
                        <section class="aboutp sectionp bd-containerp" id="about">
                <div class="about__containerp  bd-gridp">
                    <div class="about__datap">
                
                        <h2 class="section-titlep about__initialp">Austinos</h2>
                        <p class="about__descriptionp">We cook the best food in the entire city, with excellent customer service, the best meals and at the best price, visit us.</p>
                        <Link to="/" class="button btn">explore</Link>
                    </div>

                    <img src={picc4} alt="" class="about__imgp"/>
                </div>
                <hr/>
                <div class="about__containerp  bd-gridp">
                    <div class="about__datap">
                
                        <h2 class="section-titlep about__initialp">Austinos</h2>
                        <p class="about__descriptionp">We cook the best food in the entire city, with excellent customer service, the best meals and at the best price, visit us.</p>
                        <Link to="/" class="button btn">explore</Link>
                    </div>

                    <img src={picc4} alt="" class="about__imgp"/>
                </div>
                <hr/>
                <div class="about__containerp  bd-gridp">
                    <div class="about__datap">
                
                        <h2 class="section-titlep about__initialp">Austinos</h2>
                        <p class="about__descriptionp">We cook the best food in the entire city, with excellent customer service, the best meals and at the best price, visit us.</p>
                        <Link to="/" class="button btn">explore</Link>
                    </div>

                    <img src={picc4} alt="" class="about__imgp"/>
                </div>
                <hr/>
                <div class="about__containerp  bd-gridp">
                    <div class="about__datap">
                
                        <h2 class="section-titlep about__initialp">Austinos</h2>
                        <p class="about__descriptionp">We cook the best food in the entire city, with excellent customer service, the best meals and at the best price, visit us.</p>
                        <Link to="/" class="button btn">explore</Link>
                    </div>

                    <img src={picc4} alt="" class="about__imgp"/>
                </div>
                <hr/>
            </section>


            <section class="appp sectionp bd-containerp">
                <div class="app__containerp bd-gridp">
                    <div class="app__datap">
          
                        <h2 class="section-titlep app__initialp">App is aviable</h2>
                        <p class="app__descriptionp">Find our application and download it, you can make reservations, food orders, see your deliveries on the way and much more.</p>
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