import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SimpleReactLightbox, {SRLWrapper} from 'simple-react-lightbox';

// Images
import galleryPic1 from '../../../images/gallery/pic1.jpg';
import galleryPic2 from '../../../images/gallery/pic2.jpg';
import galleryPic3 from '../../../images/gallery/pic3.jpg';
import galleryPic4 from '../../../images/gallery/pic4.jpg';
import galleryPic5 from '../../../images/gallery/pic5.jpg';
import galleryPic6 from '../../../images/gallery/pic6.jpg';
import galleryPic7 from '../../../images/gallery/pic7.jpg';
import galleryPic8 from '../../../images/gallery/pic8.jpg';

const content = [
	{
		thumb: galleryPic1,
	},
	{
		thumb: galleryPic2,
	},
	{
		thumb: galleryPic3,
	},
	{
		thumb: galleryPic4,
	},
	{
		thumb: galleryPic5,
	},
	{
		thumb: galleryPic6,
	},
	{
		thumb: galleryPic7,
	},
	{
		thumb: galleryPic8,
	},
]

const options = {
	settings: {
		overlayColor: "rgba(0,0,0,0.9)",
		backgroundColor: "#FDC716",
		slideAnimationType: 'slide',
	},
	buttons: {
		backgroundColor: "#232eff",
		iconColor: "rgba(255, 255, 255, 1)",
	},
	caption: {
		captionColor: "#232eff",
		captionFontFamily: "Raleway, sans-serif",
		captionFontWeight: "300",
		captionTextTransform: "uppercase",
	}
};

function GalleryImg(){
	return(
		<>
			<SimpleReactLightbox>
				<SRLWrapper options={options}>
					<ul className="magnific-image">
						{content.map((item) => (
							<li><img src={item.thumb} alt=""/></li>
						))}
					</ul>
				</SRLWrapper>
			</SimpleReactLightbox>	
		</>
	);
}

class Footer2 extends Component{
	render(){
		return(
			<>
				<footer className="footer-white">
					<div className="footer-top bt0">
						<div className="container">
							<div className="row">
								<div className="col-6 col-lg-3 col-md-2 col-sm-6">
									<div className="widget footer_widget">
										<h5 className="footer-title">Company</h5>
										<ul>
											<li><Link to={"/"}>Home</Link></li>
											<li><Link to={"about-1"}>About</Link></li>
											<li><Link to={"faq-1"}>FAQs</Link></li>
											<li><Link to={"contact-1"}>Contact</Link></li>
										</ul>
									</div>
								</div>
								<div className="col-6 col-lg-3 col-md-3 col-sm-6">
									<div className="widget footer_widget">
										<h5 className="footer-title">Get In Touch</h5>
										<ul>
											<li><Link to={"/"}>Dashboard</Link></li>
											<li><Link to={"blog-standard"}>Blog</Link></li>
											<li><Link to={"portfolio-grid-2"}>Portfolio</Link></li>
											<li><Link to={"event"}>Event</Link></li>
										</ul>
									</div>
								</div>
								<div className="col-12 col-lg-3 col-md-2 col-sm-6">
									<div className="widget footer_widget">
										<h5 className="footer-title">Other Link</h5>
										<ul>
											<li><Link to={"services-1"}>Service</Link></li>
											<li><Link to={"services-details"}>Details</Link></li>
											<li><Link to={"company-history-1"}>History</Link></li>
											<li><Link to={"team"}>Team</Link></li>
										</ul>
									</div>
								</div>
								<div className="col-12 col-lg-3 col-md-5 col-sm-6 footer-col-4">
									<div className="widget widget_gallery gallery-grid-4">
										<h5 className="footer-title">Our Gallery</h5>
										<GalleryImg />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-bottom">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 col-md-12 col-sm-12 text-center"> © 2021 <span className="text-primary">Themetrades</span>  All Rights Reserved.</div>
							</div>
						</div>
					</div>
				</footer>
				
			</>
		);
	}
}

export default Footer2;