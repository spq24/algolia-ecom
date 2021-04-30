import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick"; 

// Images
import portPic19 from "../../../images/portfolio/image_19.jpg"
import portPic20 from "../../../images/portfolio/image_20.jpg"
import portPic21 from "../../../images/portfolio/image_21.jpg"
import portPic22 from "../../../images/portfolio/image_22.jpg"

const content = [
	{
		thumb: portPic22,
        title: "Marketing",
		exeTitle: "Manager",
    },
	{
		thumb: portPic21,
        title: "Creative Design",
		exeTitle: "Development",
    },
	{
		thumb: portPic20,
        title: "Web Development",
		exeTitle: "Designer",
    },
	{
		thumb: portPic19,
        title: "Search Engine",
		exeTitle: "CEO",
    },
]

class portfolioSlider2 extends Component{
	render(){
		
		const settings = {
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
		};
		
		return(
			<>
				<Slider {...settings} className="portfolio-carousel-2 style-2 slider-sp7 owl-btn-1 owl-btn-center-lr">
					{content.map((item, id) => (
						<div className="slider-item">
							<div className="portfolio-box style-2 m-b0">
								<div className="portfolio-media">
									<img src={item.thumb} alt=""/>
								</div>
								<div className="portfolio-info">
									<h4 className="title"><Link to={"#"}>{item.title}</Link></h4>
									<span className="exe-title">{item.exeTitle}</span>	
								</div>
							</div>
						</div>
					))}
				</Slider>
			</>
		);
	}
}

export default portfolioSlider2;