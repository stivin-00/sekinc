import React from 'react'
import { Link } from 'react-router-dom';
import "./team.css"

import picc from "../../images/photo 7"
import picc2 from "../../images/img-4.jpg"

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
                    <img src={picc2} alt="profile imd" className="profile-imgt" />
                    <h3>Stephen Ekele</h3>
                    </div>
                    <div className="helllo">
                    <p className="job-titlet">Lead Developer</p>
                    <p className="aboutt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus omnis laborum suscipit nemo est, veniam ut, at modi exercitationem natus ipsum, explicabo deleniti atque ipsam quia. Tenetur, nihil neque?</p>
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
                    <h3>Stephen Ekele</h3>
                    </div>
                    <div className="helllo">
                    <p className="job-titlet">Lead Developer</p>
                    <p className="aboutt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus omnis laborum suscipit nemo est, veniam ut, at modi exercitationem natus ipsum, explicabo deleniti atque ipsam quia. Tenetur, nihil neque?</p>
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
                    <h3>Stephen Ekele</h3>
                    </div>
                    <div className="helllo">
                    <p className="job-titlet">Lead Developer</p>
                    <p className="aboutt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus omnis laborum suscipit nemo est, veniam ut, at modi exercitationem natus ipsum, explicabo deleniti atque ipsam quia. Tenetur, nihil neque?</p>
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
                    <h3>Stephen Ekele</h3>
                    </div>
                    <div className="helllo">
                    <p className="job-titlet">Lead Developer</p>
                    <p className="aboutt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus omnis laborum suscipit nemo est, veniam ut, at modi exercitationem natus ipsum, explicabo deleniti atque ipsam quia. Tenetur, nihil neque?</p>
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
                    <h3>Stephen Ekele</h3>
                    </div>
                    <div className="helllo">
                    <p className="job-titlet">Lead Developer</p>
                    <p className="aboutt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus omnis laborum suscipit nemo est, veniam ut, at modi exercitationem natus ipsum, explicabo deleniti atque ipsam quia. Tenetur, nihil neque?</p>
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