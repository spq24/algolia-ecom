import React, { Component } from 'react';
import {Link as ScrollTo} from 'react-scroll';

// Layout
import Header from '../../layout/header/header1';
import Footer from '../../layout/footer/footer1';

// Elements
import ClientLogo from "../../elements/client-logo/logo-carousel";
import PortSlider from "../../elements/portfolio/portfolio-slider-3";
import Skillbar from "../../elements/skillbar/skillbar";

// Images
import bannerPic2 from '../../../images/banner/banner2.jpg';
import pattern1 from '../../../images/pattern/pt1.png';
import singlePic1 from '../../../images/portfolio/signle/pic1.jpg';
import singlePic2 from '../../../images/portfolio/signle/pic2.jpg';
import singlePic3 from '../../../images/portfolio/signle/pic3.jpg';
import portFullPic1 from '../../../images/portfolio/full/pic1.jpg';

class PortSingle1 extends Component {
	
	render(){
		return (
			<>
				<Header />
				
				<div className="page-content bg-white">
					<div className="page-banner ovbl-dark page-banner-lg ovdt2 overlay-dotted no-pt parallax" style={{backgroundImage: "url("+bannerPic2+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<span className="banner-sm-title">Portfolio</span>
								<h1 className="text-white">We are not your average<br/> brand agency</h1>
							 </div>
						</div>
						<ScrollTo smooth={true} to="content-area" className="banner-bottom scroll-page"><i className="ti-arrow-down"></i></ScrollTo>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp3 bg-white">
							<div className="container">
								<div className="row">
									<div className="col-lg-6 col-md-6 col-sm-6 m-b30">
										<img src={singlePic1} alt=""/>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 m-b30">
										<img src={singlePic2} alt=""/>
									</div>
									<div className="col-lg-12">
										<img src={singlePic3} alt=""/>
									</div>
								</div>
							</div>
						</div>
						
						<Skillbar />
						
						<div className="section-area">
							<img src={portFullPic1} alt=""/>
						</div>
						
						<div className="section-area section-sp2 bg-gray" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container-max wow fadeIn" data-wow-delay="0.4s">
								<div className="heading-bx text-center">
									<h2 className="title-head m-b0">Related Work</h2>
									<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								</div>
								
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

export default PortSingle1;