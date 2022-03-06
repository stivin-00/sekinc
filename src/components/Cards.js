import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';


function Cards() {
  return (
    <>
	
	<section className="services">
	<div className="s-heading">
	<p>Services</p>	
	<p>Our Services</p>	
	</div>
	
	<div className="services-container">
	
	<div className="s-box">
		<div className="s-icon front-icon"></div>
		<Link to="/"> Front-End Devolopement</Link>
		<p>We design great UIs fast and easily scalable for any project </p>
		<button class="btn service-button">Read More</button>	
	</div>

	<div className="s-box">
		<div className="s-icon back-icon"></div>
		<Link to="/">Back End</Link>
		<p>We create both rest/graph API and other back-end logics/functionalities.</p>
		<button className="btn service-button">Read More</button>	
	</div>

  <div className="s-box">
		<div className="s-icon seo-icon"></div>
		<Link to="/">AI/ Machine Learning</Link>
		<p>got an AI/ Machine learning gig? we are your most trusted ally for that.</p>
		<button className="btn service-button">Read More</button>
	</div>

	<div className="s-box">
		<div className="s-icon gui-icon"></div>
		<Link to="/">Database Management</Link>
		<p>we manage and analyze your database. we also create the best database system</p>
		<button className="btn service-button">Read More</button>	
	</div>
	
	
	</div>
	</section>
	
	<section className="team">

	<div className="t-heading">
	<p>Team</p>	
	<p>This is our Teams members</p>	
	</div>

	<div className="t-box-container">

	<div className="team-box">
	
	<div className="team-img t-img1"></div>
	<div className="t-id">
  <h5>Stephen Ekele</h5>
	<Link to="/developers" className="btn">view</Link>
	</div>
	</div>
	
	
	<div className="team-box">

	<div className="team-img t-img2"></div>
	<div className="t-id">
	<h5>kamal seriki</h5>
	<Link to="/developers" className="btn">view</Link>
	</div>
	</div>
	
	
	<div className="team-box">
	
	<div className="team-img t-img3"></div>
	<div className="t-id">
	<h5>Bello Ade</h5>
	<Link to="/developers" className="btn">view </Link>
	</div>
	</div>
	
	
	
	<div className="team-box">

	<div className="team-img t-img4"></div>
	<div className="t-id">
	<h5>Duro Samuel</h5>
	<Link to="/developers" className="btn">view</Link>
	</div>
	</div>
	
	</div>
	</section>
    </>
  );
}

export default Cards;
