import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick"; 
import SimpleReactLightbox, {SRLWrapper, useLightbox} from 'simple-react-lightbox';

// Images
import portPic1 from "../../../images/portfolio/portfolio-1/image_1.jpg"
import portPic2 from "../../../images/portfolio/portfolio-1/image_2.jpg"
import portPic3 from "../../../images/portfolio/portfolio-1/image_3.jpg"
import portPic4 from "../../../images/portfolio/portfolio-1/image_4.jpg"

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

const MagnificAnchor = props => {
	const { openLightbox } = useLightbox()
	return (
		<Link  to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="magnific-anchor" >
			<i className="ti-plus"></i>
		</Link>
	)
}

class projectsSlider1 extends Component{
	render(){
		
		const settings = {
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
		
		return(
			<>
				<SimpleReactLightbox>
					<SRLWrapper options={options}>
						<Slider {...settings} className="projects-carousel owl-btn-center-lr owl-btn-1 slider-sp15">
							<div className="slider-item">
								<div className="project-box m-t30 m-xs-t0">
									<div className="media">
										<img src={portPic1} alt=""/>
										<MagnificAnchor />
									</div>
								</div>
							</div>
							<div className="slider-item">
								<div className="project-box">
									<div className="media">
										<img src={portPic2} alt=""/>
										<MagnificAnchor />
									</div>
								</div>
							</div>
							<div className="slider-item">
								<div className="project-box m-t30 m-xs-t0">
									<div className="media">
										<img src={portPic3} alt=""/>
										<MagnificAnchor />
									</div>
								</div>
							</div>
							<div className="slider-item">
								<div className="project-box">
									<div className="media">
										<img src={portPic4} alt=""/>
										<MagnificAnchor />
									</div>
								</div>
							</div>
							<div className="slider-item">
								<div className="project-box m-t30 m-xs-t0">
									<div className="media">
										<img src={portPic1} alt=""/>
										<MagnificAnchor />
									</div>
								</div>
							</div>
						</Slider>
					</SRLWrapper>
				</SimpleReactLightbox>	
			</>
		);
	}
}

export default projectsSlider1;