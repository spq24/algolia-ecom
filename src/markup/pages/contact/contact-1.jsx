import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {Link as ScrollTo} from 'react-scroll';
import Iframe from 'react-iframe';

// Layout
import Header from "../../layout/header/header1";
import Footer from "../../layout/footer/footer1";

// Images
import bannerPic1 from '../../../images/banner/banner1.jpg';
import pattern1 from '../../../images/pattern/pt1.png';

class Contact1 extends Component {
	
	render(){
		return (
			<>
				
				<Header/>
				
				<div className="page-content bg-white">
					<div className="page-banner ovpr-dark overlay-dotted ovdt1 parallax" style={{backgroundImage: "url("+bannerPic1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Contact</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
										<li>Contact</li>
									</ul>
								</div>
							 </div>
						</div>
						<ScrollTo smooth={true} to="content-area" className="banner-bottom scroll-page"><i className="ti-arrow-down"></i></ScrollTo>
					</div>
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp1" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container">
								<div className="heading-bx m-sm-t20">
									<h2 className="title-head m-b0">Contact Us For Any <br/>informations</h2>
								</div>
								<div className="row">
									<div className="col-lg-4 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="0.3s">
										<div className="icon-box">
											<h5 className="title"><i className="ti-map-alt"></i>Location</h5>		
											<p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="0.6s">
										<div className="icon-box">
											<h5 className="title"><i className="ti-id-badge"></i>Email & Phone</h5>		
											<Link to={"#"}>info@yourdomain.com</Link>
											<p>(+68) 120034509</p>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay="0.9s">
										<div className="icon-box">
											<h5 className="title"><i className="ti-world "></i>Follow Us</h5>		
											<ul className="list-inline ft-social-bx">
												<li><Link to={"#"} className="btn button-sm"><i className="fa fa-facebook"></i></Link></li>
												<li><Link to={"#"} className="btn button-sm"><i className="fa fa-twitter"></i></Link></li>
												<li><Link to={"#"} className="btn button-sm"><i className="fa fa-linkedin"></i></Link></li>
												<li><Link to={"#"} className="btn button-sm"><i className="fa fa-google-plus"></i></Link></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-area">
							<Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.1298878182047!2d-81.38369578541523!3d30.204840081824198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e437ac927a996b%3A0x799695b1a2b970ab!2sNona+Blue+Modern+Tavern!5e0!3m2!1sen!2sin!4v1548177305546" className="align-self-stretch map-frame d-flex"allowfullscreen></Iframe>
						</div>
						<div className="section-area section-sp2" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container">		
								<div className="row">
									<div className="col-lg-12 col-md-12 wow fadeIn" data-wow-delay="0.4s">
										<form className="contact-bx ajax-form">
											<div className="ajax-message"></div>
											<div className="heading-bx">
												<h2 className="title-head m-b0">Do You Have Any<br/>Questions</h2>
											</div>
											<div className="row placeani">
												<div className="col-lg-4">
													<div className="form-group">
														<div className="input-group">
															<input name="name" type="text" required className="form-control valid-character" placeholder="Your Name"/>
														</div>
													</div>
												</div>
												<div className="col-lg-4">
													<div className="form-group">
														<div className="input-group"> 
															<input name="email" type="email" className="form-control" required  placeholder="Your Email Address"/>
														</div>
													</div>
												</div>
												<div className="col-lg-4">
													<div className="form-group">
														<div className="input-group">
															<input name="phone" type="text" required className="form-control int-value" placeholder="Your Phone"/>
														</div>
													</div>
												</div>
												<div className="col-lg-12">
													<div className="form-group">
														<div className="input-group">
															<textarea name="message" rows="4" className="form-control" placeholder="Type Message" required ></textarea>
														</div>
													</div>
												</div>
												<div className="col-lg-12">
													<button name="submit" type="submit" value="Submit" className="btn button-md"> Send Message</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					
					</div>
				</div>
				
				<Footer/>
				
			</>
		);
	}
}

export default Contact1;