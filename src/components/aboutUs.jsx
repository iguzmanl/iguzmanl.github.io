import React, {Component} from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import facebookIcon from '../img/social_contact/Icon_Facebook.svg';
import instagramIcon from '../img/social_contact/Icon_Instagram.svg';
import linkedinIcon from '../img/social_contact/Icon_LinkedIn.svg';
import MailIcon from '../img/social_contact/Icon_Mail-03.svg';
import twitterIcon from '../img/social_contact/Icon_Twitter.svg';
import Larissa from '../img/team_pics/LarissaCircle.png';
import Ivonne from '../img/team_pics/IvonneCircle.png';
import Nithi from '../img/team_pics/NithiCircle.png';
import Ivy from '../img/team_pics/IvyCircle.png';
import Kassandra from '../img/team_pics/KassandraCircle.png';
import Rajee from '../img/team_pics/RajeeCircle.png';
import LinkedIn from '../img/social_contact/Icon_LinkedIn.svg';
import Mail from '../img/social_contact/Icon_Mail-03.svg';


export default class LandingPage extends Component {
  render() {
    return (<div className="aboutUs" id="learnMore" >
      <Container id="rectangle-2" style={{
          paddingTop: 76,
          paddingBottom: 55
        }}>
        <h5 id="aboutUs-heading">ABOUT US</h5>
        <Row>
          <div  class="col-md-6">

            <p id="aboutUs-body">
              Impactful bridges the gap between job-seekers and opportunities in public interest technology, and brings together a group of like-minded thinkers interested in exploring and learning more about technology and social impact.</p>
            <p id="aboutUs-body">
              Founded in 2020, we are backed by Mozilla's Spring MVP Lab and The New America Foundation.
            </p>
          </div>
          <div  class="col-md-6">

            <p id="aboutUs-body">
              Have any feedback, questions, or comments about our platform? Looking to collaborate or join our team? Please drop us a line at {" "}
              <a style={{
                  color: "white"
                }} href="mailto:hello@weareimpactful.org">
                hello@weareimpactful.org</a>
            </p>
            <p id="aboutUs-body" style={{
                paddingTop: "30px"
              }}>Find us on socials:</p>

            <Row style={{width:"250px",
                paddingTop: "10px"
              }} className="justify-content-md-center">
              <Col>
                <a href="https://www.facebook.com/impactful.tech">
                <img style={{
                    height: "36.24px",
                    width: "35.95px"
                  }} alt="Facebook" src={facebookIcon}/>
                  </a>
              </Col>
              <Col>
                <a href="https://www.instagram.com/impactful.tech/">
                <img style={{
                    height: "36.24px",
                    width: "35.95px"
                  }} alt="Instagram" src={instagramIcon}/>
                </a>

              </Col>
              <Col>
                <a href="https://twitter.com/impactful_tech">
                <img style={{
                    height: "36.24px",
                    width: "35.95px"
                  }} alt="Twitter" src={twitterIcon}/>
                </a>

              </Col>
              <Col>
                <a href="https://www.linkedin.com/company/impactfultech/">
                <img style={{
                    height: "36.24px",
                    width: "35.95px"
                  }} alt="LinkedIn" src={linkedinIcon}/>
                </a>

              </Col>
              <Col>
                <a href="mailto:hello@weareimpactful.org">
                <img style={{
                    height: "36.24px",
                    width: "35.95px"
                  }} alt="Mail" src={MailIcon}/>
                </a>
              </Col>
            </Row>
          </div>
        </Row>
        <h5 id="aboutUs-heading" style={{
            marginTop:"76px",
            marginBottom: "32px"
          }}>TEAM</h5>
        <Container id="landing" style={{
          }}>
        <br></br>
            <Row className="justify-content-md-center">

                  <div  style={{
                      paddingBottom: 25, marginBottom:"60px"
                    }} class="col-md-4">

                    <div class="circular--landscape">
                        <img src={Larissa}
                            class="rounded img-fluid"
                            alt="Larissa"></img>
                    </div>
                    <h4 style={{
                      marginTop:"24px"
                      }} id="aboutUs-team">LARISSA NGUYEN</h4>
                    <p id="aboutUs-team">Co-Founder</p><p style={{
                        marginBottom: "24px"
                      }} id="aboutUs-team">Product-Manager</p>

                    <a href="https://www.linkedin.com/in/larissanguyen/">
                        <img border="0"
                            class=" img-fluid"
                            alt="LinkedIn Logo" src={LinkedIn} width="10%" height="10%"></img>
                    </a>
                    <a style={{
                        paddingLeft: 10,
                        paddingBottom: 25,
                      }} href="mailto:larissa@weareimpactful.org">
                        <img border="0"
                            class=" img-fluid"
                            alt="Mail Logo" src={Mail} width="10%" height="10%"></img>
                    </a>
                </div>
                <div  style={{
                    paddingBottom: 25, marginBottom:"60px"
                  }} class="col-md-4">
                    <div class="circular--portrait">
                        <img src={Ivonne}
                            class="rounded center img-fluid"
                            alt="Ivonne"></img>
                    </div>
                    <h4 style={{
                      marginTop:"24px"
                      }} id="aboutUs-team">IVONNE LEMUZ-GUZMAN</h4>
                      <p id="aboutUs-team">Co-Founder</p><p id="aboutUs-team"  style={{
                          marginBottom: "24px"
                        }}>Developer</p>
                    <a href="https://www.linkedin.com/in/iguzmanl/">
                        <img border="0" alt="LinkedIn Logo" src={LinkedIn} width="10%" height="10%"></img>
                    </a>

                    <a style={{
                        paddingLeft: 10,
                      }} href="mailto:ivonne@weareimpactful.org">
                        <img border="0"
                            class=" img-fluid"
                            alt="Mail Logo" src={Mail} width="10%" height="10%"></img>
                    </a>

                </div>
                <div  style={{
                    paddingBottom: 25, marginBottom:"60px"
                  }} class="col-md-4">
                    <div class="circular--portrait">
                        <img src={Nithi}
                            class="rounded img-fluid" alt="Nithi"></img>
                    </div>
                    <h4 style={{
                      marginTop:"24px"
                      }} id="aboutUs-team">NITHI SUBBAIAN</h4>
                      <p id="aboutUs-team">Co-Founder</p><p id="aboutUs-team"  style={{
                          marginBottom: "24px"
                        }}>Developer</p>
                    <a href="https://www.linkedin.com/in/nithi-subbaian/">
                        <img border="0" alt="LinkedIn Logo" src={LinkedIn} width="10%" height="10%"></img>
                    </a>
                    <a style={{
                        paddingLeft: 10,
                        paddingBottom: 25,
                      }} href="mailto:nithi@weareimpactful.org">
                        <img border="0"
                            class=" img-fluid"
                            alt="Mail Logo" src={Mail} width="10%" height="10%"></img>
                    </a>

                </div>
</Row>
<Row className="justify-content-md-center">

  <div  style={{
      paddingBottom: 25, marginBottom:"60px"
    }} class="col-md-4">
                    <div class="circular--portrait">
                        <img src={Ivy}
                            class="rounded img-fluid" alt="Ivy"></img>
                    </div>
                    <h4 style={{
                      marginTop:"24px"
                      }} id="aboutUs-team">IVY LI</h4>
                      <p id="aboutUs-team">Co-Founder</p><p id="aboutUs-team"  style={{
                          marginBottom: "24px"
                        }}>Product-Designer</p>
                    <a href="https://www.linkedin.com/in/ivy-l-82214983/">
                        <img border="0" alt="LinkedIn Logo" src={LinkedIn} width="10%" height="10%"></img>
                    </a>
                    <a style={{
                        paddingLeft: 10,
                        paddingBottom: 25,
                      }} href="mailto:ivy@weareimpactful.org">
                        <img border="0"
                            class=" img-fluid"
                            alt="Mail Logo" src={Mail} width="10%" height="10%"></img>
                    </a>

                </div>

                <div  style={{
                    paddingBottom: 25, marginBottom:"60px"
                  }} class="col-md-4">
                    <div class="circular--portrait">
                        <img src={Kassandra}
                            class="rounded img-fluid" alt="Kassandra"></img>
                    </div>
                    <h4 style={{
                      marginTop:"24px"
                      }} id="aboutUs-team">KASSANDRA FRANCO</h4>
                      <p id="aboutUs-team"  style={{
                          marginBottom: "24px"
                        }}>Intern</p>
                    <a href="https://www.linkedin.com/in/kassandra-franco/">
                        <img border="0" alt="LinkedIn Logo" src={LinkedIn} width="10%" height="10%"></img>
                    </a>
                </div>

                <div  style={{
                    paddingBottom: 25, marginBottom:"60px"
                  }} class="col-md-4">
                    <div class="circular--portrait">
                        <img src={Rajee}
                            class="rounded img-fluid" alt="Rajee"></img>
                    </div>
                    <h4 style={{
                      marginTop:"24px"
                      }} id="aboutUs-team">RAJEE SHAH</h4>
                      <p id="aboutUs-team"  style={{
                          marginBottom: "24px"
                        }}>Intern</p>
                    <a href="https://www.linkedin.com/in/rajeeshah/">
                        <img border="0" alt="LinkedIn Logo" src={LinkedIn} width="10%" height="10%"></img>
                    </a>
                </div>

            </Row>

            <Row className="justify-content-md-center" style={{
                marginTop: "120px",
                marginBottom: "24px"
              }}>
                <div  style={{
                    paddingBottom:"15px", 
                  }} class="col-md-4">
                <a id="aboutUs-heading" href="#jobOpportunities" className="footerLink">Explore Jobs</a>
              </div>
              <div  style={{
                  paddingBottom:"15px",
                }} class="col-md-4">                <a id="aboutUs-heading" href="#joinCommunity" className="footerLink">Join Our Community</a>
            </div>
            </Row>
          </Container>
      </Container>
    </div>)
  }

}
