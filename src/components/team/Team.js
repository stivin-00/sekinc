import React from 'react'
import { Link } from 'react-router-dom';
import "./team.css"

import picc from "../../images/photo 7"
import picc2 from "../../images/img-4.jpg"
import picc3 from "../../images/stiv.jpg"

import { useGlobalContext } from '../../context';



const Team = () => {
    const { closeSubmenu } = useGlobalContext();
    return (
        <  >
        
                <section  onMouseOver={closeSubmenu}  >
        <div className="containert">
            <h1 className="headingt">Meet The Team</h1>
            <div className="card-wrappert">

                <div className="cardt">
                    <div className="helllo">
                    <img src={picc} alt="card bg" className="card-imgt" />
                    <img src={picc3} alt="profile imd" className="profile-imgt" />
                    <h3>Stephen Ekele</h3>
                    </div>
                    <div className="helllo">
                    <p className="job-titlet">Mern-Stack Developer</p>
                    <p className="aboutt">A mern-stack developer that specializes on frontend development, fluent at HTML, CSS, JAVASCRIPT, REACT. Also good at Node.js, Python and React-Native.</p>
                    <Link to="/" className="btn">Contact</Link>
                    <ul className="social-mediat">
                        <li><a target="_blank" href='https://www.linkedin.com/in/ekele-stephen-79426a19a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BJrdE1rqQSf%2BGM6gG%2BvWSBQ%3D%3D'><i className="fab fa-linkedin"></i></a></li>
                        <li><a target="_blank" href='https://twitter.com/ekele__stephen'><i className="fab fa-twitter-square"></i></a></li>
                        <li><a target="_blank" href='https://www.instagram.com/stivin_00/'><i className="fab fa-instagram"></i></a></li>
                        <li><a target="_blank" href='https://wa.me/2348123583317?text=Hi%20Stivin%20'><i className="fab fa-whatsapp" aria-hidden="true"></i></a></li>
                    </ul>
                    </div>
                </div>
                <div className="cardt">
                    <div className="helllo">
                    <img src={picc} alt="card bg" className="card-imgt" />
                    <img src={picc2} alt="profile imd" className="profile-imgt" />
                    <h3>Ade Bello</h3>
                    </div>
                    <div className="helllo">
                    <p className="job-titlet">coming soon</p>
                    <p className="aboutt">coming soon</p>
                    <Link to="/" className="btn">Contact</Link>
                    <ul className="social-mediat">
                        <li><Link to="/"><i className="fab fa-facebook-square"></i></Link></li>
                        <li><Link to="/"><i className="fab fa-twitter-square"></i></Link></li>
                        <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                        <li><Link to="/"><i className="fa fa-whatsapp" aria-hidden="true"></i></Link></li>
                    </ul>
                    </div>
                </div>
                <div className="cardt">
                    <div className="helllo">
                    <img src={picc} alt="card bg" className="card-imgt" />
                    <img src={picc2} alt="profile imd" className="profile-imgt" />
                    <h3>Jaiye Samuel</h3>
                    </div>
                    <div className="helllo">
                    <p className="job-titlet">coming soon</p>
                    <p className="aboutt">coming soon</p>
                    <Link to="/" className="btn">Contact</Link>
                    <ul className="social-mediat">
                        <li><Link to="/"><i className="fab fa-facebook-square"></i></Link></li>
                        <li><Link to="/"><i className="fab fa-twitter-square"></i></Link></li>
                        <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                        <li><Link to="/"><i className="fa fa-whatsapp" aria-hidden="true"></i></Link></li>
                    </ul>
                    </div>
                </div>
                <div className="cardt">
                    <div className="helllo">
                    <img src={picc} alt="card bg" className="card-imgt" />
                    <img src={picc2} alt="profile imd" className="profile-imgt" />
                    <h3>seriki kamal</h3>
                    </div>
                    <div className="helllo">
                    <p className="job-titlet">coming soon</p>
                    <p className="aboutt">coming soon</p>
                    <Link to="/" className="btn">Contact</Link>
                    <ul className="social-mediat">
                        <li><Link to="/"><i className="fab fa-facebook-square"></i></Link></li>
                        <li><Link to="/"><i className="fab fa-twitter-square"></i></Link></li>
                        <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                        <li><Link to="/"><i className="fa fa-whatsapp" aria-hidden="true"></i></Link></li>
                    </ul>
                    </div>
                </div>
                <div className="cardt">
                    <div className="helllo">
                    <img src={picc} alt="card bg" className="card-imgt" />
                    <img src={picc2} alt="profile imd" className="profile-imgt" />
                    <h3>ore money</h3>
                    </div>
                    <div className="helllo">
                    <p className="job-titlet">coming soon</p>
                    <p className="aboutt">coming soon</p>
                    <Link to="/" className="btn">Contact</Link>
                    <ul className="social-mediat">
                        <li><Link to="/"><i className="fab fa-facebook-square"></i></Link></li>
                        <li><Link to="/"><i className="fab fa-twitter-square"></i></Link></li>
                        <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                        <li><Link to="/"><i className="fa fa-whatsapp" aria-hidden="true"></i></Link></li>
                    </ul>
                    </div>
                </div>

            
 

              
            </div>
        </div>
    </section>
        </>
    )
}



export default Team