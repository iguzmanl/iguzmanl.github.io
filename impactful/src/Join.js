import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './App.css';
import UserJoin from './UserJoin';
import OrgsJoin from './OrgsJoin';

import userImage from './img/woman_with_laptop.jpg';
import companyImage from './img/siliconValley2.jpeg'

function Join() {
  return (
  	<div className="jumbotron fluid">
  		<Carousel>
		  <Carousel.Item>
		    <img
		      className="d-block fluid"
		      src={userImage}
		      alt="For Techies"
		    />
		    <Carousel.Caption>
		      <h1>Want to do more with your tech skills?</h1>
		      <br/><br/>
		      <h2>Sign up to join our community.</h2>
		      <br/><br/>
		      <Button size="lg" href="#">Join us.</Button>
		      <br/><br/>
		    </Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src={companyImage}
		      alt="For Companies"
		    />

		    <Carousel.Caption>
		      <h1>Company? <br/><br/> You're here to hire. <br/><br/> We're here to help.</h1>
		      <br/><br/><br/><br/>
		      <Button size="lg" href="#">Post a job opening.</Button>
		      <br/><br/>
		    </Carousel.Caption>
		  </Carousel.Item>
		  
		</Carousel>
  	</div>
  )
}

export default Join;