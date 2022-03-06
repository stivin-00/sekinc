import React from "react";
import "./Benefits.css";
import { Link } from "react-router-dom";
import pic from "../images/photo 7";

const Benefits = () => {
  return (
    <>
      <div className="comerr">
        <section class="header-extradiv">
          <h3>Benefits of Working With Us</h3>
          <div class="container">
            <div class="row">
              <div class="extra-div col-lg-4 col-md-6 col-sm-12">
                <Link to="/">
                  <i class="fa-3x fa fa-desktop" aria-hidden="true"></i>
                </Link>
                <h2>AWESOME DESING</h2>
                <p>
                  With our experienced team members we build very fast, stable
                  and efficient applications making use the
                  languages,frameworks( like react-js, gatsby, ruby, django,
                  flutter etc) and the best functions/syntax out there
                </p>
              </div>
              <div class="extra-div col-lg-4 col-md-6 col-sm-12">
                <Link to="/">
                  <i class="fa-3x fa fa-trophy" aria-hidden="true"></i>
                </Link>
                <h2>24/7 SUPPORT</h2>
                <p>
                  We are always avaliable to your for help, just a few clicks on
                  your moblie and there we are at your service. your
                  satisfaction will allways remain our piority
                </p>
              </div>
              <div class="extra-div col-lg-4 col-md-6 col-sm-12">
                <Link to="/">
                  <i class="fa-3x fa fa-magic" aria-hidden="true"></i>
                </Link>
                <h2>ULTRA FAST</h2>
                <p>
                  With our experienced team members we build very fast, stable
                  and efficient applications making use the
                  languages,frameworks( like react-js, gatsby, ruby, django,
                  flutter etc) and the best functions/syntax out there
                </p>
              </div>
            </div>
          </div>
        </section>

        <div class="section-4 bg-dark">
          <div class="container">
            <div class="row">
              <div class="col-md-7">
                <img src={pic} alt="imggg" />
              </div>
              <div class="col-md-5">
                <h1 class="text-white">Don't Know Where To Start From?</h1>
                <Link className="btn" to="/contact">
                  {" "}
                  contact us
                </Link>
                <p class="para-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Explicabo sint alias nobis minus possimus saepe ab asperiores
                  modi repellendus minima consequatur perferendis eaque quia
                  pariatur accusamus, est unde odio deleniti?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="contactx">
          <h1>If You Have Any Project In Your Mind.</h1>
          <Link to="/contact">
            <button class="contact-btn btn">Conatct Us</button>{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Benefits;
