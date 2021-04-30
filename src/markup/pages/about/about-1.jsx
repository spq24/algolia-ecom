import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Link as ScrollTo} from 'react-scroll'
import ModalVideo from 'react-modal-video'

// Layout
import Header from "../../layout/header/header1";
import Footer from "../../layout/footer/footer1";

// Elements
import LogoCarousel from "../../elements/client-logo/logo-carousel";
import Testimonial from "../../elements/testimonial/testimonial2";
import CaseStudies from "../../elements/case-studies/case-studies";
import Count from '../../elements/counter/counter-sensor';

// Images
import bannerPic1 from '../../../images/banner/banner1.jpg';
import bgPic1 from '../../../images/background/bg1.png';
import bgPic2 from '../../../images/background/bg2.jpg';
import aboutPic3 from '../../../images/about/pic3.jpg';

class About1 extends Component {
	
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
								<h1 className="text-white">About Us Simple</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
										<li>About Us Simple</li>
									</ul>
								</div>
							 </div>
						</div>
						<ScrollTo smooth={true} to="content-area" className="banner-bottom scroll-page"><i className="ti-arrow-down"></i></ScrollTo>
					</div>
					<div className="content-block" id="content-area">
						<div className="section-area section-sp1 bg-gray">
							<div className="container">
								<div className="about-head-bx heading-bx wow fadeIn" data-wow-delay="0.3s">
									<div className="about-counter">
										<div className="counter-bx"><Count counter={20}/>+</div>
										<h5>YEAR IN INDUSTRY</h5>
									</div>
									<div className="head-in">
										<h2 className="title-head">About Company</h2>
										<p>There are many variations of passages of Lorem Ipsum avail able, but the majority have suffered alteration.</p>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
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
									<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
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
									<div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.9s">
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
								</div>
							</div>
						</div>
						
						<div className="section-area section-sp3 ovpr-dark bg-fix about-media-bx about-video parallax" style={{backgroundImage: "url("+bgPic2+")"}}>
							<div className="container">
								<div className="row">
									<div className="col-lg-12 wow fadeIn" data-wow-delay="0.3s">
										<div className="video-media-bx">
											<img src={aboutPic3} alt=""/>
											<Link to={"#"} onClick={this.openModal} className="popup-youtube"><i className="fa fa-play"></i></Link>
										</div>
									</div>
								</div>
								<div className="row section-sp1 wow fadeIn" data-wow-delay="0.6s">
									<div className="col-lg-6">
										<div className="row m-t20">
											<div className="col-lg-6 col-md-6 col-sm-6 col-6">
												<div className="counter-style-1 m-b30 m-sm-b15">
													<div className="text-secondry">
														<Count counter={25}/>
														<span>K</span>
													</div>
													<span className="counter-text">Satisfied Clients</span>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-6 col-6">
												<div className="counter-style-1 m-b30 m-sm-b15">
													<div className="text-secondry">
														<Count counter={35}/><span>+</span>
													</div>
													<span className="counter-text">Winning Awards</span>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-6 col-6">
												<div className="counter-style-1 m-b30">
													<div className="text-secondry">
														<Count counter={180}/><span>+</span>
													</div>
													<span className="counter-text">Completed works</span>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-6 col-6">
												<div className="counter-style-1 m-b30">
													<div className="text-secondry">
														<Count counter={120}/>
														<span>+</span>
													</div>
													<span className="counter-text">Media Posts</span>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="text-white">
											<h2 className="m-b10">We are here to manage your finance with experience</h2>
											<h5 className="fw5 m-t15">There are many variations of passages of Lorem Ipsum available, but the majority have.</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="section-area bg-gray section-sp3 case-studies" data-name="CASE">
							<div className="container">
								<div className="heading-bx text-center">
									<h2 className="title-head m-b0">See our case studies.</h2>
									<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								</div>
							</div>
							<CaseStudies />
						</div>
						
						<div className="section-area section-sp2">
							<div className="container">
								<LogoCarousel />
							</div>
						</div>
					
						<div className="section-area section-sp2 bg-gray" style={{backgroundImage:"url("+bgPic1+")"}}>
							<div className="container">
								<div className="heading-bx text-center">
									<h2 className="title-head m-b0">What clients talk about us</h2>
									<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								</div>
								
								<Testimonial />
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

export default About1;