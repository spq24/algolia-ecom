import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../../layout/header/header3";
import Footer from "../../layout/footer/footer1";

// Elements
import ClientLogo from "../../elements/client-logo/logo-carousel";
import Counter from "../../elements/counter/counter2";
import Team from '../../elements/team/team2';

// Images
import aboutPic4 from '../../../images/about/pic4.jpg';
import aboutPic5 from '../../../images/about/pic5.jpg';
import aboutPic7 from '../../../images/about/pic7.jpg';
import pattern1 from '../../../images/pattern/pt1.png';

class About3 extends Component {
	
	render(){
		return (
			<>
				<Header/>
				
				<div className="page-content bg-white">
					<div className="page-banner page-banner-sm">
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-black">About us Modern</h1>
								<div className="breadcrumb-row text-black">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
										<li>About us Modern</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp3">
							<div className="container">
								<div className="row">
									<div className="col-lg-6 m-b10 wow fadeIn" data-wow-delay="0.4s">
										<div className="video-media-bx">
											<img src={aboutPic4} alt=""/>
										</div>
									</div>
									<div className="col-lg-6 m-b10 wow fadeIn" data-wow-delay="0.8s">
										<div className="video-media-bx">
											<img src={aboutPic5} alt=""/>
										</div>
									</div>
								</div>
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
						
						<div className="section-area bg-gray section-sp1 our-story">
							<div className="container">
								<div className="row align-items-center d-flex">
									<div className="col-lg-5 col-md-12 heading-bx">
										<h2 className="title-head">Our Story</h2>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
										<Link to={"#"} className="btn button-md radius-xl">Read More</Link>
									</div>
									<div className="col-lg-7 col-md-12 heading-bx p-lr">
										<div className="video-media-bx">
											<div className="video-bx">
												<img src={aboutPic7} alt=""/>
												<div className="video-media-bx">
													<Link to="https://www.youtube.com/watch?v=iol8n3m88SA" className="popup-youtube video-zoom"><i className="fa fa-play"></i></Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="section-area bg-white section-sp1">
							<div className="container">
								<Counter />
							</div>
						</div>
						
						<div className="section-area section-sp1 bg-gray" style={{backgroundImage:"url("+pattern1+")"}}>
							<div className="container">
								<div className="heading-bx text-center wow fadeIn" data-wow-delay="0.3s">
									<h2 className="title-head m-b0">Meet Our Awesome <br/>Team Mamber</h2>
									<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								</div>
								<Team />
							</div>
						</div>
						
					</div>
				</div>
				
				<Footer/>
				
			</>
		);
	}
}

export default About3;