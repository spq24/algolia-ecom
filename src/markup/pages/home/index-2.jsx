import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../../layout/header/header2";
import Footer from "../../layout/footer/footer2";

// Elements
import Count from '../../elements/counter/counter-sensor';
import MainSlider from '../../elements/main-slider/slider2';
import Team from '../../elements/team/team3';
import Subscribe from '../../elements/subscribe-form/subscribe';
import PriceTable from '../../elements/price-table/price-table';
import Testimonial from '../../elements/testimonial/testimonial3';
import ProjectsSlider from '../../elements/projects/projects-slider-1';

// Images
import bgPic5 from '../../../images/background/bg5.jpg';
import bgPic6 from '../../../images/background/bg6.jpg';
import bgPic7 from '../../../images/background/bg7.jpg';

class Index2 extends Component {
	render(){
		return (
			<>
			
				
				<Header />
				
				<div className="page-content bg-white">
					
					<MainSlider />
					
					<div className="content-block" id="content-area">
						
						
						<div className="section-area section-sp3 about-box parallax" style={{backgroundImage: "url("+bgPic5+")", backgroundSize:"cover"}}>
							<div className="container">
								<div className="row align-items-center">
									<div className="col-lg-6 col-md-12 wow fadeIn" data-wow-delay="0.3s">
										<div className="heading-bx style2">
											<h2 className="title-head">We Offer <br/>The Best Solution <br/>For Business</h2>
											<p className="m-b30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											<Link to={"contact-1"} className="btn button-md red">Contact Us</Link>
										</div>
									</div>
									<div className="col-lg-6 col-md-12 wow fadeIn" data-wow-delay="0.6s">
										<div className="row">
											<div className="col-lg-6 col-md-6">
												<div className="feature-container feature-bx3 m-b30">
													<div className="feature-lg text-white m-b10">
														<span className="icon-cell"><i className="flaticon-growth"></i></span> 
													</div>
													<div className="icon-content">
														<h5 className="ttr-tilte">Our Responsibility</h5>
														<p>There are many variations of passages of Lorem.</p>
														<Link to={"/services-details"} className="btn-link">View More</Link>
													</div>
												</div>
												<div className="feature-container feature-bx3 blue m-tb30">
													<div className="feature-lg text-white m-b10">
														<span className="icon-cell"><i className="flaticon-rocket"></i></span> 
													</div>
													<div className="icon-content">
														<h5 className="ttr-tilte">Our Mission</h5>
														<p>There are many variations of passages of Lorem.</p>
														<Link to={"/services-details"} className="btn-link">View More</Link>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="feature-container feature-bx3 red m-tb30 m-sm-t0">
													<div className="feature-lg text-white m-b10">
														<span className="icon-cell"><i className="flaticon-increase"></i></span> 
													</div>
													<div className="icon-content">
														<h5 className="ttr-tilte">Our Approach</h5>
														<p>There are many variations of passages of Lorem.</p>
														<Link to={"/services-details"} className="btn-link">View More</Link>
													</div>
												</div>	
												<div className="feature-container feature-bx3 green">
													<div className="feature-lg text-white m-b10">
														<span className="icon-cell"><i className="flaticon-growth"></i></span> 
													</div>
													<div className="icon-content">
														<h5 className="ttr-tilte">Our Responsibility</h5>
														<p>There are many variations of passages of Lorem.</p>
														<Link to={"/services-details"} className="btn-link">View More</Link>
													</div>
												</div>
											</div>
											
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="section-area section-sp1 parallax"  style={{backgroundImage: "url("+bgPic6+")"}}>
							<div className="container">
								<div className="row">
									<div className="col-md-12 style2 heading-bx text-center">
										<h2 className="title-head m-b0">Meet Our Awesome <br/>Team Mamber</h2>
										<p className="m-b0">Lorem Ipsum is simply dummy text of the printing<br/> and typesetting industry.  </p>
									</div>
								</div>
								
								<Team />
								
							</div>	
						</div>
						
						
						<div className="section-area section-sp3 parallax" style={{backgroundImage: "url("+bgPic7+")"}}>
							<div className="container">
								<div className="row">
									<div className="col-md-12 style2 heading-bx text-center">
										<h2 className="title-head m-b0">Choose Your Best Plan</h2>
										<p className="m-b0">Lorem Ipsum is simply dummy text of the printing<br/> and typesetting industry.  </p>
									</div>
								</div>
								
								<PriceTable />
								
							</div>	
						</div>
						
						<div className="section-area section-sp3 parallax"  style={{backgroundImage: "url("+bgPic5+")"}}>
							<div className="container">
								<div className="row">
									<div className="col-lg-5 col-md-12 style2 heading-bx">
										<h2 className="title-head m-b0">Our Projects</h2>
										<p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
									</div>
									<div className="col-lg-7 col-md-12 col-sm-12 col-12">
										<div className="row">
											<div className="col-lg-4 col-md-4 col-sm-4 col-12">
												<div className="counter-style-3 m-b30 red">
													<div className="text-secondry">
														<Count counter={25}/>
														<span>K</span>
													</div>
													<span className="counter-text">Satisfied Clients</span>
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-4 col-12">
												<div className="counter-style-3 m-t30 blue m-xs-b30 m-xs-t0">
													<div className="text-secondry">
														<Count counter={35}/>
														<span>+</span>
													</div>
													<span className="counter-text">Winning Awards</span>
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-4 col-12">
												<div className="counter-style-3 m-b30 orange m-xs-b0">
													<div className="text-secondry">
														<Count counter={180}/>
														<span>+</span>
													</div>
													<span className="counter-text">Completed works</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<ProjectsSlider />
						
						</div>
						
						<div className="section-area section-sp2 bg-gray parallax" style={{backgroundImage: "url("+bgPic7+")", backgroundPosition: "top"}}>
							<div className="container">
								<div className="heading-bx style2 text-center wow fadeIn" data-wow-delay="0.3s">
									<h2 className="title-head m-b0">What clients talk about us</h2>
									<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								</div>
								
								<Testimonial />
								
							</div>
						</div>
						
						<Subscribe />
						
					</div>
				</div>

				<Footer/>
				
			</>
		);
	}
}

export default Index2;