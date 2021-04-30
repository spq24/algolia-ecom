import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video'

// Images
import pattern1 from '../../../images/pattern/pt1.png';
import aboutPic1 from '../../../images/about/pic1.jpg';
import Count from '../../elements/counter/counter-sensor';

class About1 extends Component{
	
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
		return(
			<>
				<div className="section-area section-sp2 parallax" style={{backgroundImage: "url("+pattern1+")"}}>
					<div className="container">
						<div className="row">
							<div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
								<div className="heading-bx">
									<h2 className="title-head">About Company</h2>
									<p>There are many variations of passages of Lorem Ipsum avail able, but the majority have suffered alteration.</p>
								</div>
								<div className="feature-container left feature-bx1">
									<div className="feature-lg text-white m-b20">
										<Link to={"#"} className="icon-cell"><i className="flaticon-presentation"></i></Link> 
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">Performance Improvement</h5>
										<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
									</div>
								</div>
								<div className="feature-container left feature-bx1 active">
									<div className="feature-lg text-white m-b20">
										<Link to={"#"} className="icon-cell"><i className="flaticon-employee"></i></Link> 
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">Customer Strategy & Marketing</h5>
										<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..</p>
									</div>
								</div>
								<Link to={"portfolio-grid-3"} className="btn button-md radius-xl">View Project</Link>
							</div>
							<div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
								<div className="about-imgbox">
									<img src={aboutPic1} alt=""/>
									<div className="about-year">
										<h2><Count counter={20}/>+</h2>
										<h5>Year In industry</h5>
										<Link to={"#"} onClick={this.openModal} className="popup-youtube videoplay-bx"><i className="fa fa-play"></i> <span>Play Video</span></Link>
										<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='cnXapYkboRQ' onClose={() => this.setState({isOpen: false})} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default About1;