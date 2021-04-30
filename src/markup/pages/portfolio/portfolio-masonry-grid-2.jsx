import React,{Component} from 'react'; 
import {Link} from 'react-router-dom';
import {Link as ScrollTo} from 'react-scroll'

// Layout
import Header from "../../layout/header/header1";
import Footer from "../../layout/footer/footer1";

// Elements
import Masonry from "../../elements/portfolio/masonry1";
import LogoCarousel from "../../elements/client-logo/logo-carousel";

// Images
import bannerPic1 from '../../../images/banner/banner1.jpg';
import patternpt1 from '../../../images/pattern/pt1.png';

class PortMasonryGrid2 extends Component{
	render(){
		return(
			
			<>
			
				<Header/>
				
				<div className="page-content bg-white">
				
					<div className="page-banner ovpr-dark overlay-dotted ovdt2 parallax" style={{backgroundImage: "url("+bannerPic1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Portfolio Masonry Grid 2</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
										<li>Portfolio Masonry Grid 2</li>
									</ul>
								</div>
							 </div>
						</div>
						<ScrollTo smooth={true} to="content-area" className="banner-bottom scroll-page"><i className="ti-arrow-down"></i></ScrollTo>
					</div>
					
					<div className="content-block" id="content-area">
					
						<div className="section-area section-sp1 bg-gray">
							<div className="container">
							
								<Masonry />
							
							</div>
						</div>
						
						<div className="section-area section-sp2" style={{backgroundImage: "url("+patternpt1+")"}}>
							<div className="container">
								<div className="heading-bx text-center">
									<h2 className="title-head m-b0">We Are Known By The <br/>Companies We Keep</h2>
									<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								</div>
								
								<LogoCarousel />
								
							</div>
						</div>
					
					</div>
				
				</div>
				
				<Footer/>
				
			</>
		)
	}
}
export default PortMasonryGrid2;