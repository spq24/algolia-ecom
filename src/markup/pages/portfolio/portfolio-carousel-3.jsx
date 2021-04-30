import React, { Component } from 'react';
import {Link } from 'react-router-dom';

// Layout
import Header from '../../layout/header/header4';
import Footer from '../../layout/footer/footer1';

// Elements
import ClientLogo from "../../elements/client-logo/logo-carousel";
import PortSlider from "../../elements/portfolio/portfolio-slider-3";

// Images
import pattern1 from '../../../images/pattern/pt1.png';

class PortCarousel3 extends Component {
	
	render(){
		return (
			<>
				<Header />
				
				<div className="page-content bg-white">
					<div className="page-banner page-banner-sm" style={{backgroundImage: "url("+pattern1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-black">Portfolio Carousel 3</h1>
								<div className="breadcrumb-row text-black">
									<ul className="list-inline">
										<li><Link to={"#"}><i className="fa fa-home"></i> Home</Link></li>
										<li>Portfolio Carousel 3</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-white" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container-max">
								<PortSlider />
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

export default PortCarousel3;