import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ModalVideo from 'react-modal-video'

// Layout
import Header from "../../layout/header/header1";
import Footer from "../../layout/footer/footer1";

// Elements
import Count from '../../elements/counter/counter-sensor';
import MainSlider from '../../elements/main-slider/slider1';
import About from '../../elements/about/about1';
import Team from '../../elements/team/team2';
import Testimonial from '../../elements/testimonial/testimonial1';
import BlogSlider from '../../elements/blog/blog-slider';
import ContactSidebar from '../../elements/contact-sidebar';

// Images
import blogGridPic1 from '../../../images/blog/grid/pic1.jpg';
import aboutPic2 from '../../../images/about/pic2.jpg';
import bgPic2 from '../../../images/background/bg2.jpg';
import bgPic3 from '../../../images/background/bg3.jpg';
import partnerLogo1 from '../../../images/partner/logo1.png';
import partnerLogo2 from '../../../images/partner/logo2.png';
import partnerLogo3 from '../../../images/partner/logo3.png';
import partnerLogo4 from '../../../images/partner/logo4.png';
import partnerLogo5 from '../../../images/partner/logo5.png';
import partnerLogo6 from '../../../images/partner/logo6.png';
import partnerLogo7 from '../../../images/partner/logo7.png';
import partnerLogo8 from '../../../images/partner/logo8.png';
import partnerLogo9 from '../../../images/partner/logo9.png';

class Index extends Component{
	
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
				
					<MainSlider />
					<ContactSidebar />
					
					<div className="content-block" id="content-area">
						
						<About />
						
						<div className="section-area section-sp3 ovpr-dark bg-fix about-media-bx parallax" style={{backgroundImage: "url("+bgPic2+")"}}>
							<div className="container">
								<div className="row">
									<div className="col-lg-6 wow fadeInUp m-md-b30" data-wow-delay="0.4s">
										<div className="video-media-bx">
											<img src={aboutPic2} alt=""/>
											<Link to={"#"} onClick={this.openModal} className="popup-youtube"><i className="fa fa-play"></i></Link>
										</div>
									</div>
									<div className="col-lg-6 wow fadeIn" data-wow-delay="0.8s">
										<div className="heading-bx text-white m-t20">
											<h2 className="m-b10">We are here to manage your finance with experience</h2>
											<h5 className="fw5 m-t15">There are many variations of passages of Lorem Ipsum available, but the majority have.</h5>
										</div>
										<div className="row">
											<div className="col-lg-4 col-md-4 col-sm-4 col-4">
												<div className="counter-style-1">
													<div className="text-secondry">
														<Count counter={25}/>													
														<span>K</span>
													</div>
													<span className="counter-text">Satisfied Clients</span>
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-4 col-4">
												<div className="counter-style-1">
													<div className="text-secondry">
														<Count counter={35}/>
														<span>+</span>
													</div>
													<span className="counter-text">Winning Awards</span>
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-sm-4 col-4">
												<div className="counter-style-1">
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
						</div>
						
						<div className="section-area bg-gray our-partner" data-name="PARTNER">
							<div className="container">
								<div className="row">
									<div className="col-lg-6 section-sp3">
										<div className="heading-bx">
											<h2 className="title-head m-b0">We Are Known <br/>By The Companies <br/>We Keep</h2>
											<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
										</div>
										<Link to={"/portfolio-grid-4"} className="btn button-md radius-xl">View Project</Link>
									</div>
									<div className="col-lg-6">
										<div className="our-partner-box">
											<div className="partner-logo"><Link to={"#"}><img src={partnerLogo1} alt=""/></Link></div>
											<div className="partner-logo"><Link to={"#"}><img src={partnerLogo2} alt=""/></Link></div>
											<div className="partner-logo"><Link to={"#"}><img src={partnerLogo3} alt=""/></Link></div>
											<div className="partner-logo"><Link to={"#"}><img src={partnerLogo4} alt=""/></Link></div>
											<div className="partner-logo"><Link to={"#"}><img src={partnerLogo5} alt=""/></Link></div>
											<div className="partner-logo"><Link to={"#"}><img src={partnerLogo6} alt=""/></Link></div>
											<div className="partner-logo"><Link to={"#"}><img src={partnerLogo7} alt=""/></Link></div>
											<div className="partner-logo"><Link to={"#"}><img src={partnerLogo8} alt=""/></Link></div>
											<div className="partner-logo"><Link to={"#"}><img src={partnerLogo9} alt=""/></Link></div>
										</div>
									</div>
								</div>
						
					
							</div>
						</div>
						
						<div className="section-area section-sp1 bg-gray">
							<div className="container">
								<Team />
							</div>
						</div>
						
						<div className="section-area section-sp2 bg-fix ovprd-dark news-box parallax" style={{backgroundImage: "url("+bgPic3+")"}}>
							<div className="container posi-rl zi1">
								<div className="heading-bx text-white">
									<h2 className="m-b10">Here’s What Our Customers Have<br/>Been Saying About Us</h2>
								</div>
								
								<Testimonial />
							
							</div>
						</div>
						
						<div className="section-area section-sp2 news-area" data-name="Breaking News - Breaking News - Breaking News - Breaking News - ">
							<div className="container">
								<div className="row">
									<div className="col-md-12">
										<div className="blog-post blog-md md-large">
											<div className="ttr-post-media"> 
												<Link to={"/blog-details-sidebar"}><img src={blogGridPic1} alt=""/></Link> 
											</div>
											<div className="ttr-post-info">
												<h3 className="post-title"><Link to={"/blog-details-sidebar"}>You Have the Power to Work Smart.</Link></h3>
												<ul className="media-post">
													<li><Link to={"/blog-details-sidebar"}>By Jone Doe</Link></li>
													<li><Link to={"/blog-details-sidebar"}>12 March 2020</Link></li>
												</ul>
												<p>Lorem ipsum dolor sit amet, et postulant intellegebat pri. Mel velit scriptorem cu, eu dicam volutpat Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, et postulant intellegebat pri. Mel velit scriptorem cu, eu dicam volutpat Lorem ipsum dolor sit amet.</p>
												<div className="post-extra">
													<Link to="/blog-details-sidebar" className="btn button-md radius-xl">Read More</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="posi-rl zi1">	
								<div className="container">
									<BlogSlider />
								</div>
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

export default Index;