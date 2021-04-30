import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick"; 

// Images
import portPic13 from "../../../images/portfolio/portfolio-1/image_13.jpg"
import portPic14 from "../../../images/portfolio/portfolio-1/image_14.jpg"
import portPic15 from "../../../images/portfolio/portfolio-1/image_15.jpg"
import portPic16 from "../../../images/portfolio/portfolio-1/image_16.jpg"

const content = [
	{
		thumb: portPic13,
        title: "Marketing",
		exeTitle: "Manager",
    },
	{
		thumb: portPic14,
        title: "Creative Design",
		exeTitle: "Development",
    },
	{
		thumb: portPic15,
        title: "Web Development",
		exeTitle: "Designer",
    },
	{
		thumb: portPic16,
        title: "Search Engine",
		exeTitle: "CEO",
    },
	{
		thumb: portPic13,
        title: "Marketing",
		exeTitle: "Manager",
    },
	{
		thumb: portPic14,
        title: "Creative Design",
		exeTitle: "Development",
    },
	{
		thumb: portPic15,
        title: "Web Development",
		exeTitle: "Designer",
    },
	{
		thumb: portPic16,
        title: "Search Engine",
		exeTitle: "CEO",
    },
]

class portfolioSlider1 extends Component{
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
				<Slider {...settings} className="portfolio-carousel-1 style-1 slider-sp0 owl-btn-1 owl-btn-center-lr">
					{content.map((item, id) => (
						<div className="slider-item">
							<div className="portfolio-box style-3 m-b0">
								<div className="portfolio-media">
									<img src={item.thumb} alt=""/>
								</div>
								<div className="portfolio-info">
									<h4 className="title"><Link to={"/portfolio-single-4"}>{item.title}</Link></h4>
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

export default portfolioSlider1;