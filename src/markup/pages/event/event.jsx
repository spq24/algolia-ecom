import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Link as ScrollTo} from 'react-scroll'
import {Accordion, Card} from 'react-bootstrap';
import Iframe from 'react-iframe';

// Layout
import Header1 from "../../layout/header/header1";
import Footer from "../../layout/footer/footer1";

// Elements
import Team from '../../elements/team/team2';

// Images
import bannerPic1 from '../../../images/banner/banner1.jpg';
import pattern1 from '../../../images/pattern/pt1.png';
import TestiPic1 from '../../../images/testimonials/pic1.jpg';
import TestiPic2 from '../../../images/testimonials/pic2.jpg';
import TestiPic3 from '../../../images/testimonials/pic3.jpg';
import TestiPic4 from '../../../images/testimonials/pic4.jpg';
import TestiPic5 from '../../../images/testimonials/pic5.jpg';
import BlogGridPic1 from '../../../images/blog/grid/pic1.jpg';
import BlogGridPic2 from '../../../images/blog/grid/pic2.jpg';
import BlogGridPic3 from '../../../images/blog/grid/pic3.jpg';

class Event extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				<div className="page-content bg-white">
					<div className="page-banner ovpr-dark overlay-dotted ovdt2 parallax" style={{backgroundImage: "url("+bannerPic1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Event</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
										<li>Event</li>
									</ul>
								</div>
							 </div>
						</div>
						<ScrollTo smooth={true} to="content-area" className="banner-bottom scroll-page"><i className="ti-arrow-down"></i></ScrollTo>
					</div>
					<div className="content-block" id="content-area">
						<div className="section-area section-sp1 bg-gray" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container">
								<div className="heading-bx text-center">
									<h2 className="title-head m-b0">Schedule</h2>
									<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								</div>
								<div className="row">
									<div className="col-lg-8">
										<Accordion className="ttr-accordion faq-bx" defaultActiveKey="0">
											<Card className="event-bx">
												<Accordion.Toggle as={Card.Header} eventKey="0">
													<img src={TestiPic1} className="event-mamber" alt=""/>
													<h5 className="title">The Seven Reasons Tourists Love Event.</h5>
													<span className="event-date">05 July 2020</span>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="0">
													<Card.Body>
														<div className="event-map">
															<Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.1298878182047!2d-81.38369578541523!3d30.204840081824198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e437ac927a996b%3A0x799695b1a2b970ab!2sNona+Blue+Modern+Tavern!5e0!3m2!1sen!2sin!4v1548177305546" className="align-self-stretch map-frame d-flex" style={{width:"100%", minHeight: "300px",}} allowFullScreen></Iframe>
														</div>
														<div className="row">
															<div className="col-md-4 col-lg-4 col-sm-12 m-b30">
																<div className="place-bx">
																	<h4 className="title">Date</h4>
																	<span>12 December 2020</span>
																	<span className="text-primary">12:00 PM</span>
																</div>
															</div>
															<div className="col-md-4 col-lg-4 col-sm-12 m-b30">
																<div className="place-bx">
																	<h4 className="title">Location</h4>
																	<span>58 Howard Street #2 San Francisco, CA 941</span>
																</div>
															</div>
															<div className="col-md-4 col-lg-4 col-sm-12 m-b30">
																<div className="place-bx">
																	<h4 className="title">Event Support</h4>
																	<span>(+68)1221 09876</span>
																	<span>(+68)1221 09876</span>
																</div>
															</div>
														</div>
														<div className="row">
															<div className="col-md-4 m-b30"><img src={BlogGridPic1} className="radius-sm" alt=""/></div>
															<div className="col-md-4 m-b30"><img src={BlogGridPic2} className="radius-sm" alt=""/></div>
															<div className="col-md-4 m-b30"><img src={BlogGridPic3} className="radius-sm" alt=""/></div>
														</div>
														<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Ipsum.</p>
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card className="event-bx">
												<Accordion.Toggle as={Card.Header} eventKey="1">
													<img src={TestiPic2} className="event-mamber" alt=""/>
													<h5 className="title">How To Own Event For Free.</h5>
													<span className="event-date">31 December 2020</span>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="1">
													<Card.Body>
														<div className="event-map">
															<Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.1298878182047!2d-81.38369578541523!3d30.204840081824198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e437ac927a996b%3A0x799695b1a2b970ab!2sNona+Blue+Modern+Tavern!5e0!3m2!1sen!2sin!4v1548177305546" className="align-self-stretch map-frame d-flex" style={{width:"100%", minHeight: "300px",}} allowFullScreen></Iframe>
														</div>
														<div className="row">
															<div className="col-md-4 col-lg-4 col-sm-12 m-b30">
																<div className="place-bx">
																	<h4 className="title">Date</h4>
																	<span>12 December 2020</span>
																	<span className="text-primary">12:00 PM</span>
																</div>
															</div>
															<div className="col-md-4 col-lg-4 col-sm-12 m-b30">
																<div className="place-bx">
																	<h4 className="title">Location</h4>
																	<span>58 Howard Street #2 San Francisco, CA 941</span>
																</div>
															</div>
															<div className="col-md-4 col-lg-4 col-sm-12 m-b30">
																<div className="place-bx">
																	<h4 className="title">Event Support</h4>
																	<span>(+68)1221 09876</span>
																	<span>(+68)1221 09876</span>
																</div>
															</div>
														</div>
														<div className="row">
															<div className="col-md-4 m-b30"><img src={BlogGridPic1} className="radius-sm" alt=""/></div>
															<div className="col-md-4 m-b30"><img src={BlogGridPic2} className="radius-sm" alt=""/></div>
															<div className="col-md-4 m-b30"><img src={BlogGridPic3} className="radius-sm" alt=""/></div>
														</div>
														<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Ipsum.</p>
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card className="event-bx">
												<Accordion.Toggle as={Card.Header} eventKey="2">
													<img src={TestiPic3} className="event-mamber" alt=""/>
													<h5 className="title">Is Event The Most Trending Thing Now?</h5>
													<span className="event-date">27 May 2020</span>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="2">
													<Card.Body>
														<div className="event-map">
															<Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.1298878182047!2d-81.38369578541523!3d30.204840081824198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e437ac927a996b%3A0x799695b1a2b970ab!2sNona+Blue+Modern+Tavern!5e0!3m2!1sen!2sin!4v1548177305546" className="align-self-stretch map-frame d-flex" style={{width:"100%", minHeight: "300px",}} allowFullScreen></Iframe>
														</div>
														<div className="row">
															<div className="col-md-4 col-lg-4 col-sm-12 m-b30">
																<div className="place-bx">
																	<h4 className="title">Date</h4>
																	<span>12 December 2020</span>
																	<span className="text-primary">12:00 PM</span>
																</div>
															</div>
															<div className="col-md-4 col-lg-4 col-sm-12 m-b30">
																<div className="place-bx">
																	<h4 className="title">Location</h4>
																	<span>58 Howard Street #2 San Francisco, CA 941</span>
																</div>
															</div>
															<div className="col-md-4 col-lg-4 col-sm-12 m-b30">
																<div className="place-bx">
																	<h4 className="title">Event Support</h4>
																	<span>(+68)1221 09876</span>
																	<span>(+68)1221 09876</span>
																</div>
															</div>
														</div>
														<div className="row">
															<div className="col-md-4 m-b30"><img src={BlogGridPic1} className="radius-sm" alt=""/></div>
															<div className="col-md-4 m-b30"><img src={BlogGridPic2} className="radius-sm" alt=""/></div>
															<div className="col-md-4 m-b30"><img src={BlogGridPic3} className="radius-sm" alt=""/></div>
														</div>
														<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Ipsum.</p>
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card className="event-bx">
												<Accordion.Toggle as={Card.Header} eventKey="3">
													<img src={TestiPic4} className="event-mamber" alt=""/>
													<h5 className="title">What You Know About Event And What You Don't Know About Event</h5>
													<span className="event-date">02 June 2020</span>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="3">
													<Card.Body>
														<div className="event-map">
															<Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.1298878182047!2d-81.38369578541523!3d30.204840081824198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e437ac927a996b%3A0x799695b1a2b970ab!2sNona+Blue+Modern+Tavern!5e0!3m2!1sen!2sin!4v1548177305546" className="align-self-stretch map-frame d-flex" style={{width:"100%", minHeight: "300px",}} allowFullScreen></Iframe>
														</div>
														<div className="row">
															<div className="col-md-4 col-lg-4 col-sm-12 m-b30">
																<div className="place-bx">
																	<h4 className="title">Date</h4>
																	<span>12 December 2020</span>
																	<span className="text-primary">12:00 PM</span>
																</div>
															</div>
															<div className="col-md-4 col-lg-4 col-sm-12 m-b30">
																<div className="place-bx">
																	<h4 className="title">Location</h4>
																	<span>58 Howard Street #2 San Francisco, CA 941</span>
																</div>
															</div>
															<div className="col-md-4 col-lg-4 col-sm-12 m-b30">
																<div className="place-bx">
																	<h4 className="title">Event Support</h4>
																	<span>(+68)1221 09876</span>
																	<span>(+68)1221 09876</span>
																</div>
															</div>
														</div>
														<div className="row">
															<div className="col-md-4 m-b30"><img src={BlogGridPic1} className="radius-sm" alt=""/></div>
															<div className="col-md-4 m-b30"><img src={BlogGridPic2} className="radius-sm" alt=""/></div>
															<div className="col-md-4 m-b30"><img src={BlogGridPic3} className="radius-sm" alt=""/></div>
														</div>
														<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Ipsum.</p>
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card className="event-bx">
												<Accordion.Toggle as={Card.Header} eventKey="4">
													<img src={TestiPic5} className="event-mamber" alt=""/>
													<h5 className="title">You Will Never Believe These Bizarre Truths Behind Event</h5>
													<span className="event-date">15 August 2020</span>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="4">
													<Card.Body>
														<div className="event-map">
															<Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.1298878182047!2d-81.38369578541523!3d30.204840081824198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e437ac927a996b%3A0x799695b1a2b970ab!2sNona+Blue+Modern+Tavern!5e0!3m2!1sen!2sin!4v1548177305546" className="align-self-stretch map-frame d-flex" style={{width:"100%", minHeight: "300px",}} allowFullScreen></Iframe>
														</div>
														<div className="row">
															<div className="col-md-4 col-lg-4 col-sm-12 m-b30">
																<div className="place-bx">
																	<h4 className="title">Date</h4>
																	<span>12 December 2020</span>
																	<span className="text-primary">12:00 PM</span>
																</div>
															</div>
															<div className="col-md-4 col-lg-4 col-sm-12 m-b30">
																<div className="place-bx">
																	<h4 className="title">Location</h4>
																	<span>58 Howard Street #2 San Francisco, CA 941</span>
																</div>
															</div>
															<div className="col-md-4 col-lg-4 col-sm-12 m-b30">
																<div className="place-bx">
																	<h4 className="title">Event Support</h4>
																	<span>(+68)1221 09876</span>
																	<span>(+68)1221 09876</span>
																</div>
															</div>
														</div>
														<div className="row">
															<div className="col-md-4 m-b30"><img src={BlogGridPic1} className="radius-sm" alt=""/></div>
															<div className="col-md-4 m-b30"><img src={BlogGridPic2} className="radius-sm" alt=""/></div>
															<div className="col-md-4 m-b30"><img src={BlogGridPic3} className="radius-sm" alt=""/></div>
														</div>
														<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Ipsum.</p>
													</Card.Body>
												</Accordion.Collapse>
											</Card>
										</Accordion>
									</div>
									<div className="col-lg-4">
										<form className="contact-bx ajax-form event-form sticky-top">
											<div className="ajax-message"></div>
											<div className="heading-bx  text-white">
												<h4 className="title-head m-b0">Do You Have Any<br/>Questions</h4>
											</div>
											<div className="row placeani">
												<div className="col-lg-12">
													<div className="form-group">
														<div className="input-group">
															<input name="name" type="text" required className="form-control valid-character" placeholder="Your Name"/>
														</div>
													</div>
												</div>
												<div className="col-lg-12">
													<div className="form-group">
														<div className="input-group"> 
															<input name="email" type="email" className="form-control" required  placeholder="Your Email Address"/>
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
													<button name="submit" type="submit" value="Submit" className="btn-secondry button-md"> Send Message</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						
						<div className="section-area section-sp2"  style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container">
								<div className="heading-bx text-center">
									<h2 className="title-head m-b0">Speakers</h2>
									<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								</div>
								<Team />
							</div>
						</div>
					
					</div>
				</div>
				
				<Footer/>
				
			</>
		);
	}
}

export default Event;