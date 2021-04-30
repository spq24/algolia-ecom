import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {Link as ScrollTo} from 'react-scroll';

// Layout
import Header from '../../layout/header/header1';
import Footer from '../../layout/footer/footer1';

// Elements
import ClientLogo from "../../elements/client-logo/logo-carousel";
import Testimonial from "../../elements/testimonial/testimonial2";
import Counter from "../../elements/counter/counter1";

// Images
import bannerPic1 from '../../../images/banner/banner1.jpg';
import pattern1 from '../../../images/pattern/pt1.png';
import bgPic1 from '../../../images/background/bg1.jpg';

class Services1 extends Component {
	
	render(){
		return (
			<>
				<Header />
				
				<div className="page-content bg-white">
					<div className="page-banner ovpr-dark overlay-dotted ovdt1 parallax" style={{backgroundImage: "url("+bannerPic1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Services Simple</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
										<li>Services Simple</li>
									</ul>
								</div>
							 </div>
						</div>
						<ScrollTo smooth={true} to="content-area" className="banner-bottom scroll-page"><i className="ti-arrow-down"></i></ScrollTo>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container">
								<div className="heading-bx text-center">
									<h2 className="title-head">We Offer The Best <br/>Solution For Business</h2>
									<p>There are many variations of passages of Lorem Ipsum avail able, but the majority have suffered alteration.</p>
								</div>
								<div className="row">
									<div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
										<div className="feature-container left feature-bx1 active">
											<div className="feature-lg text-white m-b20">
												<Link to={"#"} className="icon-cell"><i className="flaticon-chat-bubble"></i></Link> 
											</div>
											<div className="icon-content">
												<h5 className="ttr-tilte">Article & Keyword Research.</h5>
												<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
											</div>
										</div>
										<div className="feature-container left feature-bx1">
											<div className="feature-lg text-white m-b20">
												<Link to={"#"} className="icon-cell"><i className="flaticon-chat-bubble"></i></Link> 
											</div>
											<div className="icon-content">
												<h5 className="ttr-tilte">Social & Online Marketing</h5>
												<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
											</div>
										</div>
									</div>
									<div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
										<div className="feature-container left feature-bx1">
											<div className="feature-lg text-white m-b20">
												<Link to={"#"} className="icon-cell"><i className="flaticon-employee-2"></i></Link> 
											</div>
											<div className="icon-content">
												<h5 className="ttr-tilte">Interface Designer & UX Specialist.</h5>
												<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
											</div>
										</div>
										<div className="feature-container left feature-bx1">
											<div className="feature-lg text-white m-b20">
												<Link to={"#"} className="icon-cell"><i className="flaticon-computer"></i></Link> 
											</div>
											<div className="icon-content">
												<h5 className="ttr-tilte">Mobile Application Design & Dev.</h5>
												<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
											</div>
										</div>
									</div>
									<div className="col-lg-12 text-center">
										<Link to={"#"} className="btn button-md radius-xl">View Project</Link>
									</div>
								</div>
							</div>
						</div>
						
						<Counter />	
						
						<div className="section-area section-sp2" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container">
								<div className="heading-bx text-center">
									<h2 className="title-head m-b0">Take Our Services To Build <br/>Your Business</h2>
									<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								</div>
								<div className="service-list-bx">
									<div className="service-icon-bx">
										<div className="service-icon" data-name="1"> 
											<Link to={"#"} className="ti-comments"></Link>
										</div>
										<div className="service-info">
											<h4 className="title"><Link to={"/services-details"}>Article & Keyword Research.</Link></h4>
											<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
											<Link to={"/services-details"} className="btn button-md radius-xl">View Details</Link>
										</div>
									</div>
									<div className="service-icon-bx">
										<div className="service-icon" data-name="2">
											<Link to={"#"} className="ti-user"></Link>
										</div>
										<div className="service-info">
											<h4 className="title"><Link to={"/services-details"}>Interface Designer & UX Specialist.</Link></h4>
											<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
											<Link to={"/services-details"} className="btn button-md radius-xl">View Details</Link>
										</div>
									</div>
									<div className="service-icon-bx">
										<div className="service-icon" data-name="3">
											<Link to={"#"} className="ti-desktop"></Link>
										</div>
										<div className="service-info">
											<h4 className="title"><Link to={"/services-details"}>Social & Online Marketing</Link></h4>
											<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
											<Link to={"/services-details"} className="btn button-md radius-xl">View Details</Link>
										</div>
									</div>
									<div className="service-icon-bx">
										<div className="service-icon" data-name="4">
											<Link to={"#"} className="ti-mobile"></Link>
										</div>
										<div className="service-info">
											<h4 className="title"><Link to={"/services-details"}>Mobile Application Design & Dev.</Link></h4>
											<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
											<Link to={"/services-details"} className="btn button-md radius-xl">View Details</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="section-area section-sp2 ovpr-dark about-video2 bg-fix" style={{backgroundImage:"url("+bgPic1+")", backgroundPosition:"top",}}>
							<div className="container">
								<div className="heading-bx text-center text-white">
									<h2 className="title-head m-b0">What clients talk about us</h2>
									<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								</div>
								
								<Testimonial />
							</div>
						</div>
						
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
				
			</>
		);
	}
}

export default Services1;