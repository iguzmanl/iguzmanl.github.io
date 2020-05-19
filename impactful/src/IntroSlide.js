import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-bootstrap/Image';
import GreenCityBackground from './img/green_city.jpg';
import './App.css';


function IntroSlide() {
  return (
  	<div className="IntroSlide">
	  <div className="container bg-no-overlay text-center"  fluid>
	    <h1 className="text-dark"><br/> Do Better <br/><br/> In Tech</h1>
	    <br/> <br/><br/>
	    <h2 className="text-light">
	      Welcome to Impactful.
	    </h2> 
	  </div>
  	</div>
  )
}

export default IntroSlide;
