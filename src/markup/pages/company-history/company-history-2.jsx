import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {Link as ScrollTo} from 'react-scroll';

// Layout
import Header from "../../layout/header/header1";
import Footer from "../../layout/footer/footer1";

// Elements
import ClientLogo from "../../elements/client-logo/logo-carousel";

// Images
import bannerPic1 from '../../../images/banner/banner1.jpg';
import pattern1 from '../../../images/pattern/pt1.png';
import aboutPic7 from '../../../images/about/pic7.jpg';
import aboutPic8 from '../../../images/about/pic8.jpg';
import aboutPic9 from '../../../images/about/pic9.jpg';
import aboutPic10 from '../../../images/about/pic10.jpg';

class CompanyHistory2 extends Component {
	
	render(){
		return (
			<>
				
				<Header/>
				
				<div className="page-content bg-white">
					<div className="page-banner ovpr-dark overlay-dotted ovdt2 parallax" style={{backgroundImage: "url("+bannerPic1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Company History 2</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
										<li>Company History 2</li>
									</ul>
								</div>
							 </div>
						</div>
						<ScrollTo smooth={true} to="content-area" className="banner-bottom scroll-page"><i className="ti-arrow-down"></i></ScrollTo>
					</div>
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp1 bg-gray" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container">
								<div className="heading-bx text-center">
									<h2 className="title-head m-b0">We create dreams for the future.<br/>We realize them sucessfully.</h2>
									<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								</div>
								<div className="timeline-view">
									<div className="timeline-area left wow fadeInUp" data-wow-delay="0.2s">
										<div className="timeline-content">
											<h6 className="m-b5 text-primary">2017</h6>
											<h3 className="m-b10">The Foundation of Mitech</h3>
											<div className="m-b20"><img src={aboutPic10} className="radius-sm" alt=""/></div>
											<p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
										</div>
									</div>
									<div className="timeline-area right wow fadeInUp" data-wow-delay="0.4s">
										<div className="timeline-content">
											<h6 className="m-b5 text-primary">2016</h6>
											<h3 className="m-b10">Mitech’s Golden Age</h3>
											<div className="m-b20"><img src={aboutPic9} className="radius-sm" alt=""/></div>
											<p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
										</div>
									</div>
									<div className="timeline-area left wow fadeInUp" data-wow-delay="0.6s">
										<div className="timeline-content">
											<h6 className="m-b5 text-primary">2015</h6>
											<h3 className="m-b10">Mitech’s Turning Point</h3>
											<div className="row sp10">
												<div className="m-b20 col-md-6"><img src={aboutPic8} className="radius-sm" alt=""/></div>
												<div className="m-b20 col-md-6"><img src={aboutPic7} className="radius-sm" alt=""/></div>
											</div>
											<p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
										</div>
									</div>
									<div className="timeline-area right wow fadeInUp" data-wow-delay="0.8s">
										<div className="timeline-content">
											<h3 className="m-b5 text-primary">2012</h3>
											<div className="row sp10">
												<div className="m-b20 col-md-6"><img src={aboutPic9} className="radius-sm" alt=""/></div>
												<div className="m-b20 col-md-6"><img src={aboutPic10} className="radius-sm" alt=""/></div>
											</div>
											<p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
										</div>
									</div>
									<div className="timeline-area left wow fadeInUp" data-wow-delay="0.2s">
										<div className="timeline-content">
											<h3 className="m-b5 text-primary">2011</h3>
											<div className="row sp10">
												<div className="m-b20 col-md-12"><img src={aboutPic9} className="radius-sm" alt=""/></div>
											</div>
											<p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
										</div>
									</div>
									<div className="timeline-area right wow fadeInUp" data-wow-delay="0.4s">
										<div className="timeline-content">
											<h3 className="m-b5 text-primary">2010</h3>
											<p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
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
					
					</div>
				</div>
				
				<Footer/>
				
			</>
		);
	}
}

export default CompanyHistory2;