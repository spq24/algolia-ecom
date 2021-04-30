import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Link as ScrollTo} from 'react-scroll'
import ModalVideo from 'react-modal-video'

// Layout
import Header from "../../layout/header/header1";
import Footer from "../../layout/footer/footer1";

// Elements
import Team from '../../elements/team/team2';
import Testimonial from "../../elements/testimonial/testimonial2";
import ClientLogo from "../../elements/client-logo/logo-carousel";
import Counter from "../../elements/counter/counter2";

// Images
import bannerPic2 from '../../../images/banner/banner2.jpg';
import bgPic1 from '../../../images/background/bg1.jpg';
import bgPic2 from '../../../images/background/bg2.jpg';
import pattern1 from '../../../images/pattern/pt1.png';
import aboutPic1 from '../../../images/about/pic1.jpg';
import aboutPic2 from '../../../images/about/pic2.jpg';

class About2 extends Component {
	
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
						
						<div className="section-area section-sp2 bg-white" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container">
								<div className="row align-items-center">
									<div className="col-lg-6 col-md-12 wow fadeIn" data-wow-delay="0.3s">
										<div className="heading-bx">
											<h2 className="title-head m-b0">We Offer The Best Solution For Business</h2>
											<p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											<p className="m-b30">Printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the simply dummy text of the printing and  dummy text of the printing and typesetting industry typesetting industry simply.</p>
											<Link to={"contact-1"} className="btn button-md radius-xl">Contact Us</Link>
										</div>
									</div>
									<div className="col-lg-6 col-md-12 wow fadeIn" data-wow-delay="0.6s">
										<div className="about-img-box">
											<img src={aboutPic1} alt=""/>
											<img src={aboutPic2} alt=""/>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="section-area section-sp2 ovpr-dark about-video2 parallax" style={{backgroundImage: "url("+bgPic2+")", backgroundSize: "cover"}}>
							<div className="container">
								<div className="video-media-bx">
									<Link to={"#"} onClick={this.openModal} className="popup-youtube video-zoom"><i className="fa fa-play"></i></Link>
								</div>
							</div>
						</div>
						
						<div className="section-area bg-gray section-sp1">
							<div className="container">
								<Counter />
							</div>
						</div>
						
						<div className="section-area section-sp1" style={{backgroundImage:"url("+pattern1+")"}}>
							<div className="container">
								<div className="heading-bx text-center wow fadeIn" data-wow-delay="0.3s">
									<h2 className="title-head m-b0">Meet Our Awesome <br/>Team Mamber</h2>
									<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								</div>
								<Team />
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
				
				<Footer/>
				
				<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='cnXapYkboRQ' onClose={() => this.setState({isOpen: false})} />
				
			</>
		);
	}
}

export default About2;