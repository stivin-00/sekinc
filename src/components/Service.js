/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState } from "react";
import "./service.css";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import pic1 from "../images/ai.jpg";
import pic2 from "../images/frontend.jpg";
import pic3 from "../images/backend.jpg";
import pic4 from "../images/shopify.jpg";
import pic5 from "../images/ecommerce.jpg";
import pic6 from "../images/dbm.jpg";
import pic7 from "../images/mobile.jpg";
import pic8 from "../images/security.jpg";

const Service = () => {
  // eslint-disable-next-line no-unused-vars
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <div class="breaking-news-section">
        <span id="btext">Offers</span>
        <marquee
          direction="left"
          onmouseover="this.stop()"
          onmouseout="this.start()"
        >
          <Link to="/" class="breaking-news">
            Order today and get 10% discount
          </Link>
          <Link to="/" class="breaking-news">
            Refer someone and get 10% bonus
          </Link>
        </marquee>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal} />

      <div className="y">
        <h3 className="title">our services</h3>
        <section className="flip_cards_section">
          <div className="flip_card_cover right">
            <div className="flip_card_inner">
              <div className="front">
                <img src={pic5} alt="" />
                <h1 className="card_titleyy">ECOMMERCE</h1>
              </div>
              <div className="back">
                <h1 className="card_title">ECOMMERCE</h1>
                <p className="caption">
                get your fast and efficient ecommerce web-app now.
                </p>
                <button className="btn" onClick={openModal}>
                  More..
                </button>
              </div>
            </div>
          </div>

          <div className="flip_card_cover left">
            <div className="flip_card_inner">
              <div className="front">
                <img src={pic7} alt="" />
                <h1 className="card_titleyy">MOBILE-APP</h1>
              </div>
              <div className="back">
                <h1 className="card_title">MOBILE-APP</h1>
                <p className="caption">
                get your cross platform mobile-apps now to sky rocket your business
                </p>
                <button className="btn" onClick={openModal}>
                  More..
                </button>
              </div>
            </div>
          </div>

          <div className="flip_card_cover top">
            <div className="flip_card_inner">
              <div className="front">
                <img src={pic8} alt="" />
                <h1 className="card_titleyy" onClick={openModal}>
                SECURITY
                </h1>
              </div>
              <div className="back">
                <h1 className="card_title">SECURITY</h1>
                <p className="caption">
                protect your applications and database from cyber crminals and test the porosity of application with us.
                </p>
                <button className="btn" onClick={openModal}>
                  More..
                </button>
              </div>
            </div>
          </div>

          <div className="flip_card_cover bottom">
            <div className="flip_card_inner">
              <div className="front">
                <img src={pic2} alt="" />
                <h1 className="card_titleyy">FRONTEND</h1>
              </div>
              <div className="back">
                <h1 className="card_title">FRONTEND</h1>
                <p className="caption">
                looking for great, friendly User-Interface? welcome to the right source
                </p>
                <button className="btn" onClick={openModal}>
                  More..
                </button>
              </div>
            </div>
          </div>

          <div className="flip_card_cover right">
            <div className="flip_card_inner">
              <div className="front">
                <img src={pic4} alt="" />
                <h1 className="card_titleyy">SHOPIFY</h1>
              </div>
              <div className="back">
                <h1 className="card_title">SHOPIFY</h1>
                <p className="caption">
                Want to sky-rocket your dropShiping business? welcome, we develop best shopify themes
                </p>
                <button className="btn" onClick={openModal}>
                  More..
                </button>
              </div>
            </div>
          </div>

          <div className="flip_card_cover left">
            <div className="flip_card_inner">
              <div className="front">
                <img src={pic3} alt="" />
                <h1 className="card_titleyy">BACKEND</h1>
              </div>
              <div className="back">
                <h1 className="card_title">BACKEND</h1>
                <p className="caption">
                we build backend for any application
                </p>
                <button className="btn" onClick={openModal}>
                  More..
                </button>
              </div>
            </div>
          </div>

          <div className="flip_card_cover top">
            <div className="flip_card_inner">
              <div className="front">
                <img src={pic6} alt="" />
                <h1 className="card_titleyy">DBMs</h1>
              </div>
              <div className="back">
                <h1 className="card_title">DBMs</h1>
                <p className="caption">
                we manage, protect and simplify database for easy reading
                </p>
                <button className="btn" onClick={openModal}>
                  More..
                </button>
              </div>
            </div>
          </div>

          <div className="flip_card_cover bottom">
            <div className="flip_card_inner">
              <div className="front">
                <img src={pic1} alt="" />
                <h1 className="card_titleyy">A-I</h1>
              </div>
              <div className="back">
                <h1 className="card_title">A-I</h1>
                <p className="caption">
                want to automate your applications? worry no more, we got you
                </p>
                <button className="btn" onClick={openModal}>
                  More..
                </button>
              </div>
            </div>
          </div>
        </section>
        <h5>
        we are reliable efficient and fast at delivering only quality projects, your satisfaction is our utmost piority. With over 3years of expirence from different languages, our team combine to produce quality and only quality for our clients. It is our dream to bring technology to everyone
        </h5>
      </div>
    </div>
  );
};

export default Service;
