import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {Link as ScrollTo} from 'react-scroll';
import ModalVideo from 'react-modal-video'

// Layout
import Header from '../../layout/header/header1';
import Footer from '../../layout/footer/footer1';

// Elements
import ClientLogo from "../../elements/client-logo/logo-carousel";
import Counter from "../../elements/counter/counter1";
import Count from '../../elements/counter/counter-sensor';

// Images
import bannerPic2 from '../../../images/banner/banner2.jpg';
import pattern1 from '../../../images/pattern/pt1.png';
import aboutPic3 from '../../../images/about/pic3.jpg';

class Services2 extends Component {
	
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
				<Header />
				
				<div className="page-content bg-white">
					<div className="page-banner ovbl-dark page-banner-lg ovdt1 overlay-dotted no-pt parallax" style={{backgroundImage: "url("+bannerPic2+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<span className="banner-sm-title">Our Services</span>
								<h1 className="text-white">A creative agency specialized in brand<br/>strategy and digital creation</h1>
							 </div>
						</div>
						<ScrollTo smooth={true} to="content-area" className="banner-bottom scroll-page"><i className="ti-arrow-down"></i></ScrollTo>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp1 bg-fix ">
							<div className="container about-video">
								<div className="row">
									<div className="col-lg-12 col-xl-6">
										<div className="row m-t20">
											<div className="col-xl-6 col-lg-3 col-md-6 col-sm-6 col-6">
												<div className="counter-style-1 text-black m-b30 m-sm-b15">
													<div className="text-primary">
														<Count counter={25}/>
														<span>K</span>
													</div>
													<span className="counter-text">Satisfied Clients</span>
												</div>
											</div>
											<div className="col-xl-6 col-lg-3 col-md-6 col-sm-6 col-6">
												<div className="counter-style-1 text-black m-b30 m-sm-b15">
													<div className="text-primary">
														<Count counter={35}/>
														<span>+</span>
													</div>
													<span className="counter-text">Winning Awards</span>
												</div>
											</div>
											<div className="col-xl-6 col-lg-3 col-md-6 col-sm-6 col-6">
												<div className="counter-style-1 text-black m-b30 m-sm-b15">
													<div className="text-primary">
														<Count counter={180}/>
														<span>+</span>
													</div>
													<span className="counter-text">Completed works</span>
												</div>
											</div>
											<div className="col-xl-6 col-lg-3 col-md-6 col-sm-6 col-6">
												<div className="counter-style-1 text-black m-b30 m-sm-b15">
													<div className="text-primary">
														<Count counter={120}/>
														<span>+</span>
													</div>
													<span className="counter-text">Media Posts</span>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-6 col-lg-12">
										<div className="text-black">
											<h2 className="m-b10">We are here to manage your finance with experience</h2>
											<h5 className="fw5 m-t15">There are many variations of passages of Lorem Ipsum available, but the majority have.</h5>
										</div>
									</div>
								</div>
								<div className="row section-sp4">
									<div className="col-lg-12">
										<div className="video-media-bx">
											<img src={aboutPic3} alt=""/>
											<Link to={"#"} onClick={this.openModal} className="popup-youtube"><i className="fa fa-play"></i></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="section-area section-sp2 bg-gray" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container">
								<div className="heading-bx text-center">
									<h2 className="title-head m-b0">Take Our Services To Build <br/>Your Business</h2>
									<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
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
									<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.9s">
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
									<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
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
									<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
										<div className="feature-container feature-bx2">
											<div className="feature-lg text-white m-b20">
												<span className="icon-cell"><i className="flaticon-calculator"></i></span> 
											</div>
											<div className="icon-content">
												<h5 className="ttr-tilte">Our Service</h5>
												<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
												<Link to={"/services-details"} className="feature-btn">View More</Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.9s">
										<div className="feature-container feature-bx2">
											<div className="feature-lg text-white m-b20">
												<span className="icon-cell"><i className="flaticon-employee-1"></i></span> 
											</div>
											<div className="icon-content">
												<h5 className="ttr-tilte">Our Team</h5>
												<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
												<Link to={"/services-details"} className="feature-btn">View More</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<Counter />	
					
						<div className="section-area section-sp2" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container">
								<div className="heading-bx text-center">
									<h2 className="title-head m-b0">We Are Known By The <br/>Companies We Keep</h2>
									<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								</div>
								<ClientLogo />
							</div>
						</div>
						
					</div>
					
				</div>
				
				<Footer />
				
				<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='cnXapYkboRQ' onClose={() => this.setState({isOpen: false})} />
				
			</>
		);
	}
}

export default Services2;