import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {Link as ScrollTo} from 'react-scroll';
import ModalVideo from 'react-modal-video'

// Layout
import Header from '../../layout/header/header1';
import Footer from '../../layout/footer/footer1';

// Elements
import ClientLogo from "../../elements/client-logo/logo-carousel";
import Counter from "../../elements/counter/counter2";
import PortSlider from "../../elements/portfolio/portfolio-slider-3";

// Images
import bannerPic1 from '../../../images/banner/banner1.jpg';
import pattern1 from '../../../images/pattern/pt1.png';
import portImg1 from '../../../images/portfolio/image_1.jpg';
import portImg3 from '../../../images/portfolio/image_3.jpg';
import portImg23 from '../../../images/portfolio/image_23.jpg';
import singlePic4 from '../../../images/portfolio/signle/pic4.jpg';
import singlePic5 from '../../../images/portfolio/signle/pic5.jpg';

class PortSingle4 extends Component {
	
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
					<div className="page-banner ovpr-dark overlay-dotted ovdt1 parallax" style={{backgroundImage: "url("+bannerPic1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Portfolio Single 4</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
										<li>Portfolio Single 4</li>
									</ul>
								</div>
							 </div>
						</div>
						<ScrollTo smooth={true} to="content-area" className="banner-bottom scroll-page"><i className="ti-arrow-down"></i></ScrollTo>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2">
							<div className="container">
								<div className="row">
									<div className="col-lg-6 m-b10">
										<div className="video-media-bx">
											<img src={portImg1} alt=""/>
										</div>
									</div>
									<div className="col-lg-6 m-b10">
										<div className="video-media-bx">
											<img src={portImg3} alt=""/>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="section-area bg-primary section-sp1 our-story">
							<div className="container">
								<div className="row align-items-center d-flex">
									<div className="col-lg-5 col-md-12 heading-bx text-white wow fadeInUp" data-wow-delay="0.4s">
										<h2 className="title-head">Our Story</h2>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
										<Link to={"#"} className="btn button-md white radius-xl">Read More</Link>
									</div>
									<div className="col-lg-7 col-md-12 heading-bx p-lr">
										<div className="video-media-bx">
											<div className="video-bx">
												<img src={portImg23} alt=""/>
												<Link to={"#"} onClick={this.openModal} className="popup-youtube video-zoom"><i className="fa fa-play"></i></Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="section-area bg-white section-sp2">
							<div className="container">
								<Counter />
							</div>
						</div>
						
						<div className="section-area bg-white">
							<div className="row m-0">
								<div className="col-lg-6">
									<img src={singlePic5} alt=""/>
								</div>
								<div className="col-lg-6">
									<img src={singlePic4} alt=""/>
								</div>
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
						
						<div className="section-area section-sp2 bg-gray" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container-max wow fadeIn" data-wow-delay="0.4s">
								<div className="heading-bx text-center">
									<h2 className="title-head m-b0">Related Work</h2>
									<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								</div>
								
								<PortSlider />
								
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

export default PortSingle4;