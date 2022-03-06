import React from "react";
import { Link } from "react-router-dom";
import "./contacts.css";
// import pixx1 from "../images/shape.png"
import pixx2 from "../images/phone.png";
import pixx3 from "../images/email.png";
import pixx4 from "../images/location.png";
import pixx5 from "../images/sc.png";

const Contacts = () => {
  return (
    <>
      <div className="z">
        <div className="container">
          {/* <span className="big-circle"></span> */}
          {/* <img src={pixx1} className="square" alt="" /> */}
          <div className="form">
            <div className="contact-info">
              <h3 className="titlec">Let's get in touch</h3>
              <p className="text">
              You are a step close to wonders. Get in touch with sek-inc today for amazing deals
              </p>

              <div className="info">
                <div className="information">
                  <img src={pixx4} className="icon" alt="" />
                  <p>92 Jaja mall University of lagos, Nigeria</p>
                </div>
                <div className="information">
                  <img src={pixx3} className="icon" alt="" />
                  <p>lorem@ipsum.com</p>
                </div>
                <div className="information">
                  <img src={pixx2} className="icon" alt="" />
                  <p>+234 8123583317</p>
                </div>
              </div>

              <div className="social-media">
                <p>Connect with us :</p>
                <div className="social-icons">
                  <Link to="/">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="/">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link to="/">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link to="/">
                    <i class="fab fa-whatsapp"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <span className="circle one"></span>
              <span className="circle two"></span>

              <form action="index.html" autocomplete="off">
                <h3 className="titlec">Contact us</h3>
                <div className="input-container">
                  <label for="">Username</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="name"
                  />

                  <span>Username</span>
                </div>
                <div className="input-container">
                  <label for="">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="eg: example@you.com"
                  />

                  <span>Email</span>
                </div>
                <div className="input-container">
                  <label for="">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="input"
                    placeholder="eg: +123 1212121"
                  />

                  <span>Phone</span>
                </div>
                <div className="input-container textarea">
                  <label for="">Message</label>
                  <textarea
                    name="message"
                    className="input"
                    placeholder="write message"
                  ></textarea>

                  <span>Message</span>
                </div>
                <Link to="/">
                  {" "}
                  <input type="submit" value="Send" className="btn" />
                </Link>
              </form>
            </div>
          </div>

          <div className="form">
            <div className="contact-info">
              <div className="imageee">
                <img src={pixx5} alt="" />
              </div>
            </div>

            <div className="contact-info">
              <div className="imageee">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0665729751167!2d3.394827714266576!3d6.51325812509053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ce87e96c5f5%3A0x6f4326db80101dc!2sScholars%20Suites!5e0!3m2!1sen!2sng!4v1608296980854!5m2!1sen!2sng"
                  width="600"
                  height="450"
                  frameborder="0"
                  title="map"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
