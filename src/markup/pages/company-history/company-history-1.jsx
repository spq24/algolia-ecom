import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {Link as ScrollTo} from 'react-scroll';
import ModalVideo from 'react-modal-video'

// Layout
import Header from "../../layout/header/header1";
import Footer from "../../layout/footer/footer1";

// Elements
import Count from '../../elements/counter/counter-sensor';
import ClientLogo from "../../elements/client-logo/logo-carousel";

// Images
import bannerPic1 from '../../../images/banner/banner1.jpg';
import pattern1 from '../../../images/pattern/pt1.png';
import aboutPic4 from '../../../images/about/pic4.jpg';
import aboutPic5 from '../../../images/about/pic5.jpg';
import aboutPic6 from '../../../images/about/pic6.jpg';

class CompanyHistory1 extends Component {
	
	constructor () {
		super()
		this.state = {
			isOpen: false
		}
		this.openModal = this.openModal.bind(this)
	}
	openModal () {
		this.setState({isOpen: true})
	}
	
	render(){
		return (
			<>
				
				<Header/>
				
				<div className="page-content bg-white">
					<div className="page-banner ovpr-dark overlay-dotted ovdt2 parallax" style={{backgroundImage: "url("+bannerPic1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Company History 1</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
										<li>Company History 1</li>
									</ul>
								</div>
							 </div>
						</div>
						<ScrollTo smooth={true} to="content-area" className="banner-bottom scroll-page"><i className="ti-arrow-down"></i></ScrollTo>
					</div>
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp1 bg-gray" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container">
								<div className="row">
									<div className="col-md-3 wow timeline-nav-box">
										<div className="scroll-page timeline-nav sticky-top">
											<ul className="navbar">
												<li><ScrollTo smooth={true} activeClass="active" spy={true} className="nav-link" to={"2018"}>2018</ScrollTo></li>
												<li><ScrollTo smooth={true} activeClass="active" spy={true} className="nav-link" to={"2017"}>2017</ScrollTo></li>
												<li><ScrollTo smooth={true} activeClass="active" spy={true} className="nav-link" to={"2014"}>2014</ScrollTo></li>
												<li><ScrollTo smooth={true} activeClass="active" spy={true} className="nav-link" to={"2012"}>2012</ScrollTo></li>
												<li><ScrollTo smooth={true} activeClass="active" spy={true} className="nav-link" to={"2007"}>2007</ScrollTo></li>
											</ul>
										</div>
									</div>
									<div className="col-md-9">
										<div className="timeline-box" id="2018">
											<div className="heading-bx">
												<h2 className="title-head m-b0">2018</h2>
												<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
											</div>
											<div className="video-media-bx m-b30">
												<img src={aboutPic6} alt=""/>
												<Link to={"#"} onClick={this.openModal} className="popup-youtube"><i className="fa fa-play"></i></Link>
											</div>
											<div className="heading-bx m-t20">
												<h3 className="m-b10">We are here to manage your finance with experience</h3>
												<h5 className="fw5 m-t15">There are many variations of passages of Lorem Ipsum available, but the majority have.</h5>
											</div>
											<div className="row text-black">
												<div className="col-lg-4 col-md-4 col-sm-4 col-4 wow fadeInUp" data-wow-delay="0.3s">
													<div className="counter-style-1 text-black m-b30">
														<div className="text-primary">
															<Count counter={25}/>
															<span>K</span>
														</div>
														<span className="counter-text">Satisfied Clients</span>
													</div>
												</div>
												<div className="col-lg-4 col-md-4 col-sm-4 col-4 wow fadeInUp" data-wow-delay="0.6s">
													<div className="counter-style-1 text-black m-b30">
														<div className="text-primary">
															<Count counter={35}/>
															<span>+</span>
														</div>
														<span className="counter-text">Winning Awards</span>
													</div>
												</div>
												<div className="col-lg-4 col-md-4 col-sm-4 col-4 wow fadeInUp" data-wow-delay="0.9s">
													<div className="counter-style-1 text-black m-b30">
														<div className="text-primary">
															<Count counter={180}/>
															<span>+</span>
														</div>
														<span className="counter-text">Completed works</span>
													</div>
												</div>
											</div>
											<p> since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
										</div>
										<div className="timeline-box" id="2017">
											<div className="heading-bx">
												<h2 className="title-head m-b0">2017</h2>
												<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
											</div>
											<div className="row">
												<div className="col-md-6">
													<div className="video-media-bx m-b30">
														<img src={aboutPic5} alt=""/>
													</div>
												</div>
												<div className="col-md-6">
													<div className="video-media-bx m-b30">
														<img src={aboutPic4} alt=""/>
													</div>
												</div>
											</div>
											<p> since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
										</div>
										<div className="timeline-box" id="2014">
											<div className="heading-bx">
												<h2 className="title-head m-b0">2014 - We Offer The Best Solution For Business</h2>
												<p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
												<p className="m-b30">Printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the simply dummy text of the printing and  dummy text of the printing and typesetting industry typesetting industry simply.</p>
											</div>
											<ClientLogo />
											<Link to="contact-1" className="btn m-t30 button-md radius-xl">Contact Us</Link>
										</div>
										<div className="timeline-box" id="2012">
											<div className="heading-bx">
												<h2 className="title-head m-b0">2012</h2>
												<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
											</div>
											<ul className="list-circle">
												<li>Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding, gain customer trust to offer appropriate advice, and bring about suggestions on suitable technology to transform your business.</li>
												<li>Mitech takes into consideration every little detail to make sure the system run smoothly and responsively. Mitech employs a new technique called Minified Technology for securing customers' database &amp; building up highly confidential firewalls.</li>
												<li>We reduce redundant complex calculations and lengthy erroneous code texts with simpler ones to ensure Mitech would run seamlessly and the design is reserved in its best form when viewed from a wide range of mobile devices &amp; browsers.</li>
											</ul>
										</div>
										<div className="timeline-box" id="2007">
											<div className="heading-bx">
												<h2 className="title-head m-b0">2007</h2>
												<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
											</div>
											<div className="row">
												<div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.2s">
													<div className="feature-container feature-bx2">
														<div className="feature-lg text-white m-b20">
															<span className="icon-cell"><i className="flaticon-growth"></i></span> 
														</div>
														<div className="icon-content">
															<h5 className="ttr-tilte">Our Responsibility</h5>
															<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
															<Link to={"/services-details"} className="feature-btn">View More</Link>
														</div>
													</div>
												</div>
												<div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.4s">
													<div className="feature-container feature-bx2">
														<div className="feature-lg text-white m-b20">
															<span className="icon-cell"><i className="flaticon-increase"></i></span> 
														</div>
														<div className="icon-content">
															<h5 className="ttr-tilte">Our Approach</h5>
															<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
															<Link to={"/services-details"} className="feature-btn">View More</Link>
														</div>
													</div>
												</div>
												<div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.6s">
													<div className="feature-container feature-bx2">
														<div className="feature-lg text-white m-b20">
															<span className="icon-cell"><i className="flaticon-rocket"></i></span> 
														</div>
														<div className="icon-content">
															<h5 className="ttr-tilte">Our Mission</h5>
															<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
															<Link to={"/services-details"} className="feature-btn">View More</Link>
														</div>
													</div>
												</div>
												<div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.8s">
													<div className="feature-container feature-bx2">
														<div className="feature-lg text-white m-b20">
															<span className="icon-cell"><i className="flaticon-target"></i></span> 
														</div>
														<div className="icon-content">
															<h5 className="ttr-tilte">Our Responsibility</h5>
															<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
															<Link to={"/services-details"} className="feature-btn">View More</Link>
														</div>
													</div>
												</div>
											</div>
											<p className="m-b30">Printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the simply dummy text of the printing and  dummy text of the printing and typesetting industry typesetting industry simply.</p>
										</div>
									</div>
								</div>
								
							</div>
						</div>
					
					</div>
				</div>
				
				<Footer/>
				
				<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='cnXapYkboRQ' onClose={() => this.setState({isOpen: false})} />
				
			</>
		);
	}
}

export default CompanyHistory1;