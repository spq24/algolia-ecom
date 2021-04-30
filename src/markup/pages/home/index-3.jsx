import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../../layout/header/header3";
import Footer from "../../layout/footer/footer3";

// Elements
import Action from '../../elements/action-bx/action1';
import Counter from '../../elements/counter/counter2';
import CaseStudies from '../../elements/case-studies/case-studies2';

// Images
import bgPic3 from "../../../images/background/bg3.png"
import bgPic4 from "../../../images/background/bg4.png"
import bannerImg from "../../../images/banner/home-bnr-img.jpg"
import aboutPic11 from "../../../images/about/pic11.jpg"
import aboutPic12 from "../../../images/about/pic12.jpg"
import aboutPic13 from "../../../images/about/pic13.jpg"

class Index3 extends Component {
	render(){
		return (
			<>
			
				
				<Header />
				
				<div className="page-content bg-white">
				
					<div className="page-banner home-bnr" style={{backgroundImage: "url("+bgPic4+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<div className="row align-items-center">
									<div className="col-md-6">
										<div className="home-bnr-title">
											<h1 className="title">Unlimate Platform To Monitor Your Best Workflow.</h1>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
											<div className="search-bx style-2">
												<form role="search">
													<div className="input-group">
														<input name="text" className="form-control" placeholder="Enter your keywords..." type="text"/>
														<span className="input-group-btn">
															<button type="submit" className="btn">Get Start</button>
														</span> 
													</div>
												</form>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="home-bnr-img">
											<img src={bannerImg} alt=""/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-white" style={{backgroundImage: "url("+bgPic3+")"}}>
							<div className="container">
								<div className="row align-items-center">
									<div className="col-lg-6 col-md-12 wow fadeIn" data-wow-delay="0.6s">
										<div className="about-img-box2">
											<div className="img-bx2">
												<img src={aboutPic12} alt=""/>
												<img src={aboutPic13} alt=""/>
											</div>
											<div className="img-bx1">
												<img src={aboutPic11} alt=""/>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-12 wow fadeIn" data-wow-delay="0.3s">
										<div className="heading-bx style3">
											<h3 className="title-head m-b0">We Offer The Best Solution For Business</h3>
											<p className="m-b15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
											<ul className="list-check">
												<li>Amazine commiunication experience.</li>
												<li>Best designing experience with trending tools and sizes.</li>
												<li>training and commiunication method remotley.</li>
												<li>24/7 Hour online supports.</li>
											</ul>
											<Link to={"contact-1"} className="btn button-md radius-xl">Contact Us</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="content-block" id="content-area">
							
							<div className="section-area section-sp1 bg-gray">
								<div className="container">
									<div className="style3 heading-bx">
										<h3 className="title-head m-b0">Take Our Services To Build <br/>Your Business </h3>
										<p className="m-b0">Lorem Ipsum is simply dummy text of the printing<br/> and typesetting industry.  </p>
									</div>
									<div className="row">
										<div className="col-lg-3 col-md-6 col-sm-6">
											<div className="feature-container feature-bx4">
												<div className="feature-box-xs bg-primary m-b20">
													<Link to={"#"} className="icon-cell"><i className="flaticon-growth"></i></Link> 
												</div>
												<div className="icon-content">
													<h5 className="ttr-tilte">Our Responsibility</h5>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6">
											<div className="feature-container feature-bx4">
												<div className="feature-box-xs bg-red m-b20">
													<Link to={"#"} className="icon-cell"><i className="flaticon-increase"></i></Link> 
												</div>
												<div className="icon-content">
													<h5 className="ttr-tilte">Our Approach</h5>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6">
											<div className="feature-container feature-bx4">
												<div className="feature-box-xs bg-green m-b20">
													<Link to={"#"} className="icon-cell"><i className="flaticon-rocket"></i></Link> 
												</div>
												<div className="icon-content">
													<h5 className="ttr-tilte">Our Mission</h5>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6">
											<div className="feature-container feature-bx4">
												<div className="feature-box-xs bg-blue m-b20">
													<Link to={"#"} className="icon-cell"><i className="flaticon-target"></i></Link> 
												</div>
												<div className="icon-content">
													<h5 className="ttr-tilte">Our Responsibility</h5>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6">
											<div className="feature-container feature-bx4">
												<div className="feature-box-xs bg-yellow m-b20">
													<Link to={"#"} className="icon-cell"><i className="flaticon-calculator"></i></Link> 
												</div>
												<div className="icon-content">
													<h5 className="ttr-tilte">Our Service</h5>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6">
											<div className="feature-container feature-bx4">
												<div className="feature-box-xs bg-pink m-b20">
													<Link to={"#"} className="icon-cell"><i className="flaticon-employee-1"></i></Link> 
												</div>
												<div className="icon-content">
													<h5 className="ttr-tilte">Our Team</h5>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6">
											<div className="feature-container feature-bx4">
												<div className="feature-box-xs bg-orange m-b20">
													<Link to={"#"} className="icon-cell"><i className="flaticon-calculator"></i></Link> 
												</div>
												<div className="icon-content">
													<h5 className="ttr-tilte">Our Service</h5>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-md-6 col-sm-6">
											<div className="feature-container feature-bx4">
												<div className="feature-box-xs bg-red m-b20">
													<Link to={"#"} className="icon-cell"><i className="flaticon-employee-1"></i></Link> 
												</div>
												<div className="icon-content">
													<h5 className="ttr-tilte">Our Team</h5>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
						</div>
						
						<div className="section-area bg-white section-sp3 case-studies" style={{backgroundImage: "url("+bgPic3+")"}}>
							<div className="container">
								<div className="heading-bx wow fadeIn style3 text-center" data-wow-delay="0.3s">
									<h2 className="title-head m-b0">See our case studies.</h2>
									<p className="m-b0">There are many variations of passages of Lorem Ipsum available, <br/>but the majority have suffered alteration.</p>
								</div>
							</div>
						
							<CaseStudies />
							
						</div>
						
						<div className="section-area bg-white section-sp1" style={{backgroundImage: "url("+bgPic3+")"}}>
							<div className="container">
								<Counter />
							</div>
						</div>
						
						<Action />
						
					</div>
				</div>

				<Footer/>
				
			</>
		);
	}
}

export default Index3;