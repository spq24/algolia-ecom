import React, { Component } from 'react';
import {Link } from 'react-router-dom';

// Layout
import Header from '../../layout/header/header4';
import Footer from '../../layout/footer/footer1';

// Elements
import ClientLogo from "../../elements/client-logo/logo-carousel";

// Images
import pattern1 from '../../../images/pattern/pt1.png';
import servicesPic2 from '../../../images/our-services/pic2.jpg';
import servicesPic3 from '../../../images/our-services/pic3.jpg';
import servicesPic4 from '../../../images/our-services/pic4.jpg';

class Services3 extends Component {
	
	render(){
		return (
			<>
				<Header />
				
				<div className="page-content bg-white">
					<div className="page-banner page-banner-sm">
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-black">Services Modern</h1>
								<div className="breadcrumb-row text-black">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
										<li>Services Modern</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp3">
							<div className="container">
								<div className="heading-bx text-center">
									<h2 className="title-head">We Offer The Best <br/>Solution For Business</h2>
									<p>There are many variations of passages of Lorem Ipsum avail able, but the majority have suffered alteration.</p>
								</div>
								<div>
									<div className="service-img-bx">
										<div className="service-media">
											<div className="video-media-bx">
												<img src={servicesPic3} alt=""/>
											</div>
										</div>
										<div className="service-info">
											<div className="title">
												<h3>Web Designing</h3>
												<p>Auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit ad litora torquent.</p>
											</div>	
											<ul className="list-check">
												<li>Web Templateinterface design </li>
												<li>Static website design</li>
												<li>Custom web design</li>
											</ul>
											<Link to={"/services-details"} className="btn radius-xl">View Services</Link>
										</div>
									</div>
									<div className="service-img-bx">
										<div className="service-media">
											<div className="video-media-bx">
												<img src={servicesPic2} alt=""/>
											</div>
										</div>
										<div className="service-info">
											<div className="title">
												<h3>Apps & Game Development</h3>
												<p>Auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit ad litora torquent.</p>
											</div>	
											<ul className="list-check right">
												<li>iPhone iOs Apps Development </li>
												<li>Android Apps Development </li>
												<li>Blackberry Apps Development</li>
											</ul>
											<Link to={"/services-details"} className="btn radius-xl">View Services</Link>
										</div>
									</div>
									<div className="service-img-bx">
										<div className="service-media">
											<div className="video-media-bx">
												<img src={servicesPic3} alt=""/>
											</div>
										</div>
										<div className="service-info">
											<div className="title">
												<h3>Seo Analysis & Design</h3>
												<p>Auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit ad litora torquent.</p>
											</div>	
											<ul className="list-check">
												<li>Award-winning design</li>
												<li>Super Fast Customer support</li>
												<li>Email Design</li>
											</ul>
											<Link to={"/services-details"} className="btn radius-xl">View Services</Link>
										</div>
									</div>
									<div className="service-img-bx">
										<div className="service-media">
											<div className="video-media-bx">
												<img src={servicesPic4} alt=""/>
											</div>
										</div>
										<div className="service-info">
											<div className="title">
												<h3>Research</h3>
												<p>Auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit ad litora torquent.</p>
											</div>	
											<ul className="list-check right">
												<li>Advertising Research </li>
												<li>Brand/Image Research</li>
												<li>Business/Product Development </li>
											</ul>
											<Link to={"/services-details"} className="btn radius-xl">View Services</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="section-area section-sp2 bg-gray" style={{backgroundImage: "url("+pattern1+")"}}>
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

export default Services3;