import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {Link as ScrollTo} from 'react-scroll';

// Layout
import Header from '../../layout/header/header1';
import Footer from '../../layout/footer/footer1';

// Images
import bannerPic1 from '../../../images/banner/banner1.jpg';
import aboutPic3 from '../../../images/about/pic3.jpg';

class ServicesDetails extends Component {
	
	render(){
		return (
			<>
				<Header />
				
				<div className="page-content bg-white">
					<div className="page-banner ovpr-dark overlay-dotted ovdt1 parallax" style={{backgroundImage: "url("+bannerPic1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Services Details</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
										<li>Services Details</li>
									</ul>
								</div>
							 </div>
						</div>
						<ScrollTo smooth={true} to="content-area" className="banner-bottom scroll-page"><i className="ti-arrow-down"></i></ScrollTo>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp1 bg-fix bg-gray">
							<div className="container about-video">
								<div className="row">
									<div className="col-lg-4 m-b30 wow fadeInUp" data-wow-delay="0.2s">
										<aside className="sticky-top">
											<div className="widget">
												<ul className="service-list">
													<li className="active"><Link to={"#"}>User Research</Link></li>
													<li><Link to={"#"}>Business Strategy</Link></li>
													<li><Link to={"#"}>Media Marketing</Link></li>
													<li><Link to={"#"}>Web Design</Link></li>
													<li><Link to={"#"}>SEO, PPC Marketing</Link></li>
													<li><Link to={"#"}>Social Marketing</Link></li>
												</ul>
											</div>
											<div className="widget">
												<div className="brochure-bx">
													<h5 className="title">Brochure</h5>
													<p>Benefit of the socie where we oper ate success for the website done</p>
													<Link to={"#"} className="btn-secondry radius-xl button-md white">Download</Link>
												</div>
											</div>
										</aside>
									</div>
									<div className="col-lg-8 service-textarea">
										<h2 className="title m-b10">Build your Future Together</h2>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
										<div className="m-b30">
											<img src={aboutPic3} alt=""/>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
										<h3 className="m-b5">Our Benefits</h3>
										<p>Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
										<ul className="list-circle">
											<li>Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding, gain customer trust to offer appropriate advice, and bring about suggestions on suitable technology to transform your business.</li>
											<li>Mitech takes into consideration every little detail to make sure the system run smoothly and responsively. Mitech employs a new technique called Minified Technology for securing customers' database & building up highly confidential firewalls.</li>
											<li>We reduce redundant complex calculations and lengthy erroneous code texts with simpler ones to ensure Mitech would run seamlessly and the design is reserved in its best form when viewed from a wide range of mobile devices & browsers.</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						
					</div>
					
				</div>
				
				<Footer />
				
			</>
		);
	}
}

export default ServicesDetails;