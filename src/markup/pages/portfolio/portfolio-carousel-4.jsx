import React, { Component } from 'react';
import {Link as ScrollTo} from 'react-scroll';

// Layout
import Header from '../../layout/header/header1';
import Footer from '../../layout/footer/footer1';

// Elements
import ClientLogo from "../../elements/client-logo/logo-carousel";
import PortSlider from "../../elements/portfolio/portfolio-slider-4";

// Images
import bannerPic2 from '../../../images/banner/banner2.jpg';
import pattern1 from '../../../images/pattern/pt1.png';

class PortCarousel4 extends Component {
	
	render(){
		return (
			<>
				<Header />
				
				<div className="page-content bg-white">
					<div className="page-banner ovbl-dark page-banner-lg ovdt2 overlay-dotted no-pt parallax" style={{backgroundImage: "url("+bannerPic2+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<span className="banner-sm-title">Portfolio Carousel</span>
								<h1 className="text-white">We are not your average<br/> brand agency</h1>
							 </div>
						</div>
						<ScrollTo smooth={true} to="content-area" className="banner-bottom scroll-page"><i className="ti-arrow-down"></i></ScrollTo>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-gray" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container-fluid">
								<PortSlider />
							</div>
						</div>					
						
						<div className="section-area section-sp2 bg-white" style={{backgroundImage: "url("+pattern1+")"}}>
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

export default PortCarousel4;