import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video'

// Layout
import Header from '../../layout/header/header4';
import Footer from '../../layout/footer/footer1';

// Elements
import ClientLogo from "../../elements/client-logo/logo-carousel";
import PortSlider from "../../elements/portfolio/portfolio-slider-3";
import PortSlider1 from "../../elements/portfolio/portfolio-slider-2";
import Skillbar from "../../elements/skillbar/skillbar";

// Images
import pattern1 from '../../../images/pattern/pt1.png';
import singlePic1 from '../../../images/portfolio/signle/pic1.jpg';
import singlePic2 from '../../../images/portfolio/signle/pic2.jpg';
import singlePic3 from '../../../images/portfolio/signle/pic3.jpg';
import portImg4 from '../../../images/portfolio/image_4.jpg';

class PortSingle3 extends Component {
	
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
					<div className="page-banner page-banner-sm">
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-black">Portfolio Single 3</h1>
								<div className="breadcrumb-row text-black">
									<ul className="list-inline">
										<li><Link to={"#"}><i className="fa fa-home"></i> Home</Link></li>
										<li>Portfolio Single 3</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp1 bg-white" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container">
								<div className="row align-items-center">
									<div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.4s">
										<div className="heading-bx">
											<h2 className="title-head m-b0">We Offer The Best Solution For Business</h2>
											<p className="m-b30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											<Link to={"contact-1"} className="btn button-md radius-xl">Contact Us</Link>
										</div>
									</div>
									<div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.8s">
										<div className="video-media-bx m-b30">
											<div className="video-bx">
												<img src={portImg4} alt=""/>
												<Link to={"#"} onClick={this.openModal} className="popup-youtube video-zoom"><i className="fa fa-play"></i></Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-area section-sp2 bg-gray">
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
						
						<div className="section-area bg-white">
							<PortSlider1 />
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
				
				<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='cnXapYkboRQ' onClose={() => this.setState({isOpen: false})} />
				
			</>
		);
	}
}

export default PortSingle3;